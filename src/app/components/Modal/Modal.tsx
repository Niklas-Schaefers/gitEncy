import React from "react";
import useFetch from "../../api/useFetch";
import styles from "./Modal.module.css";
import CodeHighlighted from "../CodeHighlighted/CodeHighlighted";
import { TransformedResult } from "../../../types";
import { deleteSearchResult, postSearchResult } from "../../api/api";

type SearchResults = {
  searchResults: TransformedResult;
  setShowModal: (value: boolean) => void;
};

function Modal({ searchResults, setShowModal }: SearchResults): JSX.Element {
  const { data: code } = useFetch(searchResults.rawUrl);

  const userName = searchResults.repoName.substring(
    0,
    searchResults.repoName.lastIndexOf("/")
  );
  const fileName = searchResults.name.substring(
    0,
    searchResults.name.lastIndexOf(".")
  );
  const repoName = searchResults.repoName.substring(
    searchResults.repoName.indexOf("/") + 1
  );

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.header}>
          {userName} {" - "} {fileName} {" - "} {repoName}
        </div>
        <div className={styles.code}>
          <CodeHighlighted code={code || ""} />
        </div>
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
export default Modal;
