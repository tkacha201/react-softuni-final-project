import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const userInfo = await axios.post("/login", { email, password });
      if (userInfo.data.message === "password is ok") {
        setUser(userInfo.data.user);
        alert("Login successful");
        setRedirect(true);
      } else {
        alert("Login failed");
      }
    } catch (err) {
      alert("Login failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLogin}>
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
