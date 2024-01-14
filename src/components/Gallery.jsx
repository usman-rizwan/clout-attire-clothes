import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import Product1 from "../assets/images/product1.jpg"
import Product2 from "../assets/images/product2.jpg"
import Product3 from "../assets/images/product3.jpg"
import Product4 from "../assets/images/product4.jpg"
import Product5 from "../assets/images/product5.jpg"
import Product6 from "../assets/images/product6.jpg"
import Product7 from "../assets/images/product7.jpg"
import Product8 from "../assets/images/product8.jpg"
import Product9 from "../assets/images/product9.jpg"

export default function Gallery() {
  return (
    <div className='container'>
    <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>

        <img
          src={Product2}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />


        <img
          src={Product3}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
         src={Product1}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
        src={Product5}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
         src={Product9}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
         src={Product8}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>
    </div>
  );
}