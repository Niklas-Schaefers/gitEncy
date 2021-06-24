import React, { useState } from "react";
import { GitHubData, TransformedResult } from "../../../types";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import SearchResultsComponent from "../../components/SearchResults/SearchResults";
import styles from "./Search.module.css";

function Search(): JSX.Element {
  const [searchResults, setSearchResults] = useState<TransformedResult[]>([]);

  function fetchGitHubData(searchValue: string, filterValue: string) {
    fetch(`/api/search?code=${searchValue}&user=${filterValue}`)
      .then((response) => response.json())
      .then((data: GitHubData) => {
        const transformed: TransformedResult[] = data.items.map((item) => {
          return {
            name: item.name,
            repoName: item.repository.fullName,
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
    <SearchResultsComponent
      key={searchResult.rawUrl}
      searchResult={searchResult}
    />
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
