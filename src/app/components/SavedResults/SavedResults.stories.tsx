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
      searchValue: "string",
      id: "192382193",
      saveDate: "02.02.2022",
    }}
    fetchData={() => true}
  />
);
