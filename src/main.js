import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/icons'
// 自定义指令
Vue.directive('color', {
  bind: function (el, binding) {
    // 这里可以初始化指令，比如添加事件监听器、获取值等等

    el.style.color = binding.value
  },

  update: function (el, binding) {
    // 数据更新时的操作，例如更新样式、调用方法等等
    el.style.color = binding.value
  }
})
Vue.directive('backgroundColor', {
  bind: function (el, binding) {
    el.style.background = binding.value
  },
  update: function (el, binding) {
    // 数据更新时的操作，例如更新样式、调用方法等等
    el.style.background = binding.value
  }
})

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
