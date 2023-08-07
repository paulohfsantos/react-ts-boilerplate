import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginAccount } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginAccount(email, password);
      navigate("/");
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return (
    <form
      className="flex flex-col shadow-lg p-12 rounded-md gap-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <input
        className="input input-bordered"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input border input-bordered"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <a href="/register" className="text-blue-500 text-center hover:underline">
        Don't have an account?
      </a>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  );
};
