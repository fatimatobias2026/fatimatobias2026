import useIsMobile from "../../../../hooks/useIsMobile";
import text from "./text.json";

const ContactPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className={isMobile ? "welcome-page-mobile" : "welcome-page"}>
      <h1 className="page-top-header">{text.header}</h1>
      <p className="standard-text">{text.text1}</p>

      <br />

      <div className="contactpage-box">
        <h3 className="standard-header">{text.person1}</h3>
        <p className="standard-text-no-margins">{text.phone1}</p>
        <p className="standard-text">{text.email1}</p>
      </div>
      <br />
      <br />

      <div className="contactpage-box">
        <h3 className="standard-header">{text.person2}</h3>
        <p className="standard-text-no-margins">{text.phone2}</p>
        <p className="standard-text">{text.email2}</p>
      </div>
    </div>
  );
};

export default ContactPage;
