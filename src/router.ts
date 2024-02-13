import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import BeersView from "./views/BeersView.vue";
import { useDevice } from "./composables/device";

const routes = [
    { path: '/TheBeerExperience24/', name: "home", component: HomeView },
    { path: '/TheBeerExperience24/beers', name: "beers", component: BeersView }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((_to, _from, next) => {
    useDevice();
    next();
});

export default router;