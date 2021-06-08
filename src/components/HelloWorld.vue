<template>
  <h1>{{ msg }}</h1>
  <h1>{{ copyMsg }}</h1>
  <!-- 响应式API ref -->
  <h2>{{ foo }}</h2>
  <h2 style="color: green">{{ obj.age }}</h2>
  <button @click="clickCount">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <!-- inject -->
  <h2 style="color: orange">这是子组件接受的inject值：{{ test }}</h2>
  <HelloChina />
</template>

<script lang="ts">
import {
  getCurrentInstance,
  defineComponent,
  computed,
  onMounted,
  ref,
  reactive,
  inject,
} from "vue";
import HelloChina from "./HelloChina.vue";

export default defineComponent({
  name: "HelloWorld",
  components: { HelloChina },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // inject接收
    const test = inject("location");

    const copyMsg = `${props.msg}  这是一条复制信息`;
    const { ctx }: any = getCurrentInstance();

    const count = computed(() => {
      return ctx.$store.state.count;
    });

    // ref
    const foo = ref<string | number>("foo");
    console.log(foo.value);

    // reactive
    // 响应式，若要跨组件，使用provide/inject
    const obj = reactive({ name: "Bob", age: 28 });

    const clickCount = () => {
      ctx.$store.dispatch("increment");
      obj.age++;
    };

    // 常用的生命周期onMounted
    onMounted(() => {
      console.log("this is onMounted");
    });

    return {
      count,
      clickCount,
      copyMsg,
      foo,
      obj,
      test,
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
