import React, { useState } from "react";
import { GitHubData, TransformedResult } from "../../../types";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import SearchResultsComponent from "../../components/SearchResults/SearchResults";
import styles from "./Search.module.css";

function Search(): JSX.Element {
  const [searchResults, setSearchResults] = useState<TransformedResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchGitHubData(searchValue: string, filterValue: string) {
    setIsLoading(true);
    fetch(`/api/search?code=${searchValue}&user=${filterValue}`)
      .then((response) => response.json())
      .then(
        (data: GitHubData) => {
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
              searchValue: searchValue,
            };
          });
          setSearchResults(transformed);
          setIsLoading(false);
          setError(error);
        },
        (error) => {
          setIsLoading(true);
          setError(error);
        }
      );
  }
  const searchElements = searchResults.map((searchResult) => (
    <SearchResultsComponent
      key={searchResult.rawUrl}
      searchResult={searchResult}
    />
  ));

  if (error) {
    return <>error...</>;
  } else {
    return (
      <div className={styles.container}>
        <HeaderSearch onSubmit={fetchGitHubData} />
        {isLoading ? (
          <div className={styles.loadingSpinner}></div>
        ) : (
          <div className={styles.searchElements}>{searchElements}</div>
        )}
        <FooterMenu />
      </div>
    );
  }
}

export default Search;
