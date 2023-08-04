import { AxiosResponse } from "axios";
import { api } from "../api";
import { Auth } from "../types/Auth";

export const login = async (email: string, password: string): Promise<AxiosResponse<Auth>> => {
  const response = await api.post("/login", { email, password });
  return response.data;
}