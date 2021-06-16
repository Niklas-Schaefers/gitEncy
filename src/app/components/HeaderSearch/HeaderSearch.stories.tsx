import React from "react";
import HeaderSearch from "./HeaderSearch";

export default {
  title: "Component/HeaderMenu ",
  component: HeaderSearch,
};

export const Search = (): JSX.Element => (
  <HeaderSearch onSubmit={console.log} />
);
