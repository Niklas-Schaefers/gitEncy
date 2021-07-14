import React from "react";
import SearchResultsComponent from "./SearchResultsComponent";

export default {
  title: "Component/Results",
  component: SearchResultsComponent,
};

export const Default = (): JSX.Element => (
  <SearchResultsComponent
    searchResult={{
      name: "Usestate.js",
      ownerImageUrl: "string",
      rawUrl: "string",
      repoName: "string",
      searchValue: "string",
      id: "72827321",
    }}
  />
);
