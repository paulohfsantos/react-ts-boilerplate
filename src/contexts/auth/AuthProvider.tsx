import { FC, PropsWithChildren, useState } from "react";
import { setToken, removeToken } from "../../common/HandleToken";
import { register, login } from "../../services/auth";
import { User } from "../../types/Users";
import { AuthContext } from "./AuthContext";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
  });

  const registerAccount = async (email: string, password: string) => {
    const {
      data: { accessToken, user },
    } = await register(email, password);
    setToken(accessToken);
    setUser(user);
  };

  const loginAccount = async (email: string, password: string) => {
    const {
      data: { accessToken, user },
    } = await login(email, password);
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
