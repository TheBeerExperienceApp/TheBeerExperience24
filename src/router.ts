import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import BeersView from "./views/BeersView.vue";
import { useDevice } from "./composables/device";
import MapView from "./views/MapView.vue";

const routes = [
  { path: "/TheBeerExperience24/", name: "home", component: HomeView },
  { path: "/TheBeerExperience24/beers", name: "beers", component: BeersView },
  { path: "/TheBeerExperience24/map", name: "map", component: MapView },
  { path: "/TheBeerExperience24/food", name: "food", component: BeersView },
  {
    path: "/TheBeerExperience24/partners",
    name: "partners",
    component: BeersView,
  },
  { path: "/TheBeerExperience24/liked", name: "liked", component: BeersView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((_to, _from, next) => {
  useDevice();
  next();
});

export default router;
