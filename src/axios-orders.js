import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbackend-9b654.firebaseio.com/"
});

export default instance;
