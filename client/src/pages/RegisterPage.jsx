import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Success! Please log in.");
    } catch (error) {
      alert("Registration failed. Try again later");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Full Name (e.g., Jane Doe)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="text-red-500">{error}</div>}
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Have an account?
            <Link className="underline text-black" to={"/login"}>
              Sign in.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
