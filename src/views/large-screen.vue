<template>
  <div class="large-screen">
    <div class="box a">
      <div class="menu-btn">
        <div class="btn">门户首页</div>
        <div class="btn">项目概况</div>
        <div class="btn">智慧物联</div>
      </div>
      <div class="title">安全可视化大屏</div>
      <div class="menu-btn">
        <div class="btn">数字管理</div>
        <div class="btn">数字指挥</div>
        <div class="btn">分析决策</div>
      </div>
    </div>
    <div class="box b flex-column">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <div class="box c flex-column">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <div class="box d"></div>
    <div class="box e flex-column">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <div class="box f flex-column">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <div class="box g flex-column">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <div class="box h flex-column">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <div class="box i flex-column">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LargeScreen",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.large-screen {
  height: 100%;
  width: 100%;
  background-image: radial-gradient(ellipse 50% 100%, #4d608a, #0c153a);
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 28% 43% 28%;
  grid-template-rows: 8% 30% 30% 30%;
  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .box {
    color: #fff;
    padding: 5px 10px;
    .top {
      height: 19%;
      width: 100%;
      background: linear-gradient(
        to right,
        #368fda52,
        #325f9614,
        rgba(0, 0, 0, 0)
      );
    }
    .bottom {
      height: 80%;
      width: 100%;
      border: 0.5px solid rgb(103, 214, 247, 0.1);
      background: linear-gradient(rgb(103, 214, 247), rgb(103, 214, 247)) left
          top,
        linear-gradient(rgb(103, 214, 247), rgb(103, 214, 247)) left top,
        linear-gradient(rgb(103, 214, 247), rgb(103, 214, 247)) right top,
        linear-gradient(rgb(103, 214, 247), rgb(103, 214, 247)) right top,
        linear-gradient(rgb(103, 214, 247), rgb(103, 214, 247)) right bottom,
        linear-gradient(rgb(103, 214, 247), rgb(103, 214, 247)) right bottom,
        linear-gradient(rgb(103, 214, 247), rgb(103, 214, 247)) left bottom,
        linear-gradient(rgb(103, 214, 247), rgb(103, 214, 247)) left bottom;
      background-color: rgba(125, 172, 220, 0.11);
      background-repeat: no-repeat;
      background-size: 2px 10px, 10px 2px;
    }
  }
  .a {
    grid-area: 1 / 1 / 2 / 4;
    display: flex;
    background-image: url(/image/titleDividerxx.png);
    background-repeat: no-repeat;
    background-size: 110% 100%;
    .menu-btn {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      .btn {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #67d6f7;
        font-weight: bold;
        transition: background-color 0.4s ease, color 0.4s ease;
      }
      .btn:hover {
        color: #fff;
        background-color: rgb(81 117 162 / 19%);
        border-radius: 8px;
      }
    }
    & .menu-btn:last-child {
      justify-content: flex-start;
    }
    .title {
      width: 20%;
      height: 100%;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      text-shadow: 0 0 20px #ffffffbf;
    }
  }
  .b {
    grid-area: 2 / 1 / 3 / 2;
  }
  .c {
    grid-area: 3 / 1 / 4 / 2;
  }
  .d {
    grid-area: 2 / 2 / 4 / 3;
  }
  .e {
    grid-area: 2 / 3 / 3 / 4;
  }
  .f {
    grid-area: 3 / 3 / 4 / 4;
  }
  .g {
    grid-area: 4 / 1 / 5 / 2;
  }
  .h {
    grid-area: 4 / 2 / 5 / 3;
  }
  .i {
    grid-area: 4 / 3 / 5 / 4;
  }
}
</style>
