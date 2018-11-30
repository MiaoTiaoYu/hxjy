/**
 * Created by 宋肿基 on 2018/11/21.
 */
import * as types from './mutation-type'

export default {
  async getAllData({commit}, axios) {
    commit(types.REFRESH_AJAX, true)
    let self = await axios.get('/api/self')
    let friends = await axios.get('/api/friends')
    self = self.data.data
    friends = friends.data.data
    commit(types.RECEVIVE_DATA, {self, friends})
    commit(types.REFRESH_AJAX, false)
  },
  showChat({commit}, user) {
    commit(types.TOGGLE_CHAT, true)
    commit(types.RECEVIVE_CURRENT_USER, user)
  },
  sendMyMsg({commit}, payload) {
    return new Promise(resolve => {
      commit(types.ADD_MESSAGE, payload)
      resolve()
    })
  },
  sendNewMsg({commit}, payload) {
    return new Promise(resolve => {
      let query = `?id=${payload.id}&msg=${payload.msg}`
      payload.axios.get('/api/robot' + query)
        .then((msgData) => {
          let time = new Date().getTime()
          let msg = JSON.parse(msgData.data.data)
          msg = msg.text
          commit(types.ADD_MESSAGE, {msg, time})
          resolve()
        })
    })
  },
  showDetail({commit}, id) {
    commit(types.RECEVIVE_USER_ID, id)
    commit(types.TOGGLE_DETAIL, true)
  }
}
