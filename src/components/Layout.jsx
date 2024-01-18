import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LOGO from "../assets/images/logo.jpg";
import "./style.css"

const Layout = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="p-4 mt-5">
            <span style={{ color: "#b8b2fa", fontSize: 50 }} className="outfit">CLOUT ATTIRE</span>
            <p className="outfit">
              Crafted for Comfort, Styled for Confidence – Elevate Your
              Everyday with Clout. Our Hoodies and T-Shirts blend premium
              quality with effortless cool, ensuring you stand out with every
              wear. Unleash your unique style and embrace the ultimate in
              comfort and fashion. Clout – Where Comfort Meets Chic.
            </p>
            <b className="text-white info outfit">
              "Discover the extensive range of products from <span style={{ color: "#b8b2fa"}}> CLOUT </span>, as our
              website showcases the entire collection for your browsing
              pleasure."
            </b>
            {/* Add more content here if needed */}
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={LOGO}
            width="250px"
            height="250px"
            alt="Your Image"
            className="img-thumbnail rounded-circle shadow-2-strong mt-5 md:mt-2 "
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
