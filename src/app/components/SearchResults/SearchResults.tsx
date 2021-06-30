import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./SearchResults.module.css";
import namingGitHubData from "../../../utils/namingGitHubData";
import { TransformedResult } from "../../../types";

type SearchResultsComponentProps = {
  searchResult: TransformedResult;
};

function SearchResultsComponent({
  searchResult,
}: SearchResultsComponentProps): JSX.Element {
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
              isSaved={false}
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
