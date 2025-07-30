"use client";

const Page = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = new FormData(event.currentTarget);
    const email = body.get("email");
    const password = body.get("password");

    const res = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border"
          />
        </div>
        <button type="submit" className="w-full border mt-10 cursor-pointer">
          Login
        </button>
      </form>
    </>
  );
};

export default Page;
