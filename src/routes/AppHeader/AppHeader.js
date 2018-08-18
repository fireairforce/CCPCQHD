import React,{Component} from 'react'
import styles from './AppHeader.less'
import { Menu, Dropdown, Icon,Input } from 'antd'
import 'antd/dist/antd.css'

const SubMenu = Menu.SubMenu
const Search = Input.Search

const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <SubMenu title="sub menu">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title="disabled sub menu" disabled>
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  )
class AppHeader extends Component{
    render(){
        return(
            <div className={styles.AppHeader}>
                <ul className={styles.nav}>
                   <li><img src={require('../../images/facebook.png')} alt='logo' className={styles.logo}/>></li>
                    <li>
                      <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href=" ">
                      Cascading menu <Icon type="down" />
                      </a>
                      </Dropdown>
                    </li>
                    <li>快速查询</li>
                    <li>
                    <Search
                          placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                         />
                    </li>

                </ul>
                <ul className={styles.main}>
                    <li><img src={require('../../images/login.png')} alt='login' className={styles.photo}/></li>
                    <li>登录</li>
                    <li><img src={require('../../images/resigiter.png')} alt='resigter' className={styles.photo}/> </li>
                    <li>注册</li>
                    <li><img src={require('../../images/help.png')} alt='help' className={styles.photo}/> </li>
                    <li>帮助</li>
                </ul>
             
            </div>
            
        )
    }
}
export default AppHeader 