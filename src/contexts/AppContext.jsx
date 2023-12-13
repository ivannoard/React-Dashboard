import React from "react";
import RightBarProvider from "./RightBarContext";

const AppContext = ({ children }) => {
  return <RightBarProvider>{children}</RightBarProvider>;
};

export default AppContext;
