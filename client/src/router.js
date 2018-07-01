import Vue from "vue";
import Router from "vue-router";
import DisplayView from "./views/DisplayView.vue";
import ControllerView from "./views/ControllerView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "DisplayView",
      component: DisplayView,
      meta: {
        title: "DisplayView"
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
