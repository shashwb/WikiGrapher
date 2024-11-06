import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  /** type: array of strings */
  const [categories, getCategories] = useState<string[]>([]);
  console.log("loading in the <App/> component");
  return (
    <div>
      <h1>Wikipedia Categories, right?</h1>
      <ul></ul>
    </div>
  );
};

export default App;
