import { render } from "solid-js/web";
import App from "./app.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not founded");
}

render(() => <App />, root);
