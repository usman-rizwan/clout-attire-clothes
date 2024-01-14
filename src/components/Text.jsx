import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import "./style.css";

export default function Text({ title, content, bgColor, contactDetails }) {
  const instagramLink = "https://www.instagram.com/direct/t/17845817354991430";
  const whatsappChatLink =
    "https://api.whatsapp.com/send/?phone=923468872096&text=I+am+interested+in+your+products+please+send+me+products+details+thanks+&type=phone_number&app_absent=0";

  const handleInstagramClick = () => {
    window.location.href = instagramLink;
    window.location.href = whatsappChatLink;
  };

  return (
    
      <div
        className="container-fluid mt-cs my-div "
        style={{ backgroundColor: bgColor }}
      >
        <div
          className="mx-auto animate__animated animate__rotateIn mb-4"
          style={{ width: "125px", height: "6px", backgroundColor: "#00b490" }}
        ></div>
        <div className="d-flex justify-content-center items-center">
          <h1 className="display-4 fw-bold"> {title}</h1>
        </div>
        <div className="d-flex justify-content-center items-center">
          <p className="lead .custom-indent">{content}</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="custom-indent">
            <a
              className="link"
              target="_blank"
              href={instagramLink}
              onClick={handleInstagramClick}
            >

            </a>
          </span>

          <span className="custom-indent">
            <a
              className="link"
              target="_blank"
              href={whatsappChatLink}
              onClick={handleInstagramClick}
            >
              {contactDetails}
            </a>
          </span>
        </div>

      </div>
    
  );
}
