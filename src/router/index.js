import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import KidDetails from "../components/KidDetails.vue"
import NotFound from "../components/NotFound.vue"
import DataBase from "/data/db.json";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/KidDetails/:id",
            name: KidDetails,
            component: KidDetails,
            beforeEnter: (to) => {
               const id = parseInt(to.params.id);
               const localDB = DataBase.manga;
               const exists = localDB.some((manga)=> manga.id === id);
               if(!exists) return { name: "NotFound" };
            }
        },
        {
            path: "/:NotFound(.*)*",
            name: "NotFound",
            component: NotFound,
        }        
    ],
});

export default router
