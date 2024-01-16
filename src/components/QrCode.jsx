
import { QRCode, Button } from 'antd';
import Logo from "../assets/images/logo.jpg"
import "mdb-react-ui-kit/dist/css/mdb.min.css";
const QRCodeScan = () => {
  return (
    <>
      
      <QRCode
    errorLevel="H"
    value="https://instagram.com/clout.attire"
    icon={Logo}
  />
    </>
  );
};
export default QRCodeScan;