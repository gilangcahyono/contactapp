const Action: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex justify-center mt-4 gap-4">
      {/* <button className="w-full bg-cyan-500 text-white py-3 rounded-xl hover:bg-cyan-600 active:bg-cyan-700 font-semibold">
        Delete
      </button>
      <button className="w-full bg-gray-200 py-3 rounded-xl hover:bg-gray-300 active:bg-gray-400 font-semibold">
        Cancel
      </button> */}
      {children}
    </div>
  );
};

export default Action;
