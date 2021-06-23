import React, { useState } from "react";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import SearchResults from "../../components/SearchResults/SearchResults";
import styles from "./Search.module.css";

type GitHubData = {
  items: [{ name: string; html_url: string }];
};

export type TransformedResult = {
  name: string;
  rawUrl: string;
};

function Search(): JSX.Element {
  const [searchResults, setSearchResults] = useState<TransformedResult[]>([]);

  function fetchGitHubData(searchValue: string, filterValue: string) {
    fetch(`/api/search?code=${searchValue}&user=${filterValue}`)
      .then((response) => response.json())
      .then((data: GitHubData) => {
        const transformed = data.items.map((item) => {
          return {
            name: item.name,
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
      <HeaderSearch onSubmit={fetchGitHubData} />
      <div className={styles.searchElements}>{searchElements}</div>
      <FooterMenu />
    </div>
  );
}

export default Search;
