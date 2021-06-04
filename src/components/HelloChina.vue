<template>
  <!-- inject -->
  <h2 style="color: purple">这是子组件的子组件inject的值：{{ test }}</h2>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "HelloChina",

  setup() {
    // inject接收
    const test = inject("location");

    return {
      test,
    };
  },
});
</script>
