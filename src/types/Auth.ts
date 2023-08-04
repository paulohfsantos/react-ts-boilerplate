import { User } from "./Users";

export interface Auth {
  token: string;
  user: User;
}