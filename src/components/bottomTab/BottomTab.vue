<template>
  <div>
    <mu-divider></mu-divider>
    <mu-bottom-nav @change="change" :value.sync="tab" color=" #31d652">
      <mu-bottom-nav-item value="message" title="聊天室" icon="chat_bubble"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="friends" title="通讯录" icon="supervisor_account"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="discover" title="发现" icon="explore"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="personal" title="我" icon="person_outline"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
  export default {
    name: 'bottomTab',
    data() {
      return {tab: 'message'}
    },
    methods: {
      change(val) {
        this.$router.push(val)
      }
    }
  }
</script>

<style scoped>

</style>
