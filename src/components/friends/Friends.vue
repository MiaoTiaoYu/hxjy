<template>
  <div class="friends" ref="friendsView">
    <div>
      <mu-list class="list">
        <mu-list-item button ripple>
          <img src="../../../static/img/新的朋友.png" class="img">
          <mu-list-item-title>新的朋友</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button ripple>
          <img src="../../../static/img/群聊.png" class="img">
          <mu-list-item-title>群聊</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button ripple>
          <img src="../../../static/img/标签.png" class="img">
          <mu-list-item-title>标签</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button ripple>
          <img src="../../../static/img/公众号.png" class="img">
          <mu-list-item-title>公众号</mu-list-item-title>
        </mu-list-item>
      </mu-list>
      <div class="num"><span class="num-left">A</span></div>
      <mu-list class="lists">
        <mu-list-item button ripple>
          <img src="../../../static/img/tx1.jpg" class="text-img">
          <mu-list-item-title class="text">A朋友1</mu-list-item-title>
        </mu-list-item>
      </mu-list>
      <div class="num"><span class="num-left">B</span></div>
      <mu-list class="lists">
        <mu-list-item button ripple>
          <img src="../../../static/img/tx2.jpg" class="text-img">
          <mu-list-item-title class="text">B朋友2</mu-list-item-title>
        </mu-list-item>
      </mu-list>
      <div class="num"><span class="num-left">C</span></div>
      <mu-list class="lists">
        <mu-list-item button ripple>
          <img src="../../../static/img/tx3.jpg" class="text-img">
          <mu-list-item-title class="text">C朋友3</mu-list-item-title>
        </mu-list-item>
      </mu-list>
      <div class="num"><span class="num-left">D</span></div>
      <mu-list class="lists">
        <mu-list-item button ripple>
          <img src="../../../static/img/tx4.jpg" class="text-img">
          <mu-list-item-title class="text">D朋友4</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Friends',
    mounted() {
      this.$nextTick(() => {
        this.friendsScroll = new BScroll(this.$refs.friendsView, {
          click: true
        })
      })
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .friends
    position: fixed
    left: 0
    right: 0
    top: 56px
    bottom: 56px
    overflow: hidden
    .list
        position: relative
        .img
          margin-right: 10px

    .num
      width: 100%
      height: 20px
      background: #ccc
      .num-left
        margin-left: 16px

    .lists
      position: relative
      .text-img
        display: inline-block
        margin-right: 10px
        width: 50px
        height: 50px
</style>
