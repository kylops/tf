import Vue from 'vue'
import Router from 'vue-router'
import GoogleMap from '@/components/GoogleMap'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'GoogleMap',
            component: GoogleMap
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
})
