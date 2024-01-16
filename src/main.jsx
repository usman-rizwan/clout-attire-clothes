import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./router";
import HomePage from "./pages/home";

function Main() {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
<Main />
);
