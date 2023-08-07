import {
  LoaderFunctionArgs,
  RouteObject,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Login } from "../pages/Login";

import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { isLogged } from "../common/HandleToken";

const authMiddleware = async (req: LoaderFunctionArgs) => {
  const path = req.request.url.split("/")[3];
  const logged = await isLogged();

  // User logged trying to login or register
  if (path === "login" || path === "register") {
    if (logged) {
      return redirect("/");
    }

    return null;
  }

  // User not logged trying to access other pages
  if (!logged) {
    return redirect("/login");
  }

  return null;
};

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
    loader: authMiddleware,
  },
  {
    path: "/register",
    element: <Register />,
    loader: authMiddleware,
  },
  {
    path: "/",
    element: <Home />,
    loader: authMiddleware,
  },
];

export const Router = createBrowserRouter(routes);
