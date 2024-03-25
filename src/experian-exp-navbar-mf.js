import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Navbar from "./Navbar";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Navbar
});

export const { bootstrap, mount, unmount } = lifecycles;
