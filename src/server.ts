import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import router from "./server/routes";
import { connectDatabase } from "./utils/database";
import session from "express-session";
import qs from "querystring";
import randomString from "randomstring";
import axios from "axios";

const { PORT = 6000 } = process.env;
const redirect_uri = process.env.HOST + "/redirect";

const app = express();
const csrfString = randomString.generate();

app.use(express.json());

app.use(
  session({
    secret: randomString.generate(),
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login");
});

app.get("/githublogin", (req, res) => {
  req.session.csrf_string = randomString.generate();
  const githubAuthUrl =
    "https://github.com/login/oauth/authorize?" +
    qs.stringify({
      client_id: process.env.CLIENT_ID,
      redirect_uri: redirect_uri,
      state: req.session.csrf_string,
      scope: "user:email",
    });
  res.redirect(githubAuthUrl);
});
app.all("/redirect", (req, res) => {
  const code = req.query.code;
  const returnedState = req.query.state;
  if (req.session.csrf_string === returnedState) {
    axios
      .post(
        "https://github.com/login/oauth/access_token?" +
          qs.stringify({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code: code,
            redirect_uri: redirect_uri,
            state: req.session.csrf_string,
          }),
        {}
      )
      .then((response) => {
        req.session.access_token = qs.parse(response.data).access_token;
        res.redirect("/user");
      });
  } else {
    res.redirect("/");
  }
});

app.use("/api", router);

// Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "app/index.html"));
});

if (process.env.MONGODB_URL === undefined) {
  throw new Error("Missing env MONGODB_URL");
}

connectDatabase(process.env.MONGODB_URL).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}}`);
  });
});
