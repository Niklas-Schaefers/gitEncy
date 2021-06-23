import React from "react";
import Modal from "./Modal";

export default {
  title: "Component/Modal",
  component: Modal,
};

export const Default = (): JSX.Element => (
  <Modal
    searchResult={{
      name: "Usestate.js",
      rawUrl: "testet",
    }}
    setShowModal={() => true}
  />
);
