import { useRef, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import useSelectedPage from "../hooks/useSelectedPage";
import Burger from "./atoms/Burger";
import Countdown from "./molecules/CountDown";
import Header from "./molecules/Header/Header";
import Page from "./organisms/Pages/Page";
import Menu from "./atoms/Menu";
const flowersLeft = require("../assets/pictures/blommor1.jpg");
const flowersMiddle = require("../assets/pictures/blommor2.jpg");
const flowersRight = require("../assets/pictures/blommor3.jpg");

const MainPage = () => {
  const { page, setPageValue } = useSelectedPage();

  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="MainPage">
      {isMobile && (
        <>
          <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
          <Menu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setPageValue={setPageValue}
            page={page}
          />
        </>
      )}
      {!isMobile && (
        <div className="flower-and-header">
          <img src={flowersLeft} className="flowers top left" />
          <div className="HeaderBox">
            <Header setPageValue={setPageValue} page={page} />
          </div>
          <img src={flowersRight} className="flowers top right" />
        </div>
      )}
      <Page page={page} setPageValue={setPageValue} />
      <Countdown />
      <div className="fill-page"></div>
      {!isMobile && (
        <div className="flower-row-bottom">
          <img src={flowersLeft} className="flowers bottom left" />
          <img src={flowersMiddle} className="flowers" />
          <img src={flowersRight} className="flowers bottom right" />
        </div>
      )}
    </div>
  );
};

export default MainPage;
