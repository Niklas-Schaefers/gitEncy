export type GitHubData = {
  items: GitHubItems[];
};

type GitHubItems = {
  name: string;
  html_url: string;
  repository: Repository;
};

type Repository = {
  full_name: string;
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
  searchValue: string;
  id: string | undefined;
  saveDate: string;
};

export type SearchResults = {
  searchResult: TransformedResult;
};

export type User = {
  name: string;
  login: string;
  avatar_url: string;
  id: string;
};

export type AccessTokenRequest = {
  code: string;
  client_id: string | undefined;
  client_secret: string | undefined;
};
