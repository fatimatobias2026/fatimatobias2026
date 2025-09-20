type FormRadioButtonsProps = {
  label: string;
  value: string;
  onChangeValue: any;
  name: string;
  id: number;
};

const FormRadioButtons = ({
  id,
  label,
  value,
  onChangeValue,
  name
}: FormRadioButtonsProps) => {

  const onChange = (e: any) => {
    onChangeValue(id, value);
  };

  return (
    <label className="form-radiobuttons">
      <input
        type="radio"
        name={name}
        onChange={() => onChange(value)}
      />
      {label}
    </label>
  );
};

export default FormRadioButtons;
