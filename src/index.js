import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import engineHW from ".";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
        <h1>Display Weather</h1>
        <p><em><strong>The weather is °F in </strong> </em></p>
        </div>
        <engineHW/>
        </StrictMode>
);