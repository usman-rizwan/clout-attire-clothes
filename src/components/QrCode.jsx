
import { QRCode, Button } from 'antd';
import Logo from "../assets/images/logo.jpg"
import "mdb-react-ui-kit/dist/css/mdb.min.css";
const QRCodeScan = () => {
  return (
    <>
      <span className='poppins'>Ready to join clout community?</span>
      <div className='d-flex justify-content-center items-center'>

      <QRCode
    errorLevel="H"
    value="https://chat.whatsapp.com/LPpwtht8hiuDGb5RSyPOQm"
    icon={Logo}
  />
  </div>
    </>
  );
};
export default QRCodeScan;