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
};
