import axios from 'axios';

const api = axios.create({
    baseURL: 'http:myip:port'
});

export { api };