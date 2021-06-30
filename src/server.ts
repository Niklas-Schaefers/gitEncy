import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import router from "./server/routes";
import { connectDatabase } from "./utils/database";
import { getGitHubUserByAccessToken } from "./utils/auth";

const client_id: string | undefined = process.env.CLIENT_ID;
const client_secret: string | undefined = process.env.CLIENT_SECRET;
const redircet_uri: string | undefined = process.env.REDIRCET_URI;

const app = express();

app.use(express.json());

app.get("/oauth/githublogin", (_req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${redircet_uri}`
  );
});

app.post("/oauth/github/login", async (_req, res) => {
  const { code } = _req.body;

  if (!code) {
    return res.status(400).send("no code");
  } else {
    const user = await getGitHubUserByAccessToken({
      code,
      client_id,
      client_secret,
    });
    console.log(user);
    return res.status(200).json(user);
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

  const { PORT = 6000 } = process.env;
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}}`);
  });
});
