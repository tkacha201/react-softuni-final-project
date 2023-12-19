import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);

  async function handleLogin(e) {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const userInfo = await axios.post("/login", { email, password });
      if (userInfo.data.message === "password is ok") {
        setUser(userInfo.data.user);
        alert("Login successful");
        setRedirect(true);
      } else {
        setError("Login failed");
      }
    } catch (err) {
      setError("Login failed");
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
          {error && <div className="text-red-500">{error}</div>}
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
