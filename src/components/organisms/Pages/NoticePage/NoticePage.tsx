import useIsMobile from "../../../../hooks/useIsMobile";
import NoticeForm from "../../../molecules/NoticeForm";
import text from "./text.json";

const NoticePage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="notice-page">
      <h1 className="page-top-header">{text.header}</h1>
      {isMobile && (
        <div>
          <p style={{ fontWeight: "bolder" }}>
            O.S.A.-Formulär kan endast nås via dator
          </p>
        </div>
      )}
      <p className="standard-text">{text.text1}</p>
      <p className="standard-text">{text.text2}</p>
      <p className="standard-text">{text.text3}</p>
      <p className="standard-text">{text.text4}</p>
      <NoticeForm />
    </div>
  );
};

export default NoticePage;
