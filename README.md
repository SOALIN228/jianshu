# jianshu
React 简书

## 学到的知识

1. 使用styled-components进行css的样式管理

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
