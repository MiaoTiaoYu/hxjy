/**
 * Created by 宋肿基 on 2018/11/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  chat: false,
  showDetail: false,
  detailUserId: 0,
  currentUser: {},
  currentMsgList: {},
  data: {
    self: {},
    friends: []
  },
  isAjax: false,
  messageList: [
    {
      _id: 1,
      list: [
        {msg: '在吗?', time: 1541051132303, read: false},
        {msg: '在吗?', time: 1541051132304, read: false},
        {msg: '不在啊!', time: 1542776882000, read: true, self: true}
      ]
    },
    {_id: 2, list: [{msg: '在吗?', time: 1542002394524, read: false}, {msg: '在吗?', time: 1542002394523, read: false}]},
    {_id: 3, list: [{msg: '在吗?', time: 1542072369522, read: false}]},
    {_id: 4, list: [{msg: '在吗?', time: 1541900394525, read: false}]}
  ]
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
