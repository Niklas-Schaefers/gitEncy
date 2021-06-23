import React, { useState } from "react";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import SearchResults from "../../components/SearchResults/SearchResults";
import styles from "./Search.module.css";

type GitHubData = {
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
  rawUrl: string;
  repoName: string;
  ownerImageUrl: string;
};

function Search(): JSX.Element {
  const [searchResults, setSearchResults] = useState<TransformedResult[]>([]);

  function fetchGitHubData(searchValue: string, filterValue: string) {
    fetch(`/api/search?code=${searchValue}&user=${filterValue}`)
      .then((response) => response.json())
      .then((data: GitHubData) => {
        const transformed: TransformedResult[] = data.items.map((item) => {
          return {
            name: item.name,
            repoName: item.repository.full_name,
            ownerImageUrl: item.repository.owner.avatar_url,
            rawUrl: item.html_url
              .replace(
                "https://github.com/",
                "https://raw.githubusercontent.com/"
              )
              .replace("/blob", ""),
          };
        });
        setSearchResults(transformed);
      });
  }

  const searchElements = searchResults.map((searchResult) => (
    <SearchResults key={searchResult.rawUrl} searchResult={searchResult} />
  ));

  return (
    <div className={styles.container}>
      {console.log(searchResults)}
      <HeaderSearch onSubmit={fetchGitHubData} />
      <div className={styles.searchElements}>{searchElements}</div>
      <FooterMenu />
    </div>
  );
}

export default Search;
