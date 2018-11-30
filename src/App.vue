<template>
  <div id="app">
    <div class="content-top">
      <TopNavigation></TopNavigation>
    </div>
    <router-view/>
    <div class="tabbar">
      <BottomTab></BottomTab>
    </div>
    <ChatView v-if="chat"></ChatView>
    <DetailView v-if="showDetail"></DetailView>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BottomTab from './components/bottomTab/BottomTab'
  import TopNavigation from './components/topnav/TopNavigation'
  import ChatView from './components/chatView/ChatView'
  import DetailView from './components/detailview/DetailView'
export default {
  name: 'App',
  computed: mapState({allData: 'data', chat: 'chat', showDetail: 'showDetail'}),
  components: {
    BottomTab,
    TopNavigation,
    ChatView,
    DetailView
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .tabbar
    position: fixed
    bottom: 0
    left: 0
    width: 100%
</style>
