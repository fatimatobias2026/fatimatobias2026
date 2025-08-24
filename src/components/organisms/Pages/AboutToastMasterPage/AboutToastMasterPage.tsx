import WeddingdayLine from "../../../atoms/WeddingdayLine";
import text from "./text.json";
const fikabild = require("../../../../assets/pictures/fikabild.jpg");

const AboutToastMasterPage = () => {
  return (
    <div className="welcome-page">
      <h1 className="page-top-header">{text.header}</h1>
      <p className="standard-text">{text.text1}</p>
      <p className="standard-text">{text.text2}</p>

      <br />
      <br />
      <br />

      <div className="weddingday-section">
        <img className="weddingday-image" src={fikabild} />
        <div className="weddingday-text">
          <h3 className="standard-header">{text.toastmasterheader}</h3>
          <p className="standard-text-no-margins">{text.toastmasterinfo1}</p>
          <p className="standard-text-no-margins">
            <strong>Telefon: </strong>
            {text.toastmasterphone}
          </p>
          <p className="standard-text-no-margins">
            <strong>E-post: </strong>
            {text.toastmastermail}
          </p>
        </div>
      </div>

      <br />

      <div className="weddingday-section">
        <img className="weddingday-image" src={fikabild} />
        <div className="weddingday-text">
          <h3 className="standard-header">{text.toastmadameheader}</h3>
          <p className="standard-text">{text.toastmadameinfo1}</p>
          <p className="standard-text-no-margins">
            <strong>Telefon: </strong>
            {text.toastmadamephone}
          </p>
          <p className="standard-text-no-margins">
            <strong>E-post: </strong>
            {text.toastmadameemail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutToastMasterPage;
