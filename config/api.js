import axios from 'axios';

export const API = axios.create({
  baseURL: "https://api.whisperx.site/",
  headers: { "Content-Type": "application/json" }
});
