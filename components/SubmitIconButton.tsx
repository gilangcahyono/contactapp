import CheckIcon from "./icons/CheckIcon";

const SubmitIconButton = ({ form }: { form: string }) => {
  return (
    <button type="submit" form={form} className="cursor-pointer">
      <CheckIcon />
    </button>
  );
};

export default SubmitIconButton;
