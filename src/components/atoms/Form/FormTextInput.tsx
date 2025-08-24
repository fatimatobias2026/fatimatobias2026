type FormInputProps = {
  name: string;
};

const FormInput = ({ name }: FormInputProps) => {
  return <input type="text" name={name} className="form-textinput" />;
};

export default FormInput;
