import React from "react";
import Home from "./Home";

export default {
  title: "Page/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (): JSX.Element => <Home />;
