import Vue from "vue";
import Router from "vue-router";
import MainDisplayView from "./views/MainDisplayView.vue";
import ControllerView from "./views/ControllerView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "MainDisplayView",
      component: MainDisplayView,
      meta: {
        title: "MainDisplayView"
      }
    },
    {
      path: "/controller-view",
      name: "ControllerView",
      component: ControllerView,
      meta: {
        title: "ControllerView"
      }
    }
  ]
});
