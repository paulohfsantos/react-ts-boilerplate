import { FC, PropsWithChildren, useState } from 'react';
import { User } from '../types/Users';
import { AuthContext } from '../contexts/AuthContext';
import { setToken as setUpToken, removeToken } from '../common/HandleToken';
import { register, login } from '../services/auth';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
  });

  const registerAccount = async (email: string, password: string) => {
    const { data: { user, token } } = await register(email, password);
    setUpToken(token);
    setUser(user);
  }

  const loginAccount = async (email: string, password: string) => {
    const { data: { user, token } } = await login(email, password);
    setUpToken(token);
    setUser(user);
  };

  const logout = () => {
    setUser({} as User);
    removeToken();
  };

  const values = {
    user,
    registerAccount,
    loginAccount,
    logout,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};