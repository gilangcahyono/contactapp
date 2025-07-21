"use client";

import Loading from "@/app/loading";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        {children}
      </button>
      <Loading open={pending} />
    </>
  );
};

export default SubmitButton;
