type FormRadioButtonsProps = {
  label: string;
  value: string;
  setIsComing: (value: string) => void;
};

const FormRadioButtons = ({
  label,
  value,
  setIsComing,
}: FormRadioButtonsProps) => {
  return (
    <label className="form-radiobuttons">
      <input
        type="radio"
        name="isComing"
        value={value}
        onChange={() => setIsComing(value)}
      />
      {label}
    </label>
  );
};

export default FormRadioButtons;
