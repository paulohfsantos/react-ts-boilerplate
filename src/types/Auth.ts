import { User } from "./Users";

export interface Auth {
  accessToken: string;
  user: User;
}

export interface AuthRequest {
  email: string;
  password: string;
}