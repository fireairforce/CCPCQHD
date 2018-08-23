import React,{Component} from 'react'
import styles from './AppMessage.less'
import { Menu, Dropdown} from 'antd';



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
                        <img src={require('../../images/c shouye.png')} alt='shouye'/><br/>
                       <span>首页</span>
                    </li>
                    <li>
                        <img src={require('../../images/itd.png')} alt='shouye'/><br/>
                    <span>协会简介</span>
                    </li>
                    <li>
                        <img src={require('../../images/c tong zhi.png')} alt='shouye'/><br/>
                      <span>通知公告</span>
                    </li>
                    <li>
                        <img src={require('../../images/c bangdan.png')} alt='shouye'/><br/>
                       <span>比赛榜单</span>
                    </li>
                    <li>
                        <img src={require('../../images/c linian.png')} alt='shouye'/><br/>
                     <span>历年比赛</span>
                    </li>
                    <li>
                        <img src={require('../../images/bl.png')} alt='shouye'/><br/>
                      <span>证书查看</span>
                    </li>
                    <li>
                        <img src={require('../../images/c luntan.png')} alt='shouye'/><br/>
                        <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href=" ">
                      <span>夏季论坛</span>
                      </a>
                      </Dropdown>
                    </li>
                </ul>
            </div>
        )
    }
}
export default AppMessage