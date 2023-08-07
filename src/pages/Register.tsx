import React from "react";
import { RegisterForm } from "../components/RegisterForm";

export const Register: React.FC = () => {
  return (
    <div className="min-h-screen shadow-lg  flex items-center justify-center flex-col">
      <RegisterForm />
    </div>
  );
};
