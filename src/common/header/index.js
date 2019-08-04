import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store'
import {
  HeaderWrapper,
  Login,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Login/>
      <Nav>
        <NavItem className={'left active'}>首页</NavItem>
        <NavItem className={'left'}>下载App</NavItem>
        <NavItem className={'right'}>登录</NavItem>
        <NavItem className={'right'}>
          <i className={'iconfont'}>&#xe666;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused}
                         timeout={200}
                         classNames="slide"
          >
            <NavSearch className={props.focused ? 'focused' : ''}
                       onFocus={props.handleInputFocus}
                       onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe602;</i>
          {getListArea(props.focused)}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className={'witting'}>
          <i className={'iconfont'}>&#xe603;</i>
          写文章
        </Button>
        <Button className={'reg'}>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused') // 获取immutable对象的值
    focused: state.getIn(['header', 'focused']) // 获取immutable对象的值
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
