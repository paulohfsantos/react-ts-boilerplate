import {FC, PropsWithChildren, useState } from 'react';
import { User } from '../types/Users';
import { AuthContext } from '../contexts/AuthContext';
import { setToken as setUpToken, removeToken } from '../common/HandleToken';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
  });
  const [token, setToken] = useState<string>("");

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    setUpToken(newToken);
  };

  const logout = () => {
    setToken('');
    setUser({} as User);
    removeToken();
  };

  const values = {user, token, login, logout}

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};