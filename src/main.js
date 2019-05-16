/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes.js';

const router = new VueRouter({
  routes,
  mode: `history`,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
