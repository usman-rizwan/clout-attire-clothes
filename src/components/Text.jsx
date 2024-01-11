import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
export default function Text({ title, content }) {
  return (
    <div className="container-fluid black-color mt-cs">

      <div className="d-flex justify-content-center items-center">
        <h1 className="display-4"> {title}</h1>
      </div>
      <div className="d-flex justify-content-center items-center">
        <p className="lead">
        {content}
        </p>
      </div>
    </div>
  );
}
