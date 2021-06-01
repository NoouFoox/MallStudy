import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClik from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.use(toast)
// 解决移动端300ms
FastClik.attach(document.body)
// 使用VueLazyload
Vue.use(VueLazyload, {
    loading: require('assets/img/lod.gif')
})

Vue.config.productionTip = false
// 不想污染全局作用域。这种情况下，你可以通过在原型上定义它们使其在每个 Vue 的实例中可用。
Vue.prototype.$bus = new Vue()
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


