import axios from "axios";

const instace = axios.create({
  baseURL: "http://localhost:3210/api",
  withCredentials: true,
});

export default instace;
