import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1. 导入ant-design-vue 组件库
import Antd from 'ant-design-vue'
// 2. 导入组件库的样式表
import  'ant-design-vue/dist/antd.css'
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
