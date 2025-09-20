type FormInputProps = {
  name: string;
  onChangeValue: any;
  id: number;
};

const FormInput = ({ id, name, onChangeValue }: FormInputProps) => {

  const onChange = (e: any) => {
    onChangeValue(id, e.target.value);
  };

  return <input onChange={onChange} type="text" name={name} className="form-textinput" />;
};

export default FormInput;
