import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Header } from "../components/Header";

export const Home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen items-center justify-between">
      <Header />
      <h1 className="text-4xl font-bold">Home</h1>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
