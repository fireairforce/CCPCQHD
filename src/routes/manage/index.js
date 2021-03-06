import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout } from 'antd'
import { allMenu } from '../../utils/menu'
import Top from './header'
import Contents from './content'
import Footer from './bottom'
import styles from './index.less'
import 'antd/dist/antd.css'


const SubMenu = Menu.SubMenu;
const { Sider } = Layout

export default class Manage extends React.Component {
  state = {
    theme: 'light',
    current: 'index',
    collapsed: false,
    mode: 'inline',  // 水平垂直展现
  }
  componentDidMount() {
    this.handleClick([], 'index')
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    });
  }
  clear = () => {
    this.setState({
      current: 'index',
    });
  }
  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
  }
  render() {
    return (
      <Layout className={styles.containAll}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className={styles.leftMenu}
        >
          {this.state.theme === 'light' ? <a href="https://github.com/YYL1999" target='_blank' rel='noopener noreferrer'><Icon type="github" className={styles.github} /></a> :
            <a href="https://github.com/YYL1999" target='_blank' rel='noopener noreferrer'><Icon type="github" className={styles.githubwhite} /></a> }
          { this.state.theme === 'light' ? <span className={styles.author}>CCPC</span> : <span className={styles.authorwhite}>CCPC</span> }
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={['']}
            selectedKeys={[this.state.current]}
            className={styles.menu}
            mode={this.state.mode}
          >
            {
              allMenu.map((subMenu) => {
                if (subMenu.children && subMenu.children.length) {
                  return (
                    <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                      {subMenu.children.map(menu => (
                        <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
                      ))}
                    </SubMenu>
                  )
                }
                return (
                  <Menu.Item key={subMenu.url}>
                    <Link to={`/${subMenu.url}`}>
                      <Icon type={subMenu.icon} /><span className={styles.navText}>{subMenu.name}</span>
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
          <div className={styles.switch}>
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </Sider>
        <Layout>
          <Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear} />
          <Contents />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
