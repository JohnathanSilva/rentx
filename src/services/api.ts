import axios from 'axios';

const api = axios.create({
    baseURL: 'http:meuip:port'
});

export { api };