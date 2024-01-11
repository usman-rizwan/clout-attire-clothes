import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import Layout from "./components/Layout.jsx";
import Text from "./components/Text.jsx";
import Product from "./components/Product.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Layout />
    <div className="container-fluid mt-2">
      <Carousel />
      <Text title="// fine print" content="Limited edition seasonal collections embracing the current culture. Locally sourced with an obsessive attention to fit, fabric and  fabrication." />
      <Product />
    </div>
  </React.StrictMode>
);
