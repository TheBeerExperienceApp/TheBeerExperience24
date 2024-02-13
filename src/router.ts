import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import { useDevice } from "./composables/device";

const routes = [
    { path: '/TheBeerExperience24/', name: "home", component: HomeView },
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