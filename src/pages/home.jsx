import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";
import Layout from "../components/Layout.jsx";
import Text from "../components/Text.jsx";
import Gallery from "../components/Gallery.jsx";

import Product from "../components/Product/Product.jsx";
import FloatBtn from "../components/FloatBtn.jsx";
import "./style.css";
import QRCodeScan from "../components/QrCode.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <Layout />
      <div className="mt-2">
        <Carousel />
        <Text
          title="// fine print"
          content="Limited edition seasonal collections embracing the current culture. Locally sourced with an obsessive attention to fit, fabric, and fabrication."
        />
        <Product />
        <Text
          title="// Have A Query"
          content="We are available through WhatsApp and Instagram. "
          contactDetails="Message on Whatsapp"
          instaDetail="Message on Instagram"
          bgColor="gray"
        ></Text>
        <Gallery />
      </div>
      <FloatBtn />
      <Text
          title="// Scan Qr Code "
          content={<QRCodeScan/>}
          bgColor="gray"
        ></Text>
    </>
  );
}

export default HomePage;
