import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./SavedResults.module.css";
import { SearchResults } from "../../../types";

function SavedResultsComponent({ searchResult }: SearchResults): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showCollapse, setShowCollapse] = useState(false);

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
    <div className={styles.collapse}>
      <button
        onClick={() => setShowCollapse(!showCollapse)}
        className={styles.toggle}
      >
        {searchResult.searchValue.toUpperCase()} {" in "}
        {repoName} {" by "} {userName}
      </button>
      {showCollapse && (
        <div>
          <div className={styles.searchResults}>
            <img
              className={styles.ownerImageUrl}
              src={searchResult.ownerImageUrl}
            />
            <span className={styles.fileName}>File: {fileName}</span>
            <span className={styles.userName}>User: {userName}</span>
            <span className={styles.repoName}>Repo: {repoName}</span>
            <span>
              {showModal && (
                <Modal
                  searchResults={searchResult}
                  setShowModal={setShowModal}
                ></Modal>
              )}
            </span>
            <button
              className={styles.button}
              onClick={() => setShowModal(true)}
            >
              Check Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SavedResultsComponent;