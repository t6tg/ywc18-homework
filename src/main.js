import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueSecureHTML from 'vue-html-secure'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueSecureHTML)

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
