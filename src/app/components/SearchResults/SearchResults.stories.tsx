import React from "react";
import Results from "./SearchResults";

export default {
  title: "Component/Results",
  component: Results,
};

export const Default = (): JSX.Element => (
  <Results
    searchResults={{
      name: "Usestate.js",
      rawUrl: "testet",
    }}
  />
);
