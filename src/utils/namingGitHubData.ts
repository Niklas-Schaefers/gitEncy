import type { TransformedResult } from "../types";

type RenamedResults = {
  userName: string;
  fileName: string;
  repoName: string;
};

export function namingGitHubData(
  searchResults: TransformedResult
): RenamedResults {
  const userName = searchResults.repoName.substring(
    0,
    searchResults.repoName.lastIndexOf("/")
  );
  const fileName = searchResults.name.substring(
    0,
    searchResults.name.lastIndexOf(".")
  );
  const repoName = searchResults.repoName.substring(
    searchResults.repoName.indexOf("/") + 1
  );
  return { userName, fileName, repoName };
}
export default namingGitHubData;
