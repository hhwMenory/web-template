<template>
  <div id="app-container">
    <div class="background-container" :style="backgroundContainerStyle"></div>
    <div class="top-container">
      <i class="icon-more"></i>
    </div>
    <div class="page-container">
      <router-view />
    </div>
    <div class="bottom-container"></div>
  </div>
</template>

<script>
const app = require('./app.json')

export default {
  computed: {
    backgroundContainerStyle () {
      return {
        backgroundColor: app.backgroundColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@menory/common.scss";

#app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .background-container {
    position: fixed;
    top: 0;
    left: 50%;
    width: px2rem(750px);
    height: 100%;
    margin-left: px2rem(-750px / 2);
    box-sizing: border-box;
    z-index: 1;
  }
  .page-container {
    position: relative;
    width: px2rem(750px);
    z-index: 2;
    margin: 0 auto;
    padding-top: px2rem(50px);
    padding-bottom: px2rem(100px);
  }
  .top-container {
    position: fixed;
    top: 0;
    left: 50%;
    width: px2rem(750px);
    height: px2rem(50px);
    margin-left: px2rem(-750px / 2);
    box-sizing: border-box;
    z-index: 3;
    background: red;
    .icon-more {
      position: absolute;
      top: 50%;
      right: px2rem(10px);
      display: block;
      width: px2rem(30px);
      height: px2rem(30px);
      margin-top: px2rem(-30px / 2);
      border-radius: px2rem(30px);
      background: #000;
    }
  }
  .bottom-container {
    position: fixed;
    bottom: 0;
    left: 50%;
    width: px2rem(750px);
    height: px2rem(100px);
    margin-left: px2rem(-750px / 2);
    box-sizing: border-box;
    z-index: 3;
    background: yellow;
  }
}
</style>
