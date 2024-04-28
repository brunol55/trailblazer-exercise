import "./MethodButton.css";

const MethodButton = ({
  httpMethod,
  handleMethodSelect,
  selectedHttpMethod,
}: {
  httpMethod: string;
  handleMethodSelect: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, httpMethod: string) => void;
  selectedHttpMethod: string;
}) => {
  return (
    <button className={`method-box ${selectedHttpMethod === httpMethod && "checked"}`} onClick={(event) => handleMethodSelect(event, httpMethod)}>
      {httpMethod}
    </button>
  );
};

export default MethodButton;
