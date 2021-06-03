<template>
  <div>
    <h1>This is a setting page</h1>
    <p>store count is: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance } from "vue";

export default defineComponent({
  name: "Setting",
  setup() {
    const { ctx }: any = getCurrentInstance();
    const count = computed(() => {
      return ctx.$store.state.count;
    });

    return {
      count,
    };
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
});
</script>
