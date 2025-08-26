/* eslint-disable @next/next/no-img-element */
"use client";
import Modal from "@/components/Modal";

const ViewQrCode = () => {
  const handleClick = () => {
    const dropdownBackdrop = document.getElementById("dropdown-backdrop");
    dropdownBackdrop?.classList.toggle("hidden");
    const modal = document.getElementById("qr-code-modal");
    modal?.classList.toggle("hidden");
  };

  return (
    <>
      <div
        id="dropdown-backdrop"
        className="hidden border border-red fixed top-0 right-0 bottom-0 left-0 bg-black/40 z-11"
      ></div>
      <div
        onClick={handleClick}
        className="bg-white rounded-2xl px-3 py-3 flex items-center justify-between"
      >
        <p>QR code</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <Modal id="qr-code-modal">
        <div className="p-4">
          <img
            src="https://hexdocs.pm/qr_code/docs/qrcode.svg"
            alt="qr-code"
            className="w-full"
          />
          <p className="text-sm text-gray-500 my-2">Scan the QR code above</p>
          <button className="w-full bg-cyan-500 text-white py-3 rounded-xl hover:bg-cyan-600 active:bg-cyan-700">
            Share
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ViewQrCode;
