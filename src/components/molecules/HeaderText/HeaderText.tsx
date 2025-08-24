import text from "./text.json";

const HeaderText = () => {
  return (
    <div className="startText">
      <div className="startText">
        <p className="headertext-welcome">{text.welcome}</p>
        <br />
        <p className="headertext-name">{text.name}</p>
        <br />
        <p className="headertext-date">{text.date}</p>
      </div>
    </div>
  );
};

export default HeaderText;
