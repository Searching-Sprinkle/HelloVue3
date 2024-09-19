//引入createApp方法，用于创建应用
import { createApp } from "vue";
//引入App根组件
import App from "./App.vue";
//引入pinia
import { createPinia } from "pinia";

const app = createApp(App);
//创建pinia
const pinia = createPinia();
//安装pinia
app.use(pinia);
// app.use(router);
app.mount("#app");