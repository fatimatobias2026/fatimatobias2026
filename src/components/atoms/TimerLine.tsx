import useIsMobile from "../../hooks/useIsMobile";

const HeaderLine = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={isMobile ? "timer-line mobile" : "timer-line desktop"}
    ></div>
  );
};

export default HeaderLine;
