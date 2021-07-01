import React from "react";
import SavedResultsPage from "./SavedResultsPage";

export default {
  title: "Page/SavedResultsPage",
  component: SavedResultsPage,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (): JSX.Element => <SavedResultsPage />;
