import React,{Component} from 'react'
import styles from './AppMessage.less'
import { Menu, Icon,Input,Dropdown} from 'antd';



const menu = (
    <Menu>
      <Menu.Item>2017夏季论坛</Menu.Item>
      <Menu.Item>2018夏季论坛</Menu.Item>
   
    </Menu>
  )

class AppMessage extends Component{
    
    render(){
        return(
            <div className={styles.AppMessage}>
                <ul className={styles.list}>
                    <li>
                        <img src={require('../../images/first.png')} alt='shouye'/><br/>
                       <span>首页</span>
                    </li>
                    <li>
                        <img src={require('../../images/introduce.png')} alt='shouye'/><br/>
                    <span>协会简介</span>
                    </li>
                    <li>
                        <img src={require('../../images/tell.png')} alt='shouye'/><br/>
                      <span>通知公告</span>
                    </li>
                    <li>
                        <img src={require('../../images/class.png')} alt='shouye'/><br/>
                       <span>比赛榜单</span>
                    </li>
                    <li>
                        <img src={require('../../images/compete.png')} alt='shouye'/><br/>
                     <span>历年比赛</span>
                    </li>
                    <li>
                        <img src={require('../../images/book.png')} alt='shouye'/><br/>
                      <span>证书查看</span>
                    </li>
                    <li>
                        <img src={require('../../images/talk.png')} alt='shouye'/><br/>
                        <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href=" ">
                      夏季论坛<Icon type="down" />
                      </a>
                      </Dropdown>
                    </li>
                </ul>
            </div>
        )
    }
}
export default AppMessage