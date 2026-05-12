type Props = {
  placeholder: string;
  type?: string;
};

function InputField({ placeholder, type = "text" }: Props) {
  return (
    <input
      className="input-field"
      placeholder={placeholder}
      type={type}
    />
  );
}

export default InputField;