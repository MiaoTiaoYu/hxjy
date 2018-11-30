<template>
  <div class="discover" ref="discoverView">
    <div>
        <Split></Split>
        <mu-list>
          <mu-list-item button ripple>
            <img src="../../../static/img/朋友圈.png" class="img">
            <mu-list-item-title class="text">朋友圈</mu-list-item-title>
          </mu-list-item>
          <Split></Split>
          <mu-list-item button ripple @click="alert()">
            <img src="../../../static/img/扫一扫.png" class="img">
            <mu-list-item-title>扫一扫</mu-list-item-title>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button ripple @click="alert()">
            <img src="../../../static/img/摇一摇.png" class="img">
            <mu-list-item-title>摇一摇</mu-list-item-title>
          </mu-list-item>
          <Split></Split>
          <mu-list-item button ripple @click="alert()">
            <img src="../../../static/img/看一看.png" class="img">
            <mu-list-item-title>看一看</mu-list-item-title>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button ripple @click="alert()">
            <img src="../../../static/img/公众号.png" class="img">
            <mu-list-item-title>搜一搜</mu-list-item-title>
          </mu-list-item>
          <Split></Split>
          <mu-list-item button ripple @click="alert()">
            <img src="../../../static/img/附近的人.png" class="img">
            <mu-list-item-title>附近的人</mu-list-item-title>
          </mu-list-item>
          <Split></Split>
          <mu-list-item button ripple @click="alert()">
            <img src="../../../static/img/购物.png" class="img">
            <mu-list-item-title>购物</mu-list-item-title>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item button ripple @click="alert()">
            <img src="../../../static/img/游戏.png" class="img">
            <mu-list-item-title>游戏</mu-list-item-title>
          </mu-list-item>
          <Split></Split>
          <mu-list-item button ripple @click="alert()">
            <img src="../../../static/img/小程序.png" class="img">
            <mu-list-item-title>小程序</mu-list-item-title>
          </mu-list-item>
        </mu-list>
    </div>
  </div>
</template>

<script>
  import Split from '../widget/Split'
  import BScroll from 'better-scroll'
  export default {
    name: 'Discover',
    mounted() {
      this.$nextTick(() => {
        this.discoverScroll = new BScroll(this.$refs.discoverView, {
          click: true
        })
      })
    },
    methods: {
      alert () {
        this.$alert('开发中..0.0', {
          okLabel: '好的'
        })
      }
    },
    components: {
      Split
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .discover
    position: fixed
    left: 0
    right: 0
    top: 56px
    bottom: 56px
    overflow: hidden
    .img
        margin-right: 10px
        width: 20px
        height: 20px
</style>
