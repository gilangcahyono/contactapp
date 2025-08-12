"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-3">
      <h1 className="text-5xl font-bold text-pink-500">500</h1>
      <h2 className="text-2xl font-semibold">Internal Server Error</h2>
      <p className="text-center">
        We apologize for the inconvenience. Please try again later.
      </p>
      <button
        onClick={() => reset()}
        className="bg-cyan-500 text-white py-3 px-4 rounded-xl hover:bg-cyan-600 active:bg-cyan-700"
      >
        Try again
      </button>
    </div>
  );
}
