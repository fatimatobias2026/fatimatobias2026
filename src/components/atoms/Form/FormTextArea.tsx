type FormTextAreaProps = {
  id: number;
  name: string;
  onChangeValue: any;
};

const FormTextArea = ({ id, name, onChangeValue }: FormTextAreaProps) => {
  const onChange = (e: any) => {
    onChangeValue(id, e.target.value);
  };

  return <textarea name={name} onChange={onChange} className="form-textarea" />;
};

export default FormTextArea;
