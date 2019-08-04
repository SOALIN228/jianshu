import {constants} from './index'
import {fromJS} from 'immutable'

const defaultStatus = fromJS({
  focused: false,
  list: []
})

export default (state = defaultStatus, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true) // immutable对象的set方法，会结果之前immutable对象的值，返回新的对象
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      return state.set('list', action.data)
    default:
      return state
  }
}
