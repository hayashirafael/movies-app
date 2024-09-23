import axios from 'axios';

const API_KEY = process.env.THEMOVIEDB_API_KEY;
const URL = "https://api.themoviedb.org/3";

export const api = axios.create({
  baseURL: URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR'
  }
});