import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { themeChange } from "theme-change";
import { Router } from "./routes/routes";

export const App = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return <RouterProvider router={Router} />;
};
