import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login"

const routes = [
  {
    path: "/",
    name: "Login",
    element: <Login />,
    meta: { isPrivate: false }
  }
]

export const Router = createBrowserRouter(routes);