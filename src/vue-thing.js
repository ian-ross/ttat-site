import Vue from 'vue'
import VueThing from './VueThing.vue'
import './css/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(VueThing)
}).$mount('#vue-thing')
