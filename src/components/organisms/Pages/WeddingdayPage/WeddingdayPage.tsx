import useIsMobile from "../../../../hooks/useIsMobile";
import FakeLinkButton from "../../../atoms/FakeLinkButton";
import WeddingdayLine from "../../../atoms/WeddingdayLine";
import text from "./text.json";
const fikabild = require("../../../../assets/pictures/fikabild.jpg");
const vigselbild = require("../../../../assets/pictures/vigselbild.jpg");
const middagsbild = require("../../../../assets/pictures/middag.png");
const incheckningbild = require("../../../../assets/pictures/incheckning.png");
const utcheckningbild = require("../../../../assets/pictures/utcheckning.png");

type WeddingdayPageProps = {
  setPageValue: (pageValue: number) => void;
};

const WeddingdayPage = ({ setPageValue }: WeddingdayPageProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={isMobile ? "weddingday-page-mobile" : "weddingday-page"}>
      <h1 className="page-top-header">{text.header}</h1>

      <div className="weddingday-section">
        <img className="weddingday-image" src={incheckningbild} />
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header1}</h3>
          <p className="standard-text">{text.text1}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <img className="weddingday-image" src={vigselbild} />
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header2}</h3>
          <p className="standard-text">{text.text2}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <img className="weddingday-image" src={middagsbild} />
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header3}</h3>
          <p className="standard-text">
            {text.text3}
            <FakeLinkButton
              label={text.linkword1}
              onClick={() => setPageValue(5)}
              pageValue={5}
            />
            .{/* TODO: fix dot */}
            {text.text4}
          </p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <img className="weddingday-image" src={fikabild} />
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header4}</h3>
          <p className="standard-text">{text.text5}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <img className="weddingday-image" src={utcheckningbild} />
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header5}</h3>
          <p className="standard-text">{text.text7}</p>
        </div>
      </div>
    </div>
  );
};

export default WeddingdayPage;
