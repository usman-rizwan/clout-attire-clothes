import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";
import Layout from "../components/Layout.jsx";
import Text from "../components/Text.jsx";
import Gallery from "../components/Gallery.jsx";
import Social from "../components/Social.jsx";
import Product from "../components/Product/Product.jsx";
import "./style.css";

 function HomePage(){
    return(
<>
<Navbar />
<Layout />
<div className=" mt-2">
  <Carousel />
  <Text  title="// fine print" content="Limited edition seasonal collections embracing the current culture. Locally sourced with an obsessive attention to fit, fabric and  fabrication." />
  <Product/>
  <Text  title="// Have A Query" content="We are available through whatsapp and instagram. " contactDetails="Message on Whatsapp" instaDetail="Message on Instagram" bgColor="gray" >   </Text>
  <Gallery />
  <Social />
</div>
</>
    )

}
export default HomePage;