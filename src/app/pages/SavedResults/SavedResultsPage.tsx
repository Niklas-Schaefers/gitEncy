import React, { useCallback, useEffect, useState } from "react";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import styles from "./SavedResultsPage.module.css";
import SavedResultsComponent from "../../components/SavedResults/SavedResults";
import { TransformedResult } from "../../../types";

function SavedResultsPage(): JSX.Element {
  const [searchResults, setSearchResults] = useState<TransformedResult[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(() => {
    fetch(`/api/savedresults`)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoading(true);
          setSearchResults(data);
        },
        (error) => {
          setIsLoading(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const savedElements = searchResults.map((searchResult: TransformedResult) => (
    <SavedResultsComponent
      key={searchResult.rawUrl}
      searchResult={searchResult}
      fetchData={fetchData}
    />
  ));

  if (error) {
    return <>error...</>;
  } else {
    return (
      <div className={styles.container}>
        <HeaderBar />
        {!isLoading ? (
          <div className={styles.loadingSpinner}></div>
        ) : (
          <div className={styles.savedElements}>{savedElements}</div>
        )}
        <FooterMenu />
      </div>
    );
  }
}

export default SavedResultsPage;
