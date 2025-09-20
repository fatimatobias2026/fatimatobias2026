import { useRef, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import useSelectedPage from "../hooks/useSelectedPage";
import Burger from "./atoms/Burger";
import Countdown from "./molecules/CountDown";
import Header from "./molecules/Header/Header";
import Page from "./organisms/Pages/Page";
import Menu from "./atoms/Menu";
const splashImg = require("../assets/pictures/epicflowerimage.png");

const MainPage = () => {
  const { page, setPageValue } = useSelectedPage();

  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="MainPage">
      <div className="flower-and-header">
        {!isMobile && <img src={splashImg} className="img-flower" />}

        {isMobile ? (
          <>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} />

            <Menu
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setPageValue={setPageValue}
              page={page}
            />
          </>
        ) : (
          <>
            <div className="HeaderBox">
              <Header setPageValue={setPageValue} page={page} />
            </div>
          </>
        )}
      </div>
      <Page page={page} setPageValue={setPageValue} />

      <Countdown />
    </div>
  );
};

export default MainPage;
