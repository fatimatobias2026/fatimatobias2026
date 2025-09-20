import text from "../molecules/Header/text.json";
import MenuLine from "./MenuLine";
import Burger from "./Burger";
import MenuButtonMobile from "./MenuButtonMobile";

type MenuProps = {
  isOpen: boolean;
  setIsOpen: any;
  setPageValue: (pageValue: number) => void;
  page: number;
};

const Menu = ({ isOpen, setIsOpen, setPageValue, page }: MenuProps) => {
  return (
    <div className={isOpen ? "menu isopen" : "menu isclosed"}>
      <MenuLine />

      <MenuButtonMobile
        label={text.welcome}
        onClick={setPageValue}
        pageValue={0}
        page={page}
        setIsOpen={setIsOpen}
      />
      <MenuLine />
      <MenuButtonMobile
        label={text.weddingDay}
        onClick={setPageValue}
        pageValue={1}
        page={page}
        setIsOpen={setIsOpen}
      />
      <MenuLine />

      <MenuButtonMobile
        label={text.info}
        onClick={setPageValue}
        pageValue={2}
        page={page}
        setIsOpen={setIsOpen}
      />
      <MenuLine />

      <MenuButtonMobile
        label={text.site}
        onClick={setPageValue}
        pageValue={4}
        page={page}
        setIsOpen={setIsOpen}
      />
      <MenuLine />

      <MenuButtonMobile
        label={text.notice}
        onClick={setPageValue}
        pageValue={5}
        page={page}
        setIsOpen={setIsOpen}
      />
      <MenuLine />

      <MenuButtonMobile
        label={text.toastMasters}
        onClick={setPageValue}
        pageValue={6}
        page={page}
        setIsOpen={setIsOpen}
      />
      <MenuLine />

      <MenuButtonMobile
        label={text.contact}
        onClick={setPageValue}
        pageValue={7}
        page={page}
        setIsOpen={setIsOpen}
      />
      <MenuLine />
    </div>
  );
};
export default Menu;
