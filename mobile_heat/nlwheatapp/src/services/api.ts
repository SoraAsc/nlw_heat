import axios  from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.1.110:4000'
});