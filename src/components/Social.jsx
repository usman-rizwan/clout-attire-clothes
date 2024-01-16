import React from 'react';
import './style.css'
export default function App() {
  return (
    <div className="position-relative position-relative-example">
      {/* <div className="position-absolute top-0 start-0 translate-middle"><i class="fa-brands fa-instagram mr-5"></i></div>
      <div className="position-absolute top-0 start-50 translate-middle"><i class="fa-brands fa-instagram mr-5"></i></div>
      <div className="position-absolute top-0 start-100 translate-middle"><i class="fa-brands fa-instagram mr-5"></i></div>
      <div className="position-absolute top-50 start-0 translate-middle"><i class="fa-brands fa-instagram mr-5"></i></div>
      <div className="position-absolute top-50 start-50 translate-middle"><i class="fa-brands fa-instagram mr-5"></i></div>
      <div className="position-absolute top-50 start-100 translate-middle"><i class="fa-brands fa-instagram mr-5"></i></div>
      <div className="position-absolute top-100 start-0 translate-middle display-5 "><i class="fa-brands fa-instagram mr-5"></i></div> */}
      <div className="position-absolute top-100 start-50 translate-middle"></div>
      <div className="position-absolute bottom-0 start-0"><i class="fa-brands fa-whatsapp mr-5 display-5 text-success"></i></div>
      <div className="position-absolute bottom-0 end-0"><i class="fa-brands fa-instagram mr-5 display-5 text-gradient insta"></i></div>
    </div>
  );
}
