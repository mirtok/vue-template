import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Axios from "axios";
import * as filters  from "./filter";
import "normalize.css/normalize.css";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
});
Vue.use(ElementUI);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
