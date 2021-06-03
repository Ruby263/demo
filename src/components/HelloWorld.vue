<template>
  <h1>{{ msg }}</h1>
  <h1>{{ copyMsg }}</h1>
  <button @click="clickCount">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { getCurrentInstance, defineComponent, computed, onMounted } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const copyMsg = `${props.msg}  这是一条复制信息`;
    const { ctx }: any = getCurrentInstance();

    const count = computed(() => {
      return ctx.$store.state.count;
    });

    const clickCount = () => {
      ctx.$store.dispatch("increment");
    };

    // 常用的生命周期onMounted
    onMounted(() => {
      console.log("this is onMounted");
    });

    return {
      count,
      clickCount,
      copyMsg,
    };
  },

  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
  // methods: {
  //   clickCount() {
  //     this.$store.dispatch("increment");
  //   },
  // },
});
</script>
