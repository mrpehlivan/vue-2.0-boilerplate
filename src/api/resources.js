import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

Vue.use(VueResource)

// HTTP
Vue.http.options.credentials = true
Vue.http.options.crossOrigin = true;
Vue.http.options.xhr = {withCredentials: true};

Vue.http.interceptors.push((request, next)=>{
  request.headers = request.headers || {}

  next((response) => {
    if (response.status === 401) {
      window.location.pathname = '/'
    }
  })
})

export const testResources = Vue.resource(API_ROOT + 'payment/')

