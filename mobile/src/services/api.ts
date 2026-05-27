import axios from 'axios';

// ⚠️ ATENÇÃO: Substitua o '192.168.X.X' pelo IP real do seu computador na sua rede local
const IP_COMPUTADOR = '192.168.0.2'; 

const api = axios.create({
  baseURL: `http://${IP_COMPUTADOR}:8080/api`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;