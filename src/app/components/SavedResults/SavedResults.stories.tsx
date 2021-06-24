import React from "react";
import SavedResultsComponent from "./SavedResults";

export default {
  title: "Component/Results",
  component: SavedResultsComponent,
};

export const Default = (): JSX.Element => (
  <SavedResultsComponent
    searchResult={{
      name: "Usestate.js",
      ownerImageUrl: "string",
      rawUrl: "string",
      repoName: "string",
    }}
  />
);
