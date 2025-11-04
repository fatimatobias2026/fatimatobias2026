import useIsMobile from "../../../hooks/useIsMobile";
import text from "./text.json";

const HeaderText = () => {
  const isMobile = useIsMobile();

  return (
    <div className="header-text">
      <div className="startText">
        <p
          className={
            isMobile ? "headertext welcome mobile" : "headertext welcome"
          }
        >
          {text.welcome}
        </p>
        <br />
        <p className={isMobile ? "headertext name mobile" : "headertext name"}>
          {text.name}
        </p>
        <br />
        <p className={isMobile ? "headertext date mobile" : "headertext date"}>
          {text.date}
        </p>
      </div>
    </div>
  );
};

export default HeaderText;
