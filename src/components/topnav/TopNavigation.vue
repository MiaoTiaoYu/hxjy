<template>
  <mu-appbar style="width: 100%;" color="#23d655" textColor="white" z-depth="1">
    <div class="text">环信交友</div>
      <mu-button icon slot="right">
        <mu-icon value="search" class="icon"></mu-icon>
      </mu-button>
    <mu-button ref="button" @click="open = !open" icon slot="right">
      <mu-icon value="add" class="icon"></mu-icon>
    </mu-button>
    <mu-popover :cover="false" :open.sync="open" :trigger="trigger" placement="bottom-end">
      <mu-list class="uls">
        <mu-list-item button class="content">
          <mu-icon value="chat_bubble" class="icon"></mu-icon>
          <mu-list-item-title class="list">发起群聊</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button class="content">
          <mu-icon value="person_add" class="icon"></mu-icon>
          <mu-list-item-title class="list">添加朋友</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button class="content">
          <mu-icon value="camera_alt" class="icon"></mu-icon>
          <mu-list-item-title class="list">扫一扫</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button class="content">
          <mu-icon value="playlist_add_check" class="icon"></mu-icon>
          <mu-list-item-title class="list">收付款</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button class="content">
          <mu-icon value="markunread" class="icon"></mu-icon>
          <mu-list-item-title class="list">帮助与反馈</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-popover>
  </mu-appbar>
</template>

<script>
  export default {
    name: 'TopNavigation',
    data () {
      return {
        open: false,
        trigger: null
      }
    },
    mounted () {
      this.trigger = this.$refs.button.$el
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .uls
    background: #454545
    .content
      margin: 0 15px 5px -7px
      width: 100%
      .list
        font-size: 12px
        color: white
      .icon
        margin-right: 12px
        color: white
</style>
