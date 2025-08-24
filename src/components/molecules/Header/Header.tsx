import HeaderLine from "../../atoms/HeaderLine";
import MenuButton from "../../atoms/MenuButton";
import HeaderText from "../HeaderText/HeaderText";
import text from "./text.json";

type HeaderProps = {
  setPageValue: (pageValue: number) => void;
  page: number;
};

const Header = ({ setPageValue, page }: HeaderProps) => {
  return (
    <div className="Header">
      <HeaderText />
      <HeaderLine />
      <div className="HeaderButtons">
        <MenuButton
          label={text.welcome}
          onClick={setPageValue}
          pageValue={0}
          page={page}
        />
        <MenuButton
          label={text.weddingDay}
          onClick={setPageValue}
          pageValue={1}
          page={page}
        />
        <MenuButton
          label={text.info}
          onClick={setPageValue}
          pageValue={2}
          page={page}
        />
        <MenuButton
          label={text.aboutUs}
          onClick={setPageValue}
          pageValue={3}
          page={page}
        />
        <MenuButton
          label={text.site}
          onClick={setPageValue}
          pageValue={4}
          page={page}
        />
        <MenuButton
          label={text.notice}
          onClick={setPageValue}
          pageValue={5}
          page={page}
        />
        <MenuButton
          label={text.toastMasters}
          onClick={setPageValue}
          pageValue={6}
          page={page}
        />
        <MenuButton
          label={text.contact}
          onClick={setPageValue}
          pageValue={7}
          page={page}
        />
      </div>
    </div>
  );
};

export default Header;
