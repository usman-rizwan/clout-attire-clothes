import "./style.css";
import React from 'react';
import { Image, Space } from 'antd';
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';

const images = [
  'https://mdbootstrap.com/img/new/slides/043.jpg',
  'https://mdbootstrap.com/img/new/slides/043.jpg',
  'https://mdbootstrap.com/img/new/slides/043.jpg',
  
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

  return (
    <div className="product-container">
      {images.map((src, index) => (
        <div key={index} className="image-container">
          <Image
            width={500} // Set the width to 500px
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