import Vue from 'vue';
import App from './App.vue';
import router from './router';
// rem.js计算
// import './plugins/rem';
// vant ui组件
import './plugins/vant';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
