import text from "./text.json";
const toastmadmePicture = require("../../../../assets/pictures/toastmadame.jpg");
const weddingOfficientPicture = require("../../../../assets/pictures/vigselfrttare.jpg");
const toastmasterPicture = require("../../../../assets/pictures/toastmaster3.png");

const AboutToastMasterPage = () => {
  return (
    <div className="welcome-page">
      <h1 className="page-top-header">{text.header}</h1>
      <p className="standard-text-no-margins">{text.text1}</p>
      <p className="standard-text-no-margins">{text.text3}</p>

      <p className="standard-text">{text.text2}</p>

      <br />
      <br />
      <br />

      <div className="weddingday-section">
        <img className="toast-image" src={toastmasterPicture} />
        <div className="standard-text-no-margins">
          <div className="same-line">
            <h3 className="standard-header">{text.toastmasterheader}</h3>
            <p className="standard-text-no-margins">{text.toastmasterTitle}</p>
          </div>
          <p className="standard-text-no-margins">{text.toastmasterinfo1}</p>
          <p className="standard-text">
            <strong>{text.phone}</strong>
            {text.toastmasterphone}
          </p>
          <p className="standard-text-no-margins">
            <strong>{text.email}</strong>
            {text.toastmastermail}
          </p>
        </div>
      </div>

      <br />

      <div className="weddingday-section">
        <img className="toast-image" src={toastmadmePicture} />
        <div className="weddingday-text">
          <div className="same-line">
            <h3 className="standard-header">{text.toastmadameheader}</h3>
            <p className="standard-text-no-margins">{text.toastmadameTitle}</p>
          </div>
          <p className="standard-text-no-margins">{text.toastmadameinfo1}</p>
          <p className="standard-text">
            <strong>{text.phone}</strong>
            {text.toastmadamephone}
          </p>
          <p className="standard-text-no-margins">
            <strong>{text.email}</strong>
            {text.toastmadameemail}
          </p>
        </div>
      </div>

      <br />

      <div className="weddingday-section">
        <img className="toast-image" src={weddingOfficientPicture} />
        <div className="weddingday-text">
          <div className="same-line">
            <h3 className="standard-header">{text.weddingOfficientHeader}</h3>
            <p className="standard-text-no-margins">
              {text.weddingOfficientTitle}
            </p>
          </div>
          <p className="standard-text-no-margins">
            {text.weddingOfficientinfo1}
          </p>
          <p className="standard-text">{text.weddingOfficientinfo2}</p>
          <p className="standard-text">{text.weddingOfficientinfo3}</p>
          <p className="standard-text"></p>
        </div>
      </div>
    </div>
  );
};

export default AboutToastMasterPage;
