import React from "react";
import SearchResults from "./SearchResults";

export default {
  title: "Component/Results",
  component: SearchResults,
};

export const Default = (): JSX.Element => (
  <SearchResults
    searchResult={{
      name: "Usestate.js",
      rawUrl: "testet",
    }}
  />
);
