import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerAccount } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerAccount(email, password);

      navigate("/");
      // eslint-disable-next-line
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <form
      className="flex flex-col shadow-lg p-12 rounded-md gap-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold mb-4">Register Page</h1>
      <input
        className="input input-bordered"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input input-bordered"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <a href="/login" className="text-blue-500 text-center hover:underline">
        Already have an account?
      </a>
      <button className="btn btn-primary" type="submit">
        Register
      </button>
    </form>
  );
};
