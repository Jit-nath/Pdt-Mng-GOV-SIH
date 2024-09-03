import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (email === "test@example.com" && password === "password123") {
      alert("Login successful!");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center align-middle flex-col w-96 font-serif shadow-xl rounded-lg m-auto mt-28">
      <h2 className="text-3xl m-auto mt-10 mb-10 font-medium">Login</h2>
      <div className="p-5">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="mt-1 m-auto p-3 w-4/5 rounded-md shadow-md border focus:outline-none focus:shadow-blue-200"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              className="mt-1 m-auto p-3 w-4/5 rounded-md shadow-md border focus:outline-none focus:shadow-blue-200"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center w-20 px-4 py-2 mb-10 m-auto border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
