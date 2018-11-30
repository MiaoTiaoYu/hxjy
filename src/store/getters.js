/**
 * Created by 宋肿基 on 2018/11/21.
 */
export const msgViewList = (state) => {
  let result = []
  let friends = state.data.friends
  if (!friends.length) {
    return []
  }
  state.messageList.forEach(item => {
    let friendData = friends.find(f => f._id === item._id)
    let unreadNum = 0
    let lastMsg = {}
    item.list.forEach(m => {
      if (!m.read) {
        unreadNum++
      }
      lastMsg = m
    })
    result.push({
      ...friendData,
      unreadNum,
      lastMsg
    })
  })
  return result
}

export const detailUserData = (state) => {
  let id = state.detailUserId
  if (id === 0) {
    return state.data.self
  }
  let res = state.data.friends.find(f => f._id === id)
  return res
}
