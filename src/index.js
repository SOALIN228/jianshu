import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {Globalstyle} from './style'
import {IconGlobalstyle} from './statics/iconfont/iconfont'
import App from './App'

ReactDOM.render(
  <Fragment>
    <Globalstyle/>
    <IconGlobalstyle/>
    <App/>
  </Fragment>
  , document.getElementById('root'))
