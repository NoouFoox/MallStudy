import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path: '', redirect: './home'},
    {path: '/home', component: () => import('@/views/Home/Home')},
    {path: '/profile', component: () => import('@/views/profile/profile')},
    {path: '/cart', component: () => import('@/views/cart/category')},
    {path: '/category', component: () => import('@/views/category/cart')}
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
