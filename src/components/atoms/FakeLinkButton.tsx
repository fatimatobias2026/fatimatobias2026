type FakeLinkButtonProps = {
  label: string;
  onClick: (val: number) => void;
  type?: "button";
  pageValue: number;
};

const FakeLinkButton = ({
  label,
  type = "button",
  onClick,
  pageValue,
}: FakeLinkButtonProps) => {
  return (
    <button
      type={type}
      onClick={() => onClick(pageValue)}
      className={"link-button"}
    >
      {label}
    </button>
  );
};

export default FakeLinkButton;
