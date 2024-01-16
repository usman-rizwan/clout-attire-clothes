import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import './style.css';

export default function Footer() {
  return (
    <MDBFooter className=' text-center text-white bg-darks '>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/direct/t/17845817354991430' target='_blank' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1'  target='_blank' href='https://api.whatsapp.com/send/?phone=923182952936&type=phone_number&app_absent=0' role='button'>
            <MDBIcon fab icon='whatsapp' />
          </MDBBtn>

       
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2024 Clout Attire. All rights reserved | Designed & Developed by < a href='https://github.com/usman-rizwan'  className='text-white pointer fw-bold'>Muhammad Usman </a> 
      </div>
      
    </MDBFooter>
  );
}