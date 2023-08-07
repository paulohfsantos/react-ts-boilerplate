import React from "react";
import { useAuth } from "../hooks/useAuth";

export const Home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Home</h1>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
