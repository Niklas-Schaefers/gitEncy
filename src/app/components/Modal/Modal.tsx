import React from "react";
import useFetch from "../../usefetch";
import { TransformedResult } from "../../pages/Search/Search";
import styles from "./Modal.module.css";
import CodeHighlighted from "../CodeHighlighted/CodeHighlighted";

type SearchResults = {
  searchResults: TransformedResult;
  setShowModal: (value: boolean) => void;
};

function Modal({ searchResults, setShowModal }: SearchResults): JSX.Element {
  const { data: code } = useFetch(searchResults.rawUrl);

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <div className={styles.header}>
          {searchResults.name.substring(0, searchResults.name.lastIndexOf("."))}
        </div>
        <div className={styles.code}>
          <CodeHighlighted code={code || ""} />
        </div>
        <div className={styles.modal__buttons}>
          <button
            className={styles.modal__saveButton}
            onClick={() => setShowModal(false)}
          >
            Save
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
