import fetch from "node-fetch";
import { GitHubData, TransformedResult } from "../types";

type ErrorResult = {
  message: string;
};

export async function fetchGitHubSearchCodeWithUser(
  searchValue: string,
  filterValue: string
): Promise<TransformedResult[]> {
  const url = `https://api.github.com/search/code?q=${searchValue}+user:${filterValue}`;
  const response = await fetch(url);
  if (!response.ok) {
    const errorResult: ErrorResult = await response.json();
    throw {
      message: errorResult.message,
    };
  }
  const result: GitHubData = await response.json();

  const formattedCurrentDate = new Date().toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const transformed: TransformedResult[] = result.items.map((item) => {
    return {
      name: item.name,
      repoName: item.repository.full_name,
      ownerImageUrl: item.repository.owner.avatar_url,
      rawUrl: item.html_url
        .replace("https://github.com/", "https://raw.githubusercontent.com/")
        .replace("/blob", ""),
      searchValue: searchValue,
      id: undefined,
      saveDate: formattedCurrentDate,
    };
  });
  return transformed;
}
