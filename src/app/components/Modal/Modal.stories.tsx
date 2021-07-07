import React from "react";
import Modal from "./Modal";

export default {
  title: "Component/Modal",
  component: Modal,
};

export const Default = (): JSX.Element => (
  <Modal
    searchResults={{
      name: "Usestate.js",
      ownerImageUrl: "string",
      rawUrl: "string",
      repoName: "string",
      searchValue: "string",
      id: "192382193",
    }}
    setShowModal={() => true}
    isSaved={true}
  />
);
