import CheckIcon from "./icons/CheckIcon";

const SubmitIconButton: React.FC<{ form: string }> = ({ form }) => {
  return (
    <button type="submit" form={form} className="cursor-pointer">
      <CheckIcon />
    </button>
  );
};

export default SubmitIconButton;
