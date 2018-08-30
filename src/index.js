import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App({ c }) {
  return (
    <div className="App">
      <h1>{c}</h1>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root2 = document.getElementById("root2");
ReactDOM.render(<App c="1" />, rootElement);
// render replaces already mounted component
ReactDOM.render(<App c="2" />, rootElement);
// render also replaces arbitary html contained within the
// container
ReactDOM.render(<App c="3" />, root2);

console.log(
  document.getElementById("root") === document.getElementById("root"),
  document.getElementById("root") === document.getElementById("root2"),
  document.getElementById("root") === document.querySelector("#root"),
  document.getElementById("root") === document.getElementById("root23"),
  document.getElementById("root") === document.querySelector("#root1")
);
