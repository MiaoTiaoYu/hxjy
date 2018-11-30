<template>
  <div class="message">
    <div v-if="ajax">加载中</div>
    <mu-list textline="two-line" v-else>
      <div v-for="item in friends" :key="item._id">
        <mu-list @click="itemClick(item)">
          <mu-list-item class="item" avatar button ripple>
            <mu-list-item-action class="list">
              <mu-avatar :size="50" slot="left">
                <img :src="item.avatar">
              </mu-avatar>
              <div class="icon" v-show="item.unreadNum">
                <span>{{item.unreadNum}}</span>
              </div>
            </mu-list-item-action>
            <mu-list-item-content class="message-text">
              <mu-list-item-title>{{item.name}}</mu-list-item-title>
              <mu-list-item-sub-title>{{item.lastMsg.msg}}</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action class="desc">
              <mu-list-item-title><span class="time">{{item.lastMsg.time | getTime}}</span></mu-list-item-title>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
        </mu-list>
      </div>
    </mu-list>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import {timeDesc} from '../../assets/js/tool'
  export default {
    name: 'Message',
    computed: {
      ...mapState({
        ajax: 'isAjax'
      }),
      ...mapGetters({friends: 'msgViewList'})
    },
    methods: {
      ...mapActions(['showChat']),
      itemClick(user) {
          this.showChat(user)
      }
    },
    filters: {
      getTime(val) {
        return timeDesc(val)
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .list
    position: relative
    margin-left: -5px
    margin-right: 10px
    .message-text
      margin-left: 5px
    .icon
      position: absolute
      left: 37px
      top: 8px
      display: inline-block
      width: 20px
      height: 20px
      border-radius: 50px
      text-align: center
      line-height: 20px
      color: white
      background: red
</style>
