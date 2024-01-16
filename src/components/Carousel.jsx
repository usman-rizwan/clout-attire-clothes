import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import Product1 from "../assets/images/product1.jpg";
import Product4 from "../assets/images/product4.jpg";
import Product10 from "../assets/images/product10.jpg";
import Product11 from "../assets/images/product11.jpg";
import Product12 from "../assets/images/product12.jpg";
import Product13 from "../assets/images/product13.jpg";
import Product14 from "../assets/images/product14.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel() {
  return (
    <div className="m-2 mt-5">
      <MDBCarousel showControls interval={3600}>
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
            src={Product4}
            style={{ objectFit: 'contain', maxHeight: '500px', width: '100%' }}
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src={Product10}
            style={{ objectFit: 'contain', maxHeight: '500px', width: '100%' }}
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <img
            src={Product11}
            style={{ objectFit: 'contain', maxHeight: '500px', width: '100%' }}
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={5}>
          <img
            src={Product12}
            style={{ objectFit: 'contain', maxHeight: '500px', width: '100%' }}
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={6}>
          <img
            src={Product13}
            style={{ objectFit: 'contain', maxHeight: '500px', width: '100%' }}
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={7}>
          <img
            src={Product14}
            style={{ objectFit: 'contain', maxHeight: '500px', width: '100%' }}
            className="d-block w-100 rounded-5"
            alt="..."
          />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
