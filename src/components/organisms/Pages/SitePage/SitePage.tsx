import text from "./text.json";

const SitePage = () => {
  return (
    <div className="welcome-page">
      <h1 className="page-top-header">{text.header}</h1>
      <p className="standard-text">{text.text1}</p>
      <p className="standard-text">{text.text2}</p>
      <p className="standard-text">{text.text3}</p>
      <p className="standard-text">{text.text4}</p>
      <p className="standard-text">{text.text5}</p>
    </div>
  );
};

export default SitePage;
