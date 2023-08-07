import { api } from "../api";

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
  console.log("verifing auth");

  const token = getToken();

  if (!token) {
    console.log("no token");

    return false;
  }

  api.defaults.headers.Authorization = `Bearer ${token}`;

  try {
    await api.get("/660/users");
  } catch (error) {
    removeToken();
    console.log("invalid token");

    return false;
  }

  return true;
}

export { setToken, getToken, removeToken, isLogged, isTokenValid };
