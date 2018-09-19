import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import TweenOne from 'rc-tween-one'
import { Menu } from 'antd'

const Item = Menu.Item

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      phoneOpen: false
    }
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen
    })
  }

  render () {
    const props = { ...this.props }
    const isMobile = props.isMobile
    delete props.isMobile
    const navData = { menu1: '导航一', menu2: '导航二', menu3: '导航三', menu4: '导航四' };
    const navChildren = Object.keys(navData)
    navChildren.map((key, i) => (<Item key={i}>{navData[key]}</Item>))
    return (<TweenOne
      component='header'
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img width='35%' src='http://pdx2xd16q.bkt.clouddn.com/logo.png' />
      </TweenOne>
      <div className={`${this.props.className}-navTitle`}> 中国大学生程序设计大赛（秦皇岛站）</div>
      {isMobile ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick()
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
            defaultSelectedKeys={['0']}
            mode='inline'
            theme='dark'
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Link to='/'>首页</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/'>登录</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/'>帮助</Link>
      </TweenOne>)}
    </TweenOne>)
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string
}

Header.defaultProps = {
  className: 'header0'
}

export default Header
