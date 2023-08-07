import { createContext } from 'react';
import { User } from '../types/Users';

interface AuthContextType {
  user: User;
  loginAccount: (email: string, password: string) => Promise<void>;
  registerAccount: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const initialState = {
  user: {} as User,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loginAccount: async (email: string, password: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  registerAccount: async (email: string, password: string) => {},
  logout: () => {}
}

export const AuthContext = createContext<AuthContextType>(initialState);