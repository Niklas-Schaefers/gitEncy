import express from "express";
import { getGitHubUserByAccessToken } from "./../utils/auth";

const clientId: string | undefined = process.env.CLIENT_ID;
const clientSecret: string | undefined = process.env.CLIENT_SECRET;
const redircetUri: string | undefined = process.env.REDIRCET_URI;

const routerOauth = express.Router();

routerOauth.get("/githublogin", (_req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${redircetUri}`
  );
});

routerOauth.post("/github/login", async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).send("no code");
  } else {
    const user = await getGitHubUserByAccessToken({
      code,
      client_id: clientId,
      client_secret: clientSecret,
    });
    return res.status(200).json(user);
  }
});

export default routerOauth;
