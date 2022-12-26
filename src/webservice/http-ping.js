import axios from "axios";

export default axios.create({
  baseURL: "https://steakovercooked.com/",
  headers: {
    "Content-type": "application/json"
  }
});