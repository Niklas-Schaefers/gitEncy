import React from "react";
import SearchResultsComponent from "./SearchResults";

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
    }}
  />
);
