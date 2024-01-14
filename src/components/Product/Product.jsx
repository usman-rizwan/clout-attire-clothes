
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Image, Space } from 'antd';
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import Product4 from "../../assets/images/product4.jpg"
import Product6 from "../../assets/images/product6.jpg"
import Product7 from "../../assets/images/product7.jpg"
import "./style.css";
const images = [
 Product4,
  Product6,
  Product7,
];

const Product = () => {
  const onDownload = (imageSrc) => {
    fetch(imageSrc)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration of 1000ms
    AOS.refresh(); // Refresh AOS when the component mounts
  }, []);
  return (
    
    <div className="product-container">
      {images.map((src, index) => (
        <div key={index} className="image-container" data-aos="fade-left">
          <Image
            width={300} // Set the width to 500px
           
            src={src}
            preview={{
              mask: <div className="custom-mask" />, 
              maskClassName: 'custom-mask-class', 
              toolbarRender: (
                _,
                {
                  transform: { scale },
                  actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                },
              ) => (
                <Space size={12} className="toolbar-wrapper">
                  <DownloadOutlined onClick={() => onDownload(src)} />
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
  );
};

export default Product;