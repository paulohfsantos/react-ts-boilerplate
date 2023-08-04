import { createContext } from 'react';
import { User } from '../types/Users';

interface AuthContextType {
  user: User;
  token: string;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const initialState = {
  user: {} as User,
  token: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (token: string, user: User) => {},
  logout: () => {}
}

export const AuthContext = createContext<AuthContextType>(initialState);