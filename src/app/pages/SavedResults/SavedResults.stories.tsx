import React from "react";
import SavedResults from "./SavedResults";

export default {
  title: "Page/SearchResults",
  component: SavedResults,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (): JSX.Element => <SavedResults />;
