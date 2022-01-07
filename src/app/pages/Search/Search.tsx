import React, { useState } from "react";
import { TransformedResult } from "../../../types";
import { useUser } from "../../auth/AuthContext";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import ErrorCatIcon from "../../components/Icons/ErrorCatIcon";
import SearchResultsComponent from "../../components/SearchResultsComponent/SearchResultsComponent";
import styles from "./Search.module.css";

function Search(): JSX.Element {
  const [searchResults, setSearchResults] = useState<TransformedResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = useUser();

  function fetchGitHubData(searchValue: string, filterValue: string) {
    setIsLoading(true);
    fetch(`/api/search?code=${searchValue}&user=${filterValue}`)
      .then((response) => response.json())
      .then((data: TransformedResult[]) => {
        for (let i = 0; i < data.length; i++) {
          data[i].id = user.id;
        }
        setSearchResults(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }
  const searchElements = searchResults.map((searchResult) => (
    <SearchResultsComponent
      key={searchResult.rawUrl}
      searchResult={searchResult}
    />
  ));

  if (error) {
    return (
      <div className={styles.errorState}>
        <ErrorCatIcon />
        <div>Ups... User or code not found, try again</div>
        <button
          onClick={() => {
            setError(null);
            setIsLoading(false);
          }}
        >
          Try again
        </button>
      </div>
    );
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
