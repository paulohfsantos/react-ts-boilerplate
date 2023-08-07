import { createContext } from "react";
import { User } from "../../types/Users";

interface AuthContextType {
  user: User;
  loginAccount: (email: string, password: string) => Promise<void>;
  registerAccount: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const initialState = {
  user: {} as User,
  loginAccount: async () => {},
  registerAccount: async () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialState);
