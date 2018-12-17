import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select ,Message} from 'element-ui';
Vue.use(ElementUI);
Vue.directive('focus',{
    inserted:function(el){
        el.focus()
        console.log(el)
    }
})
Vue.config.productionTip = false
axios.defaults.withCredentials=true//让axios可以携带cookie
axios.defaults.baseURL='http://taomaimai.applinzi.com/'
Vue.prototype.axios=axios;
// new Vue({
//   router,
//     store,
//   render: h => h(App)
// }).$mount('#app')
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

