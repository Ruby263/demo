<template>
  <a-row type="flex">
    <a-col style="flex-grow: 1">
      <a-row class="app-logo" type="flex" align="middle" justify="center">
        <a-col>
          <img class="logo-icon" :src="logo" @click="toHome" />
        </a-col>
        <a-col>
          <div v-if="showRef" class="logo-title ml-2">Vite Vue 3.0</div>
        </a-col>
      </a-row>
    </a-col>
    <a-col>
      <a-divider type="vertical" :style="{ height: '48px', margin: '8px 0' }" />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, PropType, ref, watch } from "vue";

import logo from "/@/assets/logo.png";

export default defineComponent({
  name: "Logo",
  props: {
    showTitle: {
      // PropType 类型验证
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props) {
    const showRef = ref<boolean>(props.showTitle);

    const { ctx }: any = getCurrentInstance();
    // 点击图标回到首页方法
    const toHome = () => {
      ctx.$router.push("/");
    };

    // watch方法提供两个方法作为参数,第一个返回要监听的数据,第二个是回调
    watch(
      () => props.showTitle,
      (show: boolean) => {
        if (show) {
          // 延时0.2s，避免样式溢出
          window.setTimeout(() => {
            showRef.value = show;
          }, 200);
        } else {
          showRef.value = show;
        }
      }
    );
    return {
      logo,
      showRef,
      toHome,
    };
  },
});
</script>

<style lang="scss">
.app-logo {
  cursor: pointer;
  height: 64px;

  .logo-icon {
    height: 32px;
  }

  .logo-title {
    font-size: 16px;
  }
}
</style>
