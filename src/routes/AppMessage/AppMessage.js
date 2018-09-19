import React, { Component } from 'react'
import './AppMessage.less'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'antd'

const menuOne = (
  <Menu>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.alipay.com/'>1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.taobao.com/'>2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>3rd menu item</a>
    </Menu.Item>
  </Menu>
)

const SubMenu = Menu.SubMenu
const menuTwo = (
  <Menu>
    <Menu.Item>总决赛</Menu.Item>
    {/* <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title='sub menu'>
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu> */}
    {/* <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu> */}
  </Menu>
)

const menuThree = (
  <Menu>
    <Menu.Item><Link to='/detail/2016/girl'>女生赛</Link></Menu.Item>
    <Menu.Item><Link to='/detail/2016/net'>网络选拔赛</Link></Menu.Item>
    <Menu.Item><Link to='/detail/2016/part'>分站赛</Link></Menu.Item>
    <Menu.Item><Link to='/detail/2016/total'>总决赛</Link></Menu.Item>
  </Menu>
)

const menuFour = (
  <Menu>
    <Menu.Item><Link to='/detail/2017/girl'>女生赛</Link></Menu.Item>
    <Menu.Item><Link to='/detail/2017/net'>网络选拔赛</Link></Menu.Item>
    <Menu.Item><Link to='/detail/2017/part'>分站赛</Link></Menu.Item>
    <Menu.Item><Link to='/detail/2017/total'>总决赛</Link></Menu.Item>
  </Menu>
)

const menuFive = (
  <Menu>
    <Menu.Item>2017夏季论坛</Menu.Item>
    <Menu.Item>2018夏季论坛</Menu.Item>
  </Menu>
)
const menuSix = (
  <Menu>
    <Menu.Item><Link to='/detail/2018/girl'>女生赛</Link></Menu.Item>
    <Menu.Item><Link to='/detail/2018/net'>网络选拔赛</Link></Menu.Item>
    <Menu.Item><Link to='/detail/2018/part'>分站赛</Link></Menu.Item>
    <Menu.Item><Link to='/detail/2018/total'>总决赛</Link></Menu.Item>
  </Menu>
)

class AppMessage extends Component {
  render () {
    return (
      <div className='AppMessage'>
        <ul className='list'>

          <li className="list-one">
            <img src='http://pdx2xd16q.bkt.clouddn.com/%E7%AB%9E%E8%B5%9B%E7%AE%80%E4%BB%8B.png' alt='shouye'
                 style={{width: '50px', height: '50px'}} /><br />
            {/* <Dropdown overlay={menuTwo}> */}
            <a className='ant-dropdown-link' href=' '>
              <span>赛事简介</span>
            </a>
            {/* </Dropdown> */}
          </li>
          <li>
            <div>
              <Link to='/detail/2015/total'>

              <img src='http://pdx2xd16q.bkt.clouddn.com/ccc1.png' alt='shouyeOne'
                   style={{width: '50px', height: '50px'}} /><br />
                <span>CCPC&nbsp;2015</span>
              </Link>
            </div>
          </li>

          <li>

            <Dropdown overlay={menuThree}>
              <div>
                <img src='http://pdx2xd16q.bkt.clouddn.com/cc2.png' alt='shouyeTwo'
                     style={{width: '50px', height: '50px'}} /><br />
                <a className='ant-dropdown-link' href=' '>
                  <span>CCPC&nbsp;2016</span>
                </a>
              </div>
            </Dropdown>
          </li>

          <li>
            <Dropdown overlay={menuFour}>
              <div>
                <img src='http://pdx2xd16q.bkt.clouddn.com/p.png' alt='shouyeThree'
                     style={{width: '50px', height: '50px'}} /><br />
                <a className='ant-dropdown-link' href=' '>
                  <span>CCPC&nbsp;2017</span>
                </a>
              </div>
            </Dropdown>
          </li>

          <li>
            <Dropdown overlay={menuSix}>
              <div>
                <img src='http://pdx2xd16q.bkt.clouddn.com/cc3.png' alt='shouyeFour'
                     style={{width: '50px', height: '50px'}} /><br />
                <a className='ant-dropdown-link' href=' '>
                  <span>CCPC&nbsp;2018</span>
                </a>
              </div>
            </Dropdown>
          </li>

          <li>

            <Dropdown overlay={menuFive}>
              <div>
                <img src='http://pdx2xd16q.bkt.clouddn.com/c%20luntan.png' alt='shouyeFive'
                     style={{width: '50px', height: '50px'}} /><br />
                <a className='ant-dropdown-link' href=' '>
                  <span>夏季论坛</span>
                </a>
              </div>
            </Dropdown>
          </li>
        </ul>
      </div>
    )
  }
}

export default AppMessage
