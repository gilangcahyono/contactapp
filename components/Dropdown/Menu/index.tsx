"use client";

const Menu = ({ children }: { children: React.ReactNode }) => {
  const toggle = () => {
    const modal = document.getElementById("delete-contact-modal");

    if (
      modal?.classList.contains("fixed") &&
      !modal.classList.contains("hidden")
    ) {
      return;
    }

    const modalQr = document.getElementById("qr-code-modal");

    if (
      modalQr?.classList.contains("fixed") &&
      !modalQr.classList.contains("hidden")
    ) {
      const dropdownBackdrop = document.getElementById("dropdown-backdrop");
      dropdownBackdrop?.classList.toggle("hidden");
      modalQr?.classList.toggle("hidden");
      return;
    }

    const dropdownBackdrop = document.getElementById("dropdown-backdrop");
    dropdownBackdrop?.classList.toggle("hidden");
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu?.classList.toggle("hidden");
  };

  return (
    <>
      <div
        onClick={toggle}
        id="dropdown-backdrop"
        className="hidden border border-red fixed top-0 right-0 bottom-0 left-0 bg-black/40 z-11"
      ></div>
      <div
        id="dropdown-menu"
        className={`hidden bg-white absolute -right-2 rounded-2xl shadow-lg py-4 min-w-40 w-fit z-12`}
      >
        <ul>{children}</ul>
      </div>
    </>
  );
};

export default Menu;
