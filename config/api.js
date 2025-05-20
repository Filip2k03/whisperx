import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.whisperx.site/", // your PHP backend URL
  headers: {
    "Content-Type": "application/json"
  }
});
