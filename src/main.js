import Vue from "vue";
import Router from "vue-router";
import VueResource from "vue-resource";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

Vue.use(Router);
Vue.use(VueResource);
Vue.component("icon", Icon);

Vue.config.productionTip = false;

import App from "./App.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";
import Profile from "./Profile.vue";

var router = new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
