"use client";

const Toggle = ({ children }: { children: React.ReactNode }) => {
  const toggle = () => {
    const menu = document.getElementById("dropdown-menu");
    menu?.classList.toggle("hidden");
    const backdrop = document.getElementById("dropdown-backdrop");
    backdrop?.classList.toggle("hidden");
  };
  return (
    <button type="button" className="cursor-pointer" onClick={toggle}>
      {children}
    </button>
  );
};

export default Toggle;
