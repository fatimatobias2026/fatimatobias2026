import FakeLinkButton from "../../../atoms/FakeLinkButton";
import WeddingdayLine from "../../../atoms/WeddingdayLine";
import text from "./text.json";

type InfoPageProps = {
  setPageValue: (pageValue: number) => void;
};

const InfoPage = ({ setPageValue }: InfoPageProps) => {
  return (
    <div className="weddingday-page">
      <h1 className="page-top-header">{text.header}</h1>

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header1}</h3>
          <p className="standard-text">{text.text1}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header2}</h3>
          <p className="standard-text">{text.text2}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
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
          </p>
          <p className="standard-text">{text.text4}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header4}</h3>
          <p className="standard-text">{text.text5}</p>
          <p className="standard-text">
            {text.text6}
            <FakeLinkButton
              label={text.linkword1}
              onClick={() => setPageValue(5)}
              pageValue={5}
            />
            {text.text11}
          </p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
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
        <></>
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header6}</h3>
          <p className="standard-text">{text.text8}</p>
        </div>
      </div>
      <WeddingdayLine />

      <div className="weddingday-section">
        <></>
        <div className="weddingday-text">
          <h3 className="standard-header">{text.header7}</h3>
          <p className="standard-text">{text.text9}</p>
          <p className="standard-text">{text.text10}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
