import React from "react";
import HeaderSearch from "./HeaderSearch";

export default {
  title: "Component/HeaderMenu ",
  component: HeaderSearch,
};

export const Search = (): JSX.Element => (
  <HeaderSearch onSearch={console.log} onFilter={console.log} />
);
