type FormTextAreaProps = {
  name: string;
};

const FormTextArea = ({ name }: FormTextAreaProps) => {
  return <textarea name={name} className="form-textarea" />;
};

export default FormTextArea;
