import useSelectedPage from "../hooks/useSelectedPage";
import Countdown from "./molecules/CountDown";
import Header from "./molecules/Header/Header";
import Page from "./organisms/Pages/Page";
const splashImg = require("../assets/pictures/epicflowerimage.png");

const MainPage = () => {
  const { page, setPageValue } = useSelectedPage();

  return (
    <div className="MainPage">
      <div className="flower-and-header">
        <img src={splashImg} className="img-flower" />

        <div className="HeaderBox">
          <Header setPageValue={setPageValue} page={page} />
        </div>
      </div>
      <Page page={page} setPageValue={setPageValue} />

      <Countdown />
    </div>
  );
};

export default MainPage;
