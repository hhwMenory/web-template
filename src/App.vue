<template>
  <div id="app-container">
    <div class="background-container" :style="backgroundContainerStyle"></div>
    <div class="top-container" ref="topContainer">
      <i v-if="isEnableTopToolkit" class="icon-more"></i>
    </div>
    <div class="page-container" :style="pageContainerStyle">
      <router-view />
    </div>
    <div class="bottom-container" ref="bottomContainer"></div>
  </div>
</template>

<script>
import logger from '@/logger'
import { on, debounce } from '@menory/utils'
const app = require('./app.json')

export default {
  data () {
    return {
      topContainerHeight: 0,
      bottomContainerHeight: 0,
      isEnableTopToolkit: app.isEnableTopToolkit,
      bottomNavs: app.bottomNavs
    }
  },
  computed: {
    backgroundContainerStyle () {
      logger.info(`menory backgroundContainerStyle[App] running...`)
      return {
        backgroundColor: app.backgroundColor
      }
    },
    pageContainerStyle () {
      return {
        paddingTop: `${this.topContainerHeight}px`,
        paddingBottom: `${this.bottomContainerHeight}px`
      }
    }
  },
  mounted () {
    logger.info(`menory mounted[App] running...`)
    this.$nextTick(() => {
      logger.info(`menory mounted[App] nextTick running...`)
      this.topContainerHeight = this.$refs.topContainer ? this.$refs.topContainer.offsetHeight : 0
      this.bottomContainerHeight = this.$refs.bottomContainer ? this.$refs.bottomContainer.offsetHeight : 0
    })
    on(window, 'resize', debounce(() => {
      setTimeout(() => {
        logger.info(`menory mounted[App] resize running...`, this.$refs.bottomContainer.offsetHeight)
        this.topContainerHeight = this.$refs.topContainer ? this.$refs.topContainer.offsetHeight : 0
        this.bottomContainerHeight = this.$refs.bottomContainer ? this.$refs.bottomContainer.offsetHeight : 0
      }, 1000)
    }, 200))
  }
}
</script>

<style lang="scss" scoped>
@import "@menory/common.scss";

#app-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: px2rem(750px);
  height: 100%;
  margin-left: px2rem(-750px / 2);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: -1;
  }
  .page-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: green;
    z-index: 2;
  }
  .top-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    margin-left: px2rem(-750px / 2);
    box-sizing: border-box;
    z-index: 2;
    background: red;
    overflow: hidden;
    .icon-more {
      display: block;
      float: right;
      width: px2rem(30px);
      height: px2rem(30px);
      margin: px2rem(10px);
      border-radius: px2rem(30px);
      background: #000;
    }
  }
  .bottom-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 2;
    background: yellow;
  }
}
</style>
