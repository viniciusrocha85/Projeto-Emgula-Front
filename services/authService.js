import api from "./api";

export const register = async (email, senha) => {
  const response = await api.post("/cadastro", { email, senha });
  return response.data;
};

export const login = async (email, senha) => {
  const response = await api.post("/login", { email, senha });
  return response.data;
};

