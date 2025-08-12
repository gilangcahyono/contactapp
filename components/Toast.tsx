const Toast: React.FC<{ title: string; open: boolean }> = (props) => {
  const { title, open = false } = props;
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-0 right-0 bottom-0 left-0 bg-black/50`}
    >
      <div
        className={`${
          open ? "block" : "hidden"
        } bg-white py-3 px-4 w-fit fixed rounded-2xl flex items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 bg-cyan-500 rounded-full p-2 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Toast;
