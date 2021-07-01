import fetch from "node-fetch";

type ErrorResult = {
  message: string;
};

type Searchrequest = {
  full_name: string;
  html_url: string;
};

export async function fetchGitHubSearchCodeWithUser(
  code: string,
  user: string
): Promise<Searchrequest> {
  const url = `https://api.github.com/search/code?q=${code}+user:${user}`;
  const response = await fetch(url);
  if (!response.ok) {
    const errorResult: ErrorResult = await response.json();
    throw {
      message: errorResult.message,
    };
  }
  const result = await response.json();
  return result;
}
