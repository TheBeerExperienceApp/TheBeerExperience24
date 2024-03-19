import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import BeersView from "./views/BeersView.vue";
import { useDevice } from "./composables/device";
import MapView from "./views/MapView.vue";
import FoodView from "./views/FoodView.vue";
import PartnersView from "./views/PartnersView.vue";
import ArtView from "./views/ArtView.vue";
import LikedView from "./views/LikedView.vue";
import ProgramView from "./views/ProgramView.vue";

const routes = [
  { path: "/TheBeerExperience24/", name: "home", component: HomeView },
  { path: "/TheBeerExperience24/beers", name: "beers", component: BeersView },
  { path: "/TheBeerExperience24/map", name: "map", component: MapView },
  { path: "/TheBeerExperience24/food", name: "food", component: FoodView },
  {
    path: "/TheBeerExperience24/partners",
    name: "partners",
    component: PartnersView,
  },
  {
    path: "/TheBeerExperience24/program",
    name: "program",
    component: ProgramView,
  },
  {
    path: "/TheBeerExperience24/art",
    name: "art",
    component: ArtView,
  },
  { path: "/TheBeerExperience24/liked", name: "liked", component: LikedView },
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
