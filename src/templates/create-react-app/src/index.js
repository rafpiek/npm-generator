import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <main>
      <h1>Starter React Project</h1>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
