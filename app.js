import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "title", key: "1" }, "I am an H1 tag"),
    React.createElement("h2", { id: "subTitle", key: "2" }, "I am an H2 tag"),
  ])
);

const root = createRoot(document.getElementById("root"));
root.render(parent);
