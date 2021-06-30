import { AccessTokenRequest, User } from "../types";
import fetch from "node-fetch";

export async function getGitHubUserByAccessToken({
  code,
  client_id,
  client_secret,
}: AccessTokenRequest): Promise<User> {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      code,
      client_id: client_id,
      client_secret: client_secret,
    }),
  });

  const result = await response.json();

  if (result.error) {
    console.error("Error:" + result.error);
  }
  const user = await getGitHubUser(result.access_token);
  return user;
}

async function getGitHubUser(access_token: string): Promise<User> {
  const response = await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  console.log(access_token);
  const user = await response.json();

  return user;
}
