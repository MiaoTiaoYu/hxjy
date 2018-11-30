/**
 * Created by 宋肿基 on 2018/11/21.
 */
import * as types from './mutation-type'

export default {
  [types.RECEVIVE_DATA](state, data) {
    state.data = data
  },
  [types.REFRESH_AJAX](state, stutas) {
    state.isAjax = stutas
  },
  [types.ADD_MESSAGE](state, {msg, time, self}) {
    state.currentMsgList.list.push({
      msg,
      time,
      self,
      read: true
    })
  },
  [types.TOGGLE_CHAT](state, val) {
    state.chat = val
  },
  [types.RECEVIVE_CURRENT_USER](state, user) {
    state.currentUser = user
    let record = state.messageList.find(m => m._id === user._id)
    record.list.forEach(m => {
      m.read = true
    })
    state.currentMsgList = record
  },
  [types.TOGGLE_DETAIL](state, val) {
    state.showDetail = val
  },
  [types.RECEVIVE_USER_ID](state, id) {
    state.detailUserId = id
  }
}
