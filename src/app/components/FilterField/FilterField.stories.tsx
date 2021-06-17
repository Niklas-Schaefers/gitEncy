import React from "react";
import FilterField from "./FilterField";

export default {
  title: "Component/FilterField",
  component: FilterField,
};

export const Default = (): JSX.Element => (
  <FilterField value="" onChange={console.log} placeholder="Filter..." />
);
