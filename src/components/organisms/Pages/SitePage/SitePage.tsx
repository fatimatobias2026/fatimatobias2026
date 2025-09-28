import useIsMobile from "../../../../hooks/useIsMobile";
import text from "./text.json";
const splashImg = require("../../../../assets/pictures/lokalbild.png");

const SitePage = () => {
  const isMobile = useIsMobile();

  return (
    <div className={isMobile ? "welcome-page-mobile" : "welcome-page"}>
      {!isMobile && (
        <>
          <img src={splashImg} />
        </>
      )}
      <h1 className="page-top-header">{text.header}</h1>
      <p className="standard-text">{text.text1}</p>
      <p className="standard-text">{text.text2}</p>
      <p className="standard-text">{text.text3}</p>
    </div>
  );
};

export default SitePage;
