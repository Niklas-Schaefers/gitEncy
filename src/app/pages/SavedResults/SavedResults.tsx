import React, { useEffect, useState } from "react";
import { getSavedResultsFromMongoDB } from "../../../utils/api";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import styles from "./SavedResults.module.css";
import SavedResultsComponent from "../../components/SavedResults/SavedResults";
import { TransformedResult } from "../../../types";

function SavedResults(): JSX.Element {
  const [searchResults, setSearchResults] = useState<TransformedResult[]>([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getSavedResultsFromMongoDB();
    fetch(`/api/savedresults`)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setSearchResults(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const savedElements = searchResults.map((searchResult: TransformedResult) => (
    <SavedResultsComponent
      key={searchResult.rawUrl}
      searchResult={searchResult}
    />
  ));

  if (error) {
    return <>error...</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className={styles.container}>
        <HeaderBar />
        <div className={styles.savedElements}>{savedElements}</div>
        <FooterMenu />
      </div>
    );
  }
}

export default SavedResults;
