import { api } from "../api";
import { User } from "../types/Users";

function setUserData(data: User) {
  localStorage.setItem("userData", JSON.stringify(data));
}

export function getUserData() {
  const data = localStorage.getItem("userData");

  if (!data) { return }

  return JSON.parse(data);
}

function setToken(token: string) {
  localStorage.setItem("authToken", token);
}

function getToken() {
  return localStorage.getItem("authToken");
}

function removeToken() {
  localStorage.removeItem("authToken");
}

function isTokenValid() {
  return !!getToken();
}

async function isLogged() {
  const token = getToken();

  if (!token) {
    return false;
  }

  api.defaults.headers.Authorization = `Bearer ${token}`;

  try {
    await api.get("/660/users");
  } catch (error) {
    removeToken();
    return false;
  }

  return true;
}

export {
  setToken,
  getToken,
  removeToken,
  isLogged,
  isTokenValid,
  setUserData
};
