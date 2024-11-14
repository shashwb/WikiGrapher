import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  /** type: array of strings */
  const [categories, setCategories] = useState<string[]>([]);

  /** fetch */
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("network response failed");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data.map((category: any) => category.name));
      })
      .catch((err) => console.error("err fetching categories", err));
  }, []);

  return (
    <div>
      <h1>Wikipedia Categories: test</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>category: {category}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
