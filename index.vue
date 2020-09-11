<template>
  <div class="map">
    <ve-bmap :settings="mapSettings" :series="mapSeries" :tooltip="mapTooltip">
    </ve-bmap>
    <br />
    <el-input v-model="input" placeholder="请输入内容"
      ><el-button @click="submit" slot="append">子按钮</el-button></el-input
    >
  </div>
</template>

<script>
export default {
  name: "SonButton",
  props: { input: Number },
  data() {
    return {
      mapSettings: {
        key: "oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK",
        bmap: {
          center: [120, 30],
          zoom: 14,
          roam: true,
          mapStyle: {}
        }
      },
      mapTooltip: { show: true },
      mapSeries: [
        {
          type: "scatter",
          coordinateSystem: "bmap",
          data: [
            [120, 30, 1] // 经度，维度，value，...
          ]
        }
      ]
    };
  },
  methods: {
    submit() {
      this.$emit("getCityNames", `this is a test ${this.input}`);
    }
  }
};
</script>

<style lang="scss"></style>
