<template>
  <a-layout id="app" style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" theme="light" collapsible>
      <Logo :show-title="!collapsed" />
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <!-- ant图标 -->
          <pie-chart-outlined />
          <span>运维</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>业务</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <user-outlined />
            <span>设置</span>
          </template>
          <a-menu-item key="3">账号</a-menu-item>
          <a-menu-item key="4">合同</a-menu-item>
          <a-menu-item key="5">订单</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <team-outlined />
            <span>产品</span>
          </template>
          <a-menu-item key="6">网站</a-menu-item>
          <a-menu-item key="8">服务器</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9" @click="toLargeScreen">
          <file-outlined />
          <span>购物车</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row type="flex" justify="end">
          <a-col class="mr-3">
            <a-button
              type="primary"
              shape="circle"
              size="large"
              @click="$router.push('/')"
            >
              <template #icon><HomeFilled /></template>
            </a-button>
          </a-col>
          <a-col class="mr-3">
            <a-button
              type="primary"
              shape="circle"
              size="large"
              @click="$router.push('/setting')"
            >
              <template #icon><SettingFilled /></template>
            </a-button>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content style="margin: 2vh">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb> -->
        <div style="padding: 24px; background: #fff; height: 90vh">
          <router-view />
        </div>
      </a-layout-content>
      <!-- <a-layout-footer style="text-align: center">
        Start Vue 3 ©2020 Created by ikuokuo
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<script>
import Logo from "/@/components/Logo.vue";

import {
  // menu
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  // header
  HomeFilled,
  SettingFilled,
} from "@ant-design/icons-vue";

export default {
  name: "App",
  components: {
    Logo,
    // icons
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    HomeFilled,
    SettingFilled,
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ["1"],
    };
  },
  methods: {
    toLargeScreen() {
      this.$router.push({ name: "large-screen" });
    },
  },
};
</script>

<style lang="scss">
#app {
  .ant-layout-header {
    height: 6vh;
  }
}
</style>
