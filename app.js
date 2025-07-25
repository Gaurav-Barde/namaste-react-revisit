import React from "react";
import { createRoot } from "react-dom/client";

const Heading = () => (
  <div>
    <h1 className="heading">Hello from React Component!</h1>
    <h2>Hi there</h2>
  </div>
);

const ReactElement = (
  <div>
    <Heading />
    <h1>React Element</h1>
  </div>
);

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(ReactElement);
