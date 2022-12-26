import axios from "axios";

export default axios.create({
  baseURL: "https://xeroprime.brokerpilot.net/bpapi",
  headers: {
    "Content-type": "application/json"
  }
});