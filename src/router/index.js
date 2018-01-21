import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import WrongQuestions from '@/components/WrongQuestions'
import CorrectQuestions from '@/components/CorrectQuestions'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/wrong',
            component: WrongQuestions,
        },
        {
            path: '/correct',
            component: CorrectQuestions,
        },
    ],
})
