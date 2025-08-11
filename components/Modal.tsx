"use client";

type Props = {
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ children }) => {
  const toggle = () => {
    const modal = document.getElementById("modal");
    modal?.classList.toggle("hidden");
    const backdrop = document.getElementById("modal-backdrop");
    backdrop?.classList.toggle("hidden");
  };
  return (
    <>
      <div
        id="modal-backdrop"
        onClick={toggle}
        className=" border border-red fixed top-0 right-0 bottom-0 left-0 bg-black/40 z-11"
      ></div>
      <div
        id="modal"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg z-12 p-4"
      >
        {children}
      </div>
    </>
  );
};

export default Modal;

export const Title: React.FC<Props> = ({ children }) => {
  return <div className="text-center font-semibold mb-3">{children}</div>;
};

export const Body: React.FC<Props> = ({ children }) => {
  return <div className="mb-3">{children}</div>;
};

export const Action: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
