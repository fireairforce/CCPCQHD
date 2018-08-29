import React,{Component} from 'react'
import styles from './AppHeader.less'
import { Menu, Dropdown, Input,Divider,Button,message } from 'antd'
/**
 * 
 * 
 * 两个bug
 * */

const SubMenu = Menu.SubMenu
const Search = Input.Search

const menu = (
    <Menu>
      <Menu.Item>2017年国赛</Menu.Item>
      <Menu.Item>2018年国赛</Menu.Item>
      <Divider />
      <SubMenu title="2017分站赛-秦皇岛站">
        <Menu.Item>东秦第一</Menu.Item>
        <Menu.Item>东秦第一</Menu.Item>
      </SubMenu>
      <SubMenu title="2017分站赛-哈尔滨站">
        <Menu.Item>东秦第一</Menu.Item>
        <Menu.Item>东秦第一</Menu.Item>
      </SubMenu>
      <SubMenu title="2017分站赛-杭州站">
        <Menu.Item>东秦第一</Menu.Item>
        <Menu.Item>东秦第一</Menu.Item>
      </SubMenu>
      <Divider />
      <Menu.Item>2017年东北地区赛</Menu.Item>
      <Menu.Item>2017年中南地区赛</Menu.Item>
      <Divider />
      <Menu.Item>2017年江苏省省赛</Menu.Item>
      <Menu.Item>2017年黑龙江省省赛</Menu.Item>
    </Menu>
  )
const MenuItemGroup = Menu.ItemGroup;
const bxw=this;
class AppHeader extends Component{
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  componentDidMount(){
    fetch('http://form.andyhui.xin/evaluation', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      return res.json()

    }).then((json) => {
      console.log('json',json)
      if (json.code === 1000) {
        console.log('json'.json)
        this.props.dispatch({
          type: 'app/allMessage',
          payload: json.data.info
        })
        this.setState({submitted: true})
      }
    }).catch((e) => {
      console.log(e)
    })
    
  }
    render(){
        return(
            <div className={styles.AppHeader}>
                <ul className={styles.nav}>
                 <li><img src="http://pdx2xd16q.bkt.clouddn.com/logo.png" alt='logo' className={styles.logo}/></li>
                    <li>
                      <Dropdown overlay={menu} >
                        <img src="http://pdx2xd16q.bkt.clouddn.com/menu.png" alt='f'/>
                      </Dropdown>
                    </li>
                    <li className={styles.search}>快速查询</li>
                    <li>
                    <Search
                          placeholder=""
                            onSearch={value => console.log(value)}
                            style={{ width: 200 ,marginTop:'18px'}}
                         />
                    </li>

                </ul>
                <ul className={styles.main}>
                    <li><img src="http://pdx2xd16q.bkt.clouddn.com/login.png" alt='login' className={styles.photo}/></li>
                    <li>
                  <Menu onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{backgroundColor:'aliceblue'}}
      >
                        <SubMenu title='登录'>
          <MenuItemGroup title="">
        <div className={styles.teacherload}>
          <div className={styles.teacherload1}><p >教练登录</p><br/>
         <Button type="primary" loading >
              登录
        </Button>
         </div>
            <div className={styles.teacherload2}><p style={{marginTop:'-50px'}}>队员登录</p><br/>
               <Button type="primary" loading >
          登录
        </Button>
            </div>
          </div>
            
          </MenuItemGroup>
        </SubMenu>
        </Menu>
                      </li>
                    <li><img src="http://pdx2xd16q.bkt.clouddn.com/resigiter.png" alt='resigter' className={styles.photo}/> </li>
                    <li>注册</li>
                    <li><img src="http://pdx2xd16q.bkt.clouddn.com/help.png" alt='help' className={styles.photo}/> </li>
                    <li>帮助</li>
                </ul>
             
            </div>
            
        )
    }
}
export default AppHeader 