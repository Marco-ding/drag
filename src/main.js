import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import echarts from 'echarts'
import element from 'element-ui'

import 'babel-polyfill'
import animated from 'animate.css'

Vue.use(animated)
import VueRouter from 'vue-router'
import vuedraggable from 'vuedraggable'
import Vuex from 'vuex'
new Vue({
  el: '#app',
  render: h => h(App)
})
