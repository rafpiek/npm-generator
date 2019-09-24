import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Button, Input } from "components";

function App() {
  return (
    <main>
      <h1>Starter React Project</h1>
      <Button />
      <Input />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
