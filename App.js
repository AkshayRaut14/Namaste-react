{
  /* <div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div>; */
  // react element is a object
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am h2 tag"),
  ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
