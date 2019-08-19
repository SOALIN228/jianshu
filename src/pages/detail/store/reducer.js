import { fromJS } from 'immutable'
import { constants } from './index'

const defaultStatus = fromJS({
  title: 'Python制作快递查询系统，再一次感受到了Python的强大!',
  content: `<img src="https://s2.ax1x.com/2019/08/19/m3erV0.jpg" alt=""/>
          <p><b>今天想发个简(qi)单(shi)的(jiu)练(shi)手(xiang)小(tou)项(ge)目(lan)</b>~利用Python制作一个简单的快递查询系统。</p>
          <p>今天想发个简(qi)单(shi)的(jiu)练(shi)手(xiang)小(tou)项(ge)目(lan)~利用Python制作一个简单的快递查询系统。</p>
          <p>今天想发个简(qi)单(shi)的(jiu)练(shi)手(xiang)小(tou)项(ge)目(lan)~利用Python制作一个简单的快递查询系统。</p>
          <p>今天想发个简(qi)单(shi)的(jiu)练(shi)手(xiang)小(tou)项(ge)目(lan)~利用Python制作一个简单的快递查询系统。</p>
          <p>今天想发个简(qi)单(shi)的(jiu)练(shi)手(xiang)小(tou)项(ge)目(lan)~利用Python制作一个简单的快递查询系统。</p>`
})

export default (state = defaultStatus, action) => {
  switch (action.type) {
    default:
      return state
  }
}
