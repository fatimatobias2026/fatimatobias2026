import useIsMobile from "../../../../hooks/useIsMobile";
import FakeLinkButton from "../../../atoms/FakeLinkButton";
import WeddingdayLine from "../../../atoms/WeddingdayLine";
import text from "./text.json";

type InfoPageProps = {
  setPageValue: (pageValue: number) => void;
};

const InfoPage = ({ setPageValue }: InfoPageProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={isMobile ? "weddingday-page-mobile" : "weddingday-page"}>
      <h1 className="page-top-header">{text.header}</h1>
      <div className="weddingday-section">
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header1}</h3>
          <p className="standard-text">{text.text1}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header2}</h3>
          <p className="standard-text">{text.text2}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header3}</h3>
          <p className="standard-text">
            {text.text3}{" "}
            <a href="https://boka.naasfabriker.se/campaign/campaign-details?channelId=cbdba692-5261-4370-819c-78ac6d95fb77&sessionId=059d31c1-615f-4461-87f8-e5a81f9c9641&campaignId=766a88c3-bec1-44a1-a269-c03f544a3662&langId=1&promoCode=FatimaTobias2026&currency=SEK">
              {text.linkword2}
            </a>
          </p>
          <p className="standard-text">{text.text4}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header4}</h3>
          <p className="standard-text">{text.text5}</p>
          <p className="standard-text">{text.text6}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header5}</h3>
          <p className="standard-text">
            {text.text7}
            <FakeLinkButton
              label={text.linkword1}
              onClick={() => setPageValue(6)}
              pageValue={6}
            />
            {/* TODO: fix dot */}
          </p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header6}</h3>
          <p className="standard-text">{text.text8}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header7}</h3>
          <p className="standard-text">{text.text9}</p>
          <p className="standard-text">{text.text10}</p>
        </div>
      </div>
      <WeddingdayLine />
      <div className="weddingday-section">
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header8}</h3>
          <p className="standard-text">{text.text12}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
