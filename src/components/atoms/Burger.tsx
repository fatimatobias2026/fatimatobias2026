type BurgerProps = {
  isOpen: boolean;
  setIsOpen: any;
};

const Burger = ({ isOpen, setIsOpen }: BurgerProps) => {
  return (
    <div className="burger-button" onClick={() => setIsOpen(!isOpen)}>
      <div
        className={
          isOpen ? "burger-item first-open" : "burger-item first-closed"
        }
      />
      <div
        className={
          isOpen ? "burger-item second-open" : "burger-item second-closed"
        }
      />
      <div
        className={
          isOpen ? "burger-item third-open" : "burger-item third-closed"
        }
      />
    </div>
  );
};

export default Burger;
