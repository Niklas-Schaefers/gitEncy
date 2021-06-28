import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import router from "./server/routes";
import { connectDatabase } from "./utils/database";
import fetch from "node-fetch";
import cookieSession from "cookie-session";

const app = express();
app.use(
  cookieSession({
    secret: process.env.COOKIE_SECRET,
  })
);

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redircet_uri = process.env.REDIRCET_URI;

console.log({ client_id, client_secret });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello GitHub auth");
});

app.get("/githublogin", (_req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${redircet_uri}`
  );
});

async function getAccessToken({ code, client_id, client_secret }) {
  const res = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code,
    }),
  });
  const data = await res.json();
  const params = new URLSearchParams(data);
  return params.get("access_token");
}
async function fetchGitHubUser(token) {
  const request = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: "token " + token,
    },
  });
  return await request.json();
}

app.get("/login/github/callback", async (req, res) => {
  const code = req.query.code;
  const access_token = await getAccessToken({ code, client_id, client_secret });
  const user = await fetchGitHubUser(access_token);
  if (user) {
    req.session.access_token = access_token;
    req.session.githubId = user.id;
    res.redirect("/admin");
  } else {
    res.send("Login did not succeed!");
  }
});

app.get("/logout", (req, res) => {
  if (req.session) req.session = null;
  res.redirect("/");
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

  const { PORT = 6000 } = process.env;
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}}`);
  });
});
