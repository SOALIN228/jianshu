import { fromJS } from 'immutable'

const defaultStatus = fromJS({
  topicList: [{
    id: 1,
    title: 'xxx',
    imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OET.4ebc58d972d44ffdad3d7deb365f99fb&w=272&h=272&c=7&rs=1&o=5&pid=1.9'
  }, {
    id: 2,
    title: 'xxx2',
    imgUrl: 'https://tse1-mm.cn.bing.net/th?id=OET.4ebc58d972d44ffdad3d7deb365f99fb&w=272&h=272&c=7&rs=1&o=5&pid=1.9'
  }]
})

export default (state = defaultStatus, action) => {
  switch (action.type) {
    default:
      return state
  }
}
