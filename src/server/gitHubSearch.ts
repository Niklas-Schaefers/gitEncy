import fetch from "node-fetch";

export async function fetchGitHubSearchCodeWithUser<T>(
  code: string,
  user: string
): Promise<T> {
  let url = "https://api.github.com/search/code?q=";
  if (code && user) {
    url += `${code}+user:${user}`;
  }
  const response = await fetch(url);
  return response.json();
}
