type ButtonProps = {
  label: string;
  onClick: (val: number) => void;
  type?: "button";
  pageValue: number;
  page: number;
  setIsOpen: any;
};

const Button = ({
  label,
  onClick,
  type = "button",
  pageValue,
  page,
  setIsOpen,
}: ButtonProps) => {
  function handleOnClick() {
    onClick(pageValue);
    setIsOpen(false);
  }
  return (
    <button
      onClick={() => handleOnClick()}
      type={type}
      className={pageValue === page ? "menu-button selected" : "menu-button"}
    >
      {label}
    </button>
  );
};

export default Button;
