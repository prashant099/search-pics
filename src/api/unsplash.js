import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID A4ytWA16iMIYf2A7SD3tbWBIm2q3cU9CQHAl2C6Qiqs",
  },
});
