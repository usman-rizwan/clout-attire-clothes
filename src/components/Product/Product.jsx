
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Image, Space    } from 'antd';
import {EyeOutlined } from '@ant-design/icons'
import {
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import Product4 from "../../assets/images/product4.jpg"
import Product5 from "../../assets/images/product5.jpg"
import Product1 from "../../assets/images/product1.jpg"
import "./style.css";
const images = [
 Product4,
  Product5,
  Product1,
];

const Product = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration of 1000ms
    AOS.refresh(); // Refresh AOS when the component mounts
  }, []);
  return (
    <>
    <Image.PreviewGroup >
    <div className="d-flex justify-content-center items-center overflow">
        <h1 className="poppins"style={{fontSize:"40px" }}><span style={{fontSize:"30px",fontStyle:"italic" }} className="poppins fw-bold">//</span> Popular</h1>
      </div>
    
    
     <div className="product-container">
      
      {images.map((src, index) => (
        <div key={index} className="image-container" data-aos="fade-left">
          <Image
            width={300} 
           
            src={src}
            preview={{
              mask: <div className="custom-mask " > <EyeOutlined /> Preview</div>, 
              maskClassName: 'custom-mask-class', 
              toolbarRender: (
                _,
                {
                  transform: { scale },
                  actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                },
              ) => (
                <Space size={15} className="toolbar-wrapper">
                
                  <SwapOutlined rotate={90} onClick={onFlipY} />
                  <SwapOutlined onClick={onFlipX} />
                  <RotateLeftOutlined onClick={onRotateLeft} />
                  <RotateRightOutlined onClick={onRotateRight} />
                  <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                  <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                </Space>
              ),
            }}
          />
        </div>
      ))}
    </div>
    </Image.PreviewGroup>
    </>
  );
};

export default Product;