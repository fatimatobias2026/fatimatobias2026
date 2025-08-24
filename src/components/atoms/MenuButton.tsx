type ButtonProps = {
  label: string;
  onClick: (val: number) => void;
  type?: "button";
  pageValue: number;
  page: number;
};

const Button = ({
  label,
  onClick,
  type = "button",
  pageValue,
  page,
}: ButtonProps) => {
  return (
    <button
      onClick={() => onClick(pageValue)}
      type={type}
      className={pageValue === page ? "MenuButton-selected" : "MenuButton"}
    >
      {label}
    </button>
  );
};

export default Button;
