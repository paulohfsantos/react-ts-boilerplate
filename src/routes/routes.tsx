import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import { Login } from "../pages/Login"
import { verifyAuth } from "../common/HandleToken";

import { Register } from "../pages/Register";
import { Home } from "../pages/Home";

const verifyLogin = async () => {
  try {
    await verifyAuth();
    redirect('/');
  } catch (error) {
    return redirect('/login');
  }
  return null;
}

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
    loader: verifyLogin,
  },
  {
    path: "/register",
    element: <Register />,
    loader: verifyLogin,
  },
  {
    path: "/",
    element: <Home />,
    loader: verifyLogin,
  }
]

export const Router = createBrowserRouter(routes);