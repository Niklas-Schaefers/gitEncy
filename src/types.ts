export type GitHubData = {
  items: GitHubItems[];
};

type GitHubItems = {
  name: string;
  html_url: string;
  repository: Repository;
};

type Repository = {
  fullName: string;
  owner: Owner;
};

type Owner = {
  avatar_url: string;
};

export type TransformedResult = {
  name: string;
  ownerImageUrl: string;
  rawUrl: string;
  repoName: string;
};

export type SearchResults = {
  searchResult: TransformedResult;
};
