import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="example@gmail.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Sign in</button>
          <div className="text-center py-2 text-gray-500">
            Not a member?
            <Link className="underline text-black" to={"/register"}>
              Sign up now.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
