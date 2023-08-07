import { createRoot } from "react-dom/client";
import { AuthProvider } from "./contexts/auth/AuthProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/routes.tsx";
import { Toaster } from "react-hot-toast";
import "./main.css";
import { App } from "./App.tsx";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <AuthProvider>
    <Toaster />

    <App />
  </AuthProvider>
);
