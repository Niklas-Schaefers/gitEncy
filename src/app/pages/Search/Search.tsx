import React, { useState } from "react";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import styles from "./Search.module.css";

type GitHubData = {
  items: [{ name: string; html_url: string }];
};

type TransformedResult = {
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
  return (
    <div className={styles.container}>
      <div className={styles.headerSearch}>
        <HeaderSearch onSubmit={fetchGitHubData} />
      </div>
      {console.log(searchResults)}
      <div className={styles.result}>
        {searchResults.map((searchResult) => (
          <span key={searchResult.rawUrl}>{searchResult.name}</span>
        ))}
      </div>
      <div className={styles.footerMenu}>
        <FooterMenu />
      </div>
    </div>
  );
}

export default Search;
