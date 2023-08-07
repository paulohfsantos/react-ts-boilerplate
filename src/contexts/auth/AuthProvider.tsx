import { FC, PropsWithChildren, useEffect, useState } from "react";
import { setToken, removeToken } from "../../common/HandleToken";
import { User } from "../../types/Users";
import { AuthContext } from "./AuthContext";
import { AuthService } from "../../services/auth";
import { themeChange } from "theme-change";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
  });

  const registerAccount = async (email: string, password: string) => {
    const {
      data: { accessToken, user },
    } = await AuthService.register(email, password);
    setToken(accessToken);
    setUser(user);
  };

  const loginAccount = async (email: string, password: string) => {
    const {
      data: { accessToken, user },
    } = await AuthService.login(email, password);
    setToken(accessToken);
    setUser(user);
  };

  const logout = () => {
    setUser({} as User);
    removeToken();
    window.location.href = "/login";
  };

  const values = {
    user,
    registerAccount,
    loginAccount,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
