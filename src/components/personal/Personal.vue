<template>
  <div class="personal">
    <Split></Split>
    <div class="head">
      <img src="../../../static/img/my.jpg" class="img-left">
      <div class="box">
        <h2 class="name">Slim</h2>
        <span class="num">微信号: k66666666</span>
      </div>
      <img src="../../../static/img/二维码.jpg" class="img-right">
    </div>
    <Split></Split>
    <mu-list class="list">
      <mu-list-item button ripple>
        <img src="../../../static/img/钱包.png" class="img">
        <mu-list-item-title class="text">钱包</mu-list-item-title>
      </mu-list-item>
      <Split></Split>
      <mu-list-item button ripple @click="alert()">
        <img src="../../../static/img/收藏.png" class="img">
        <mu-list-item-title>收藏</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button ripple @click="alert()">
        <img src="../../../static/img/相册.png" class="img">
        <mu-list-item-title>相册</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button ripple @click="alert()">
        <img src="../../../static/img/卡包.png" class="img">
        <mu-list-item-title>卡包</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button ripple @click="alert()">
        <img src="../../../static/img/表情.png" class="img">
        <mu-list-item-title>表情</mu-list-item-title>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item button ripple @click="alert()">
        <img src="../../../static/img/设置.png" class="img">
        <mu-list-item-title>设置</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  import Split from '../widget/Split'
  export default {
    name: 'Personal',
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
  .head
    position: relative
    display: flex
    padding: 10px 0
    .img-left
      margin-right: 10px
      margin-left: 10px
      width: 50px
      height: 50px
    .img-right
      position: absolute
      right: 10px
      top: 20px
      width: 26px
      height: 26px
    .box
      font-size: 13px
      margin-top: 5px
      .name
        font-weight: 800
      .num
        color: #b6b6b6
  .list
    position: relative
    .img
      margin-right: 10px
      width: 20px
      height: 20px
</style>
