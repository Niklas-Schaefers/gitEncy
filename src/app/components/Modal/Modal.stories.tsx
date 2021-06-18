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
      rawUrl: "testet",
    }}
    setShowModal={() => true}
  />
);
