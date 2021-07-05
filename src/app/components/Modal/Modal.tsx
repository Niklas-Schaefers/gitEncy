import React from "react";
import useFetch from "../../api/useFetch";
import styles from "./Modal.module.css";
import CodeHighlighted from "../CodeHighlighted/CodeHighlighted";
import { TransformedResult } from "../../../types";
import namingGitHubData from "../../../utils/namingGitHubData";
import { deleteSearchResult, postSearchResult } from "../../api/api";
import DeleteIcon from "../Icons/DeleteIcon";
import SaveIcon from "../Icons/SaveIcon";
import CloseIcon from "../Icons/CloseIcon";

type ModalProps = {
  searchResults: TransformedResult;
  setShowModal: (value: boolean) => void;
  isSaved: boolean;
  fetchData?: () => void;
};

function Modal({
  searchResults,
  setShowModal,
  isSaved,
  fetchData,
}: ModalProps): JSX.Element {
  const { data: code, isLoading, errorMessage } = useFetch(
    searchResults.rawUrl,
    false
  );
  const { userName, fileName, repoName } = namingGitHubData(searchResults);

  if (errorMessage) {
    return <>{errorMessage}</>;
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
            {!isSaved && (
              <button
                className={styles.modal__saveButton}
                onClick={() => {
                  postSearchResult(searchResults);
                  setShowModal(false);
                }}
              >
                <SaveIcon />
                Save
              </button>
            )}
            {isSaved && (
              <button
                className={styles.modal__saveButton}
                onClick={async () => {
                  await deleteSearchResult(searchResults);
                  fetchData?.();
                  setShowModal(false);
                }}
              >
                <DeleteIcon />
                Delete
              </button>
            )}
            <button
              className={styles.modal__backButton}
              onClick={() => setShowModal(false)}
            >
              <CloseIcon />
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
