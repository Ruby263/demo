import { createApp } from "vue";
import router from "/@/router";
import store from "/@/store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import App from "/@/App.vue";
import "/@/styles/index.scss";

import * as Echarts from 'echarts';

const app = createApp(App).use(router).use(store).use(Antd).use(Echarts).mount("#app");
// app.use(router);
// app.use(store);
// app.use(Antd);
// app.use(Echarts);
// app.mount("#app");
