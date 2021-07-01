import React, { useEffect, useState } from "react";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import styles from "./SavedResults.module.css";
import SavedResultsComponent from "../../components/SavedResults/SavedResults";
import { TransformedResult } from "../../../types";
import { getSavedResultsFromMongoDB } from "../../api/api";

function SavedResults(): JSX.Element {
  const [searchResults, setSearchResults] = useState<TransformedResult[]>([]);
  useEffect(() => {
    getSavedResultsFromMongoDB();
    fetch(`/api/savedresults`)
      .then((response) => response.json())
      .then((data) => {
        return setSearchResults(data);
      });
  }, []);

  const savedElements = searchResults.map((searchResult: TransformedResult) => (
    <SavedResultsComponent
      key={searchResult.rawUrl}
      searchResult={searchResult}
    />
  ));

  return (
    <div className={styles.container}>
      <HeaderBar />
      <div className={styles.savedElements}>{savedElements}</div>
      <FooterMenu />
    </div>
  );
}

export default SavedResults;
