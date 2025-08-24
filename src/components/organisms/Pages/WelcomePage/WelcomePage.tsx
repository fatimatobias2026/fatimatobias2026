import FakeLinkButton from "../../../atoms/FakeLinkButton";
import text from "./text.json";

const splashImg = require("../../../../assets/pictures/frontpage.jpg");

type WelcomePageProps = {
  setPageValue: (pageValue: number) => void;
};

const WelcomePage = ({ setPageValue }: WelcomePageProps) => {
  return (
    <div className="welcome-page">
      <img src={splashImg} />
      <h1 className="page-top-header">{text.header}</h1>
      <p className="standard-text">{text.text1}</p>
      <p className="standard-text">{text.text2}</p>
      <p className="standard-text">{text.text3}</p>
      <p className="standard-text">
        {text.text4}
        <FakeLinkButton
          label={text.linkword1}
          onClick={() => setPageValue(5)}
          pageValue={5}
        />
      </p>
      <p className="standard-text">
        {text.text5}
        <FakeLinkButton
          label={text.linkword1}
          onClick={() => setPageValue(7)}
          pageValue={7}
        />
      </p>
      <p className="standard-text">{text.text6}</p>
      <p className="standard-text">{text.text7}</p>
    </div>
  );
};

export default WelcomePage;
