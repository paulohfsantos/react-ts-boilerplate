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

async function verifyAuth() {
  const token = getToken();
  
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    
    try {
      const response = await api.get("/660");
      return response.data;
    } catch (error) {
      removeToken();
      return false;
    }
  }
  return false;
}

export { setToken, getToken, removeToken, verifyAuth };