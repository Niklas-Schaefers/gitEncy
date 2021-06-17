import React from "react";
import { TransformedResult } from "../../pages/Search/Search";
import styles from "./SearchResults.module.css";

type SearchResults = {
  searchResults: TransformedResult;
};

function Results({ searchResults }: SearchResults): JSX.Element {
  return (
    <div className={styles.results}>
      <span className={styles.name}>{searchResults.name}</span>
      <a href={searchResults.rawUrl} className={styles.rawurl}>
        <button className={styles.button}>Check Code</button>
      </a>
    </div>
  );
}

export default Results;
