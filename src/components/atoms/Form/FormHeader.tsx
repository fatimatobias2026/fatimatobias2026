type FormHeaderProps = {
  text: string;
};

const FormLabel = ({ text }: FormHeaderProps) => {
  return <h3 className="form-header"> {text} </h3>;
};

export default FormLabel;
