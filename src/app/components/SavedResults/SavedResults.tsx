import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./SavedResults.module.css";
import { TransformedResult } from "../../../types";
import namingGitHubData from "../../../utils/namingGitHubData";
import FolderIcon from "../Icons/FolderIcon";
import CheckCodeIcon from "../Icons/CheckCodeIcon";

type SavedResultsComponentProps = {
  searchResult: TransformedResult;
  fetchData: () => void;
};

function SavedResultsComponent({
  searchResult,
  fetchData,
}: SavedResultsComponentProps): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showCollapse, setShowCollapse] = useState(false);
  const { userName, fileName, repoName } = namingGitHubData(searchResult);

  return (
    <div className={styles.collapse}>
      <button
        onClick={() => setShowCollapse(!showCollapse)}
        className={styles.toggle}
      >
        <FolderIcon />
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
            <span className={styles.saveDate}>
              Saved: {searchResult.saveDate}
            </span>
            <span>
              {showModal && (
                <Modal
                  searchResults={searchResult}
                  isSaved
                  setShowModal={setShowModal}
                  fetchData={fetchData}
                />
              )}
            </span>
            <button
              className={styles.button}
              onClick={() => setShowModal(true)}
            >
              Check Code
              <CheckCodeIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SavedResultsComponent;
