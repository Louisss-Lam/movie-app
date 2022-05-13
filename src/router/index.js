import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import MovieDetail from '../views/MovieDetail.vue'

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About 
    },
    {
        path: '/moviedetail',
        name: 'MovieDetail',
        component: MovieDetail
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router