# jianshu
React 简书

## 学到的知识

1. 使用styled-components进行css的全局样式布局

   ```react
   // style.js
   import { createGlobalStyle } from 'styled-components'
   
   export const Globalstyle = createGlobalStyle`
   body {
   /*code*/
   }
   `
   
   // index.js
   import {Globalstyle} from './style'
   
   ReactDOM.render(
     <Fragment>
       <Globalstyle/>
       <App/>
     </Fragment>
     , document.getElementById('root'))
   ```

2. 使用styled-components进行css的局部样式管理

   ```react
   import styled from 'styled-components'
   
   export const HeaderWrapper = styled.div`
     position: relative;
     height: 58px;
     border-bottom: 1px solid #f0f0f0;
   `
   
   export const Login = styled.a.attrs({ // 添加跳转
     href: '/'
   })
   
   export const NavItem = styled.div`
   	&.left { // 添加class
   		float: left;
   	}
   `
   
   import {
     HeaderWrapper,
     NavItem
   } from './style'
   
   class Header extends Component {
     render () {
       return (
         <HeaderWrapper>
           {/*code*/}
           <NavItem className={'left'}>下载App</NavItem>
         </HeaderWrapper>
       )
     }
   }
   ```

3. 使用 combineReducers 对每个redux进行管理

   ```react
   // src/store/idnex.js
   import {combineReducers} from 'redux'
   import {reducer as headerReducer} from '../common/header/store'
   
   const reducer = combineReducers({
     header: headerReducer
   })
   
   export default reducer
   
   // header/store/index.js
   import reducer from './reducer'
   
   export {reducer}
   ```

4. 使用immutable可以避免我们将state中的数据修改，通过调用对应的api，每次返回全新的对象

   ```react
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
     /*...*/
   }
   
   const mapStateToProps = (state) => {
     return {
       focused: state.header.get('focused') // 获取immutable对象的值
     }
   }
   ```

5. 使用redux-immutable解决获取state格式不统一问题

   ```react
   // src/store/reducer
   import {combineReducers} from 'redux-immutable' // 更换
   
   const mapStateToProps = (state) => {
     return {
       // focused: state.get('header').get('focused') // 获取immutable对象的值
       focused: state.getIn(['header', 'focused']) // 获取immutable对象的值
     }
   }
   ```

6. 使用ajax模拟假数据时，会先在public中查找

   ```react
   axios.get('/api/headerList.json') // 先在public/api中查找，否则发送ajax
   ```

7. 使用immutable设置多个数据时，使用merge来代替set

   ```react
   case constants.CHANGE_LIST:
     return state.merge({
       list: action.data,
       totalPage: action.totalPage
     })
   ```

8. 使用箭头函数传参避免改变this

   ```react
   // this默认绑定完成，使用箭头函数不会改变this，所以可以我们可以放心传递参数
   <SearchInfoSwitch 
     onClick={() => handleChangePage(page, totalPage)}
     >
     换一批
   </SearchInfoSwitch>
   ```
