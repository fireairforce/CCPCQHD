import React,{Component} from 'react'
import styles from './AppHeader.less'
import { Menu, Dropdown, Input,Divider,Button } from 'antd'
import createHistory from 'history/createHashHistory';
/**
 * 
 * 
 * 两个bug
 * */
const SubMenu = Menu.SubMenu
const Search = Input.Search
const history=createHistory();
const MenuItemGroup = Menu.ItemGroup;
// const bxw=this;
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
  constructor(){
    super()
    this.state={
        mytext: '',    
    }
}
getData(){  
     fetch('https://ccpc.elatis.cn/content/type/headerNavs',{
     method: 'GET'
     }).then(
         res => res.json()).then(
         receive => {
         this.setState({mytext:receive},() => {
             console.log('mytext233', this.state.mytext)
         });      
       }
      )
 }
 componentDidMount(){
   this.getData();
 }
    render(){
        return(
            <div className={styles.AppHeader}>
                <ul className={styles.nav}>
                 <li onClick={()=>{history.push('./')}}><img src="http://pdx2xd16q.bkt.clouddn.com/logo.png" alt='logo' className={styles.logo} /></li>
                    <li>
                      <Dropdown overlay=
                      {<Menu>
                       <Menu.Item>{this.state.mytext.data?this.state.mytext.data[0].competeType:"null"}</Menu.Item>
                       <Menu.Item>{this.state.mytext.data?this.state.mytext.data[1].competeType:"null"}</Menu.Item>
                       <Divider />
                       <SubMenu title={this.state.mytext.data?this.state.mytext.data[2].competeType:"null"}>
                         <Menu.Item>{this.state.mytext.data?this.state.mytext.data[2].details:"null"}</Menu.Item>
                         <Menu.Item>{this.state.mytext.data?this.state.mytext.data[2].details:"null"}</Menu.Item>
                       </SubMenu>
                       <SubMenu title={this.state.mytext.data?this.state.mytext.data[3].competeType:"null"}>
                         <Menu.Item>{this.state.mytext.data?this.state.mytext.data[3].details:"null"}</Menu.Item>
                         <Menu.Item>{this.state.mytext.data?this.state.mytext.data[3].details:"null"}</Menu.Item>
                       </SubMenu>
                       <SubMenu title={this.state.mytext.data?this.state.mytext.data[4].competeType:"null"}>
                         <Menu.Item>{this.state.mytext.data?this.state.mytext.data[4].details:"null"}</Menu.Item>
                         <Menu.Item>{this.state.mytext.data?this.state.mytext.data[4].details:"null"}</Menu.Item>
                       </SubMenu>
                       <Divider />
                       <Menu.Item>{this.state.mytext.data?this.state.mytext.data[5].competeType:"null"}</Menu.Item>
                       <Menu.Item>{this.state.mytext.data?this.state.mytext.data[6].competeType:"null"}</Menu.Item>
                       <Divider />
                       <Menu.Item>{this.state.mytext.data?this.state.mytext.data[7].competeType:"null"}</Menu.Item>
                       <Menu.Item>{this.state.mytext.data?this.state.mytext.data[8].competeType:"null"}</Menu.Item>
                     </Menu>}
                      >
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