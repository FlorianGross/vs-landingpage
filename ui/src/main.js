import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import vueAxios from 'vue-axios'
import 'vue-progress-path/dist/vue-progress-path.css'
import VueProgress from 'vue-progress-path'
import Cors from 'cors'

Vue.use(Cors)

Vue.use(vueAxios, axios)
Vue.use(VueProgress, {
  // defaultShape: 'circle',
})
Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')