import React, {Component} from 'react'
import './AppHeader.less'
import { Link } from 'react-router-dom'
// import { Menu, Dropdown, Input, Divider, Button } from 'antd'
import createHistory from 'history/createHashHistory'
// import { Link } from 'react-router-dom'

// const SubMenu = Menu.SubMenu
// const Search = Input.Search
const history = createHistory()
// const MenuItemGroup = Menu.ItemGroup

class AppHeader extends Component {
  state = {
    current: 'mail'
  }
  onClick=() => {
    const w = window.open('about:blank')
    w.location.href = 'http://dev.ccpc.io'
  }
  handleClick = (e) => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }
  render () {
    return (
      <div className='AppHeader'>
        <Link to='/'>
        <ul className='nav'>
          <li onClick={() => { history.push('./') }}><img src='http://pdx2xd16q.bkt.clouddn.com/logo.png' alt='logo' className='logo' />
          </li>
        </ul>
        <ul className='AppHeader-Title'>
          <h2>中国大学生程序设计竞赛</h2>
          <h5>China Collegiate Programming Contest</h5>
        </ul>
        </Link>
        <ul className='AppHeader-Rank'>
          <a href=' ' alt='rank'>
            <span>实时榜单</span>
          </a>
        </ul>
        <ul className='AppHeader-Login'>
          <a alt='login' onClick={this.onClick}>
            <span >报名系统登录</span>
          </a>
        </ul>
      </div>

    )
  }
}
export default AppHeader
