import NoticeForm from "../../../molecules/NoticeForm";
import text from "./text.json";

const NoticePage = () => {
  return (
    <div className="notice-page">
      <h1 className="page-top-header">{text.header}</h1>
      <p className="standard-text">{text.text1}</p>
      <p className="standard-text">{text.text2}</p>
      <p className="standard-text">{text.text3}</p>
      <p className="standard-text">{text.text4}</p>
      <NoticeForm />
    </div>
  );
};

export default NoticePage;
