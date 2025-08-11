"use client";

const Modal: React.FC<{ children: React.ReactNode }> & {
  Body: typeof Body;
  Title: typeof Title;
} = ({ children }) => {
  return (
    <>
      <div
        onClick={() => console.log("sfas")}
        className=" border border-red fixed top-0 right-0 bottom-0 left-0 bg-black/40 z-11"
      ></div>
      <div
        // className={` bg-white absolute rounded-2xl shadow-lg py-4 min-w-40 w-fit z-12`}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg py-4 min-w-40 w-fit z-12"
      >
        <div className="">{children}</div>
      </div>
    </>
  );
};

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

Modal.Body = Body;
Modal.Title = Title;

export default Modal;
