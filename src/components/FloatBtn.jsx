import {
  WhatsAppOutlined,
  MessageOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import React from "react";
import { FloatButton } from "antd";

const handleInstaClick = () => {
  const instagramLink = "https://www.instagram.com/direct/t/17845817354991430";
  window.open(instagramLink, "_blank");
};
const handleWhatsappClick = () => {
  const whatsappChatLink =
    "https://api.whatsapp.com/send/?phone=923182952936&type=phone_number&app_absent=0";
  window.open(whatsappChatLink, "_blank");
};
const FloatBtn = () => (
  <>
    <FloatButton.Group
     tooltip={<div>Message</div>}
      trigger="click"
      type="success"
      style={{ right: 24 }}
      icon={<MessageOutlined />}
    >
      <p onClick={handleInstaClick}>
        {" "}
        <FloatButton icon={<InstagramOutlined />} />{" "}
      </p>
      <p onClick={handleWhatsappClick}>
        {" "}
        <FloatButton icon={<WhatsAppOutlined />} />{" "}
      </p>
    </FloatButton.Group>
  </>
);
export default FloatBtn;
