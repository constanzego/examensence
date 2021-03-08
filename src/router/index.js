import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vendedores from '../views/Vendedores.vue'
import Vendedor from '../views/Vendedor'
import Login from '../views/Login'
import Notfound from '../views/Notfound'
import Navbar from "../components/Navbar.vue";


import { BootstrapVue } from 'bootstrap-vue';
import { LayoutPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(LayoutPlugin)
Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Vendedores',
        name: 'Vendedores',
        component: Vendedores

    },
    {
        path: '/Vendedor',
        name: 'Vendedor',
        component: Vendedor

    },
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/*',
        name: 'Notfound',
        component: Notfound
    },
    {
        path: "/Navbar",
        name: "Navbar",
        component: Navbar
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router