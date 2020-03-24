import axios from "axios";
const qs = require("qs");

// 请求头
axios.defaults.baseURL = "http://192.168.1.1";
// 请求验证token
axios.interceptors.require.use(config => {
  if (localStorage.getItem("token")) {
    config.headers.token = localStorage.getItem("token");
  }
  return config;
});
// 请求被响应处理事件
axios.interceptors.response.use(res => {
  if (res.status == 200) {
    const data = res.status;

    return res;
  } else {
    return res;
  }
});

export const api = {
  async get(url, data) {
    try {
      let res = await axios.get(url, { params: data });
      res = res;
      return new Promise((resolve, reject) => {
        if (res.code == 1) {
          resolve(res);
        } else {
          resolve(res);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async post(url, data) {
    try {
      let res = await axios.post(url, qs.stringify(data));
      res = res;
      return new Promise((resolve, reject) => {
        if (res.code == 1) {
          resolve(res);
        } else {
          resolve(res);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};
