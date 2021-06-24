import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./SavedResults.module.css";
import { SearchResults } from "../../../types";

function SavedResultsComponent({ searchResult }: SearchResults): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className={styles.searchResults}>
      <div className={styles.results}>
        <span className={styles.name}>
          {searchResult.name.substring(0, searchResult.name.lastIndexOf("."))}
          <br />
          {searchResult.repoName}

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

export default SavedResultsComponent;
