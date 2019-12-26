import Vue from 'vue'
import axios from 'axios'

const CancelToken = axios.CancelToken
let cancelCollection = {}

let instance = axios.create()

instance.defaults.headers.common['Content-Type'] = 'application/json'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (config.$cancelToken === true && !config.cancelToken) {
    if (cancelCollection[config.url] && typeof cancelCollection[config.url] === 'function') {
      cancelCollection[config.url]()
    }
    config.cancelToken = new CancelToken(c => {
      // An executor function receives a cancel function as a parameter
      cancelCollection[config.url] = c
    })
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

Vue.prototype.$axios = axios
