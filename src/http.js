import Vue from 'vue'
import axios from 'axios'
import config from './config'

axios.defaults.baseURL = config.api;
axios.defaults.timeout = 100000;

axios.interceptors.request.use(function (config) {
  // console.log(config);
  return config;
})

//给vue新增了属性$http
Vue.prototype.$http = axios;


