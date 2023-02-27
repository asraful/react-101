import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

const continer = document.getElementById("root");
const root = createRoot(continer);
root.render(<App />);
