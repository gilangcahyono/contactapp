type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="border rounded px-4 py-2 bg-blue-500 text-white"
      {...props}
    >
      {children}
    </button>
  );
};
