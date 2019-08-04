import {constants} from './index'
import {fromJS} from 'immutable'

const defaultStatus = fromJS({
  focused: false
})

export default (state = defaultStatus, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // immutable对象的set方法，会结果之前immutable对象的值，返回新的对象
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}
