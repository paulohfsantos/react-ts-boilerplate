import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>
);
