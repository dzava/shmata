import Vue from 'vue'
import App from './App'
import router from './router'
import Question from './components/Question'

Vue.component('question', Question)

Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
})
