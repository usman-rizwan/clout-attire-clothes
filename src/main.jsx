import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx"
import Layout from "./components/Layout.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Layout />
    <div className="container-fluid mt-2">
    <Carousel />

    </div>
  </React.StrictMode>
);
