import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-3">
      <h1 className="text-5xl font-bold text-pink-500">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-center">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link
        href="/"
        className="bg-cyan-500 text-white py-3 px-4 rounded-xl hover:bg-cyan-600 active:bg-cyan-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
