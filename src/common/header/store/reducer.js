import {constants} from './index'
import {fromJS} from 'immutable'

const defaultStatus = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultStatus, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true) // immutable对象的set方法，会结果之前immutable对象的值，返回新的对象
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
