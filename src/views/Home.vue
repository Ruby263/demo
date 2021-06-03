<template>
  <h1>{{ cuRoute }}</h1>
  <h1>{{ cuState }}</h1>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, computed } from "vue";

import HelloWorld from "/@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    // vue3.0中不再使用this,所以获取路由和store需要通过getCurrentInstance获取上下文来获取

    // setup的执行时组件对象还没有创建，此时不能使用this来访问data/computed/methods/props
    // 可以通过 getCurrentInstance这个函数来返回当前组件的实例对象，也就是当前vue这个实例对象
    const { ctx }: any = getCurrentInstance();
    console.log(ctx);

    let cuRoute = ctx.$route.name;

    // store需要计算属性
    let cuState = computed(() => {
      return ctx.$store.state.count;
    });

    return {
      cuRoute,
      cuState,
    };
  },
});
</script>
