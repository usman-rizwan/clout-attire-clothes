import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel() {
  return (
    <div className="m-2 mt-5">
      <MDBCarousel showControls>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src="https://mdbootstrap.com/img/new/slides/042.jpg"
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src="https://mdbootstrap.com/img/new/slides/043.jpg"
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
