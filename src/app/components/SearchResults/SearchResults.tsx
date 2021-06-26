import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./SearchResults.module.css";
import { SearchResults } from "../../../types";
import namingGitHubData from "../../../utils/namingGitHubData";

function SearchResultsComponent({ searchResult }: SearchResults): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { fileName, repoName } = namingGitHubData(searchResult);

  return (
    <div className={styles.searchResults}>
      <div className={styles.results}>
        <span className={styles.name}>
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
