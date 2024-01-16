import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import Product1 from "../assets/images/product1.jpg";
import Product6 from "../assets/images/product6.jpg";
import Product7 from "../assets/images/product7.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel() {
  return (
    <div className="m-2 mt-5">
      <MDBCarousel showControls>
        <MDBCarouselItem itemId={1}>
          <img
            src={Product1}
            style={{ objectFit: 'contain', maxHeight: '500px', width: '100%' }}
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src={Product7}
            style={{ objectFit: 'contain', maxHeight: '500px', width: '100%' }}
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src={Product6}
            style={{ objectFit: 'contain', maxHeight: '500px', width: '100%' }}
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
