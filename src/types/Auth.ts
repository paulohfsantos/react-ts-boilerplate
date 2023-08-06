import { User } from "./Users";

export interface Auth {
  token: string;
  user: User;
}

export interface AuthRequest {
  email: string;
  password: string;
}