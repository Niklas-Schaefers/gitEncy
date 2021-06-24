import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./SearchResults.module.css";
import { SearchResults } from "../../../types";

function SearchResultsComponent({ searchResult }: SearchResults): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);

  const userName = searchResult.repoName.substring(
    0,
    searchResult.repoName.lastIndexOf("/")
  );
  const fileName = searchResult.name.substring(
    0,
    searchResult.name.lastIndexOf(".")
  );
  const repoName = searchResult.repoName.substring(
    searchResult.repoName.indexOf("/") + 1
  );

  return (
    <div className={styles.searchResults}>
      <div className={styles.results}>
        <span className={styles.name}>
          {userName} <br />
          {fileName}
          <br />
          {repoName}
          {showModal && (
            <Modal
              searchResults={searchResult}
              setShowModal={setShowModal}
            ></Modal>
          )}
        </span>
        <button className={styles.button} onClick={() => setShowModal(true)}>
          Check Code
        </button>
      </div>
    </div>
  );
}

export default SearchResultsComponent;
