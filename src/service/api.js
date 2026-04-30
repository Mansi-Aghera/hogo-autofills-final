import axios from "axios";

export const BASE = "https://hogofilm.pythonanywhere.com";

// export const BASE = "https://apidata.hogoautofilms.in/";

export const apiInfo = axios.create({
  baseURL: BASE,
});

const attachToken = (config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Token ${token}`;
  return config;
};

apiInfo.interceptors.request.use(attachToken);