import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

module.exports = {
  alias: {
    "/@/": pathResolve("src"),
  },
  optimizeDeps: {
    include: ["@ant-design/icons-vue"],
  },
  // 跨域设置
    proxy: {
        // 如果是 /api 开头，则访问如下地址
        //'/api': 'http://10.7.40.138:8080',
    },
  // otherwise, may assets 404 or visit with index.html
  base: "/start-vue3/",
  assetsDir: "",
};
