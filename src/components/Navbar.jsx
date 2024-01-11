import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import LOGO from "../assets/images/logo-removebg-.png";
import './style.css'

export default function Navbar() {
  return (
    <>
      <MDBNavbar light bgColor="dark" className="fixed-top black-color">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <div className="d-flex justify-content-center">
              <img
                src={LOGO}
                height="50"
                alt="clout-logo"
                loading="lazy"
                className=""
              />
            </div>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
