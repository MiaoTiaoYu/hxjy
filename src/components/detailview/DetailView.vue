<template>
  <div class="detail">
    <mu-appbar style="width: 100%;" color="#454545" z-depth="1">
      <mu-button icon slot="left" class="icon" @click="close(false)">
        <mu-icon value="keyboard_arrow_left" size="30" color="white"></mu-icon>
      </mu-button>
      <div class="chat-title" style="color: white">
        聊天信息
      </div>
    </mu-appbar>
    <Split></Split>
    <div class="content">
      <div class="detail-head">
        <img :src="userData.avatar" class="img">
        <span class="text">{{userData.name}}</span>
      </div>
      <div class="add">
        <mu-icon value="add" size="50" color="#c1c1c1"></mu-icon>
      </div>
    </div>
    <Split></Split>
    <mu-button class="button"><span class="button-text">聊天小程序</span></mu-button>
    <Split></Split>
    <mu-button class="button"><span class="button-text">查找聊天记录</span></mu-button>
    <Split></Split>
    <mu-button class="button" :ripple="false" @click="alert()">
      <span class="button-text">置顶聊天</span>
      <mu-switch v-model="switchVal.value" color="green" class="switch"></mu-switch>
    </mu-button>
    <mu-button class="button" :ripple="false" @click="alert()">
      <span class="button-text">消息免打扰</span>
      <mu-switch v-model="switchVal.value1" color="green" class="switch"></mu-switch>
    </mu-button>
    <Split></Split>
    <mu-button class="button"><span class="button-text">设置当前聊天背景</span></mu-button>
    <Split></Split>
    <mu-button class="button"><span class="button-text">清空聊天记录</span></mu-button>
    <Split></Split>
    <mu-button class="button"><span class="button-text">投诉</span></mu-button>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'
  import {TOGGLE_DETAIL} from '../../store/mutation-type'
  import Split from '../widget/Split'
  export default {
    name: 'DetailView',
    data() {
      return {
        switchVal: {
          value: false,
          value1: false
        }
      }
    },
    computed: {
      ...mapGetters({userData: 'detailUserData'})
    },
    methods: {
      ...mapMutations({close: TOGGLE_DETAIL}),
      alert () {
        this.$alert('设置成功', '提示', {
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
  .detail
    position: fixed
    top: 0
    left: 0
    bottom: 0
    width: 100%
    background: white
    z-index: 100
    .content
      position: relative
      .chat-title
        margin-left: -11px
      .detail-head
        display: inline-block
        margin-right: 5px
        .img
          display: block
          width: 50px
          height: 50px
          margin-top: 10px
          margin-left: 8px
        .text
          font-size: 13px
          margin-left: 10px
      .add
        position: absolute
        top: 16px
        left: 80px
        display: inline-block
        border: 1px solid #c1c1c1
    .button
      position: relative
      width: 100%
      .button-text
        position: absolute
        left: 12px
        top: 0
      .switch
        position: absolute
        top: 5px
        right: 8px
</style>
