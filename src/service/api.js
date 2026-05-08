import axios from "axios";

// export const BASE = "https://hogofilm.pythonanywhere.com";

export const BASE = "https://apidata.hogoautofilms.co.in";

export const apiInfo = axios.create({
  baseURL: BASE,
});

const attachToken = (config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Token ${token}`;
  return config;
};

apiInfo.interceptors.request.use(attachToken);

export const fetchAll = async (url) => {
  let all = [];
  let nextUrl = url;
  
  while (nextUrl) {
    const res = await apiInfo.get(nextUrl);
    // Handle both { data: [...] } and { data: { data: [...] } } shapes
    const batch = res.data?.data || [];
    const list = Array.isArray(batch) ? batch : batch.data || [];
    
    all = [...all, ...list];
    nextUrl = res.data?.next || null;
    
    // Safety break to prevent infinite loops (max 100 pages)
    if (all.length > 5000) break; 
  }
  
  return all;
};