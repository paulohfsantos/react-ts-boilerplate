import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import { Login } from "../pages/Login"
import { verifyAuth } from "../common/HandleToken";
import Register from "../pages/Register";

const verifyLogin = async () => {
  if (!(await verifyAuth())) {
    throw redirect("/login");
  }
  return true;
}

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <h1>Home</h1>,
    loader: verifyLogin,
  }
]

export const Router = createBrowserRouter(routes);