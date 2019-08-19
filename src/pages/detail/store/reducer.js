import { fromJS } from 'immutable'
import { constants } from './index'

const defaultStatus = fromJS({
  title: '',
  content: ''
})

export default (state = defaultStatus, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
