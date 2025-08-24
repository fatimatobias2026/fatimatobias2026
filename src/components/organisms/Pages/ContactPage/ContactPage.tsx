import text from "./text.json";

const ContactPage = () => {
  return (
    <div className="welcome-page">
      <h1 className="page-top-header">{text.header}</h1>
      <p className="standard-text">{text.text1}</p>
      <p className="standard-text">{text.text2}</p>

      <h3 className="standard-header">{text.person1}</h3>
      <p className="standard-text">{text.email1}</p>
      <p className="standard-text">{text.phone1}</p>

      <h3 className="standard-header">{text.person2}</h3>
      <p className="standard-text">{text.email2}</p>
      <p className="standard-text">{text.phone2}</p>
    </div>
  );
};

export default ContactPage;
