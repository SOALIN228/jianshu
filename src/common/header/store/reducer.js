import {constants} from './index'

const defaultStatus = {
  focused: false
}

export default (state = defaultStatus, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return {
      focused: true
    }
  }
  if (action.type === constants.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state
}
