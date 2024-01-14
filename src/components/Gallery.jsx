import React, { useEffect } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import AOS from "aos";
import "aos/dist/aos.css";
import Product1 from "../assets/images/product1.jpg";
import Product2 from "../assets/images/product2.jpg";
import Product3 from "../assets/images/product3.jpg";
import Product5 from "../assets/images/product5.jpg";
import Product8 from "../assets/images/product8.jpg";
import Product9 from "../assets/images/product9.jpg";

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration of 1000ms
    AOS.refresh(); // Refresh AOS when the component mounts
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center items-center">
        <h1 style={{color:"#c3b5f3"}}>Clout Gallery</h1>
      </div>
      <MDBRow>
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <div data-aos="zoom-out-up">
            <img
              src={Product2}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <img
              src={Product3}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <div data-aos="zoom-out-down">
            <img
              src={Product1}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
            <img
              src={Product5}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <div data-aos="zoom-out-right">
            <img
              src={Product9}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <img
              src={Product8}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
