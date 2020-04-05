import Vue from 'vue'
import VueThing from './VueThing.vue'
import './css/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(VueThing)
}).$mount('#vue-thing')
