import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Modal.module.css";
import CodeHighlighted from "../CodeHighlighted/CodeHighlighted";
import { deleteSearchResult, postSearchResult } from "../../../utils/api";
import { TransformedResult } from "../../../types";
import namingGitHubData from "../../../utils/namingGitHubData";

type SearchResults = {
  searchResults: TransformedResult;
  setShowModal: (value: boolean) => void;
};

function Modal({ searchResults, setShowModal }: SearchResults): JSX.Element {
  const { data: code, isLoading, errorMessage } = useFetch(
    searchResults.rawUrl,
    false
  );
  const { userName, fileName, repoName } = namingGitHubData(searchResults);

  if (errorMessage) {
    return <>error...</>;
  } else {
    return (
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.header}>
            {userName} {" - "} {fileName} {" - "} {repoName}
          </div>

          {isLoading ? (
            <div className={styles.loadingSpinnerWrapper}>
              <div className={styles.loadingSpinner}></div>
            </div>
          ) : (
            <div className={styles.code}>
              <CodeHighlighted code={code || ""} />
            </div>
          )}
          <div className={styles.modal__buttons}>
            <button
              className={styles.modal__saveButton}
              onClick={() => postSearchResult(searchResults)}
            >
              Save
            </button>
            <button
              className={styles.modal__saveButton}
              onClick={() => deleteSearchResult(searchResults)}
            >
              Delete
            </button>
            <button
              className={styles.modal__backButton}
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
        <div />
      </div>
    );
  }
}
export default Modal;
