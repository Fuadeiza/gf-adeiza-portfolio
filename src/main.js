import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive';
import Vuex from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueScrollactive);
Vue.config.productionTip = false

export default new Vuex.Store({

  state: {
    windowWidth: window.innerWidth,
  },
  mutations: {
    setWindowWidth(state) {
      state.windowWidth = window.innerWidth;
    }
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
