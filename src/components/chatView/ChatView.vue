<template>
  <div class="chat">
    <mu-appbar style="width: 100%;" color="#454545" z-depth="1">
      <mu-button icon slot="left" @click="closeChat(false)" class="icon">
        <mu-icon value="keyboard_arrow_left" size="30" color="white"></mu-icon>
      </mu-button>
      <div class="chat-title" style="color: white">
        {{currentUser.name}}
      </div>
      <mu-button flat slot="right" @click="showDetail(currentUser._id)">
        <mu-icon value="more_horiz" size="20" color="white"></mu-icon>
      </mu-button>
    </mu-appbar>
    <div class="chat-content" ref="msgView">
      <MsgContent :user="currentUser" ref="msgContent"></MsgContent>
    </div>
    <div class="footer" ref="footer">
      <mu-divider></mu-divider>
      <div class="top">
        <mu-button icon slot="left">
          <mu-icon value="keyboard_voice" size="28"></mu-icon>
        </mu-button>
        <mu-text-field v-model="value" underline-color="#23d655" @focus="focus" @blur="blur"></mu-text-field>
        <mu-button icon slot="right">
          <mu-icon value="tag_faces" size="28"></mu-icon>
        </mu-button>
        <mu-button icon slot="right" @click="sendMsg">
          <mu-icon value="send" size="28"></mu-icon>
        </mu-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  import {TOGGLE_CHAT} from '../../store/mutation-type'
  import MsgContent from './MsgContent'
  import BScroll from 'better-scroll'
  export default {
    name: 'ChatView',
    data() {
      return {value: ''}
    },
    mounted() {
      this.$nextTick(() => {
        if (this.msgScroll) {
          this.msgScroll.refresh()
        } else {
          this.msgScroll = new BScroll(this.$refs.msgView, {
            click: true
          })
        }
        this.msgScroll.scrollToElement(this.bottom)
      })
    },
    computed: {
      ...mapState({
        currentUser: 'currentUser'
      }),
      bottom() {
        return this.$refs.msgContent.bottom
      }
    },
    methods: {
      ...mapMutations({closeChat: TOGGLE_CHAT}),
      ...mapActions(['sendNewMsg', 'sendMyMsg', 'showDetail']),
      sendMsg() {
        let msg = this.value
        if (!msg.trim()) {
          return
        }
        let time = new Date().getTime()
        let id = this.currentUser._id
        this.sendMyMsg({id, msg, time, self: true})
          .then(this.refreshmsgScroll)
        this.sendNewMsg({id, msg, time, self: true, axios: this.axios})
          .then(this.refreshmsgScroll)
        this.value = ''
      },
      refreshmsgScroll() {
        this.$nextTick(() => {
          this.msgScroll.refresh()
          this.msgScroll.scrollToElement(this.bottom, 300)
        })
      },
      focus() {
        this.timer = setInterval(() => {
          this.$refs.footer.scrollIntoView(false)
        }, 100)
      },
      blur() {
        clearInterval(this.timer)
      }
    },
    components: {
      MsgContent
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .chat
    position: fixed
    top: 0
    left: 0
    bottom: 0
    width: 100%
    background: white
    z-index: 50
    .footer
      position: fixed
      bottom: 0
      left: 0
      width: 100%
      .icon
        margin-left: -9px
      .top
        display: flex
    .chat-content
      position: fixed
      left: 0
      right: 0
      top: 56px
      bottom: 90px
      overflow: hidden
      background: #eeeeee
</style>
