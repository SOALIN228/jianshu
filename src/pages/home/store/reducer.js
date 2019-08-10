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
  }],
  articleList: [{
    id: 1,
    title: '111',
    desc: '122123',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  },{
    id: 2,
    title: '111',
    desc: '122123',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }]
})

export default (state = defaultStatus, action) => {
  switch (action.type) {
    default:
      return state
  }
}
