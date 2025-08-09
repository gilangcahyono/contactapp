const BackDrop: React.FC<{ open: boolean }> = (props) => {
  const { open = false } = props;
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed inset-0 h-full bg-black opacity-40 flex items-center justify-center z-[100000000]`}
    >
      <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default BackDrop;
