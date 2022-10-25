// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from "vuex";
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import api from "./api/utils"
import store from "./store/store";
Vue.config.productionTip = false
Vue.prototype.$api =api
Vue.use(Antd).use(Vuex);
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
