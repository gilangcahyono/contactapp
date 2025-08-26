const Modal: React.FC<{ children: React.ReactNode; id: string }> = ({
  children,
  id,
}) => {
  return (
    <div
      id={id}
      className="hidden fixed bottom-2 left-2 right-2 sm:max-w-md sm:mx-auto sm:bottom-1/2 rounded-2xl bg-white p-4 z-14"
    >
      {children}
    </div>
  );
};

export default Modal;
