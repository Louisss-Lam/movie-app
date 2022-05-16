import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import MovieDetail from '../views/MovieDetail.vue'
import NotFound from '../views/NotFound.vue'

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
        path: '/moviedetail/:id',
        name: 'MovieDetail',
        component: MovieDetail
    },
    // catchall 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router