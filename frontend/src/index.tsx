import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/** tailwind */
import "./index.css";
/** Auth */
// import AuthProvider from "./components/AuthProvider";
import AuthProvider from "./components/AuthProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
