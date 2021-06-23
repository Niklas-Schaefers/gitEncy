import React from "react";
import useFetch from "../../usefetch";
import styles from "./Modal.module.css";
import CodeHighlighted from "../CodeHighlighted/CodeHighlighted";
import { deleteSearchResult, postSearchResult } from "../../../utils/api";
import { TransformedResult } from "../../../types";

type SearchResults = {
  searchResults: TransformedResult;
  setShowModal: (value: boolean) => void;
};

function Modal({ searchResults, setShowModal }: SearchResults): JSX.Element {
  const { data: code } = useFetch(searchResults.rawUrl);
  console.log(searchResults);

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.header}>
          {searchResults.name.substring(0, searchResults.name.lastIndexOf("."))}
          <br />
          {searchResults.repoName}
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
