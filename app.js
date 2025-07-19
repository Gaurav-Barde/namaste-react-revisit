const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "title" }, "I am H1 tag"),
    React.createElement("h2", { id: "subTitle" }, "I am H2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
