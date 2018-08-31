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
                        <img src="http://pdx2xd16q.bkt.clouddn.com/c%20shouye.png" alt='shouye' style={{width:'65px',height:'65px'}}/><br/>
                       <span>首页</span>
                    </li>
                    <li>
                        <img src="http://pdx2xd16q.bkt.clouddn.com/itd.png" alt='shouye' style={{width:'65px',height:'65px'}}/><br/>
                    <span>协会简介</span>
                    </li>
                    <li>
                        <img src="http://pdx2xd16q.bkt.clouddn.com/c%20tong%20zhi.png" alt='shouye' style={{width:'65px',height:'65px'}}/><br/>
                      <span>通知公告</span>
                    </li>
                    <li>
                        <img src="http://pdx2xd16q.bkt.clouddn.com/c%20bangdan.png" alt='shouye' style={{width:'65px',height:'65px'}}/><br/>
                       <span>比赛榜单</span>
                    </li>
                    <li>
                        <img src="http://pdx2xd16q.bkt.clouddn.com/c%20linian.png" alt='shouye' style={{width:'65px',height:'65px'}}/><br/>
                     <span>历年比赛</span>
                    </li>
                    <li>
                        <img src="http://pdx2xd16q.bkt.clouddn.com/bl.png" alt='shouye' style={{width:'65px',height:'65px'}}/><br/>
                      <span>证书查看</span>
                    </li>
                    <li>
                        <img src="http://pdx2xd16q.bkt.clouddn.com/c%20luntan.png" alt='shouye' style={{width:'65px',height:'65px'}}/><br/>
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