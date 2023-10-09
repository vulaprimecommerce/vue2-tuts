// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import ConditionRendering from "./components/ConditionRendering";
import router from "./router";

Vue.config.productionTip = false;

// define Navbar
Vue.component("app-nav", {
  template: "<h2>Navbar</h2>"
});

// define Footer
Vue.component("app-footer", {
  template: "<h2>Footer</h2>"
});

// Define a component
Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo }} : {{ todo.id }} </li>"
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

new Vue({
  el: "#condition-rendering",
  components: { ConditionRendering },
  template: "<ConditionRendering/>"
});
