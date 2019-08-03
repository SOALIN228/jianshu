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


