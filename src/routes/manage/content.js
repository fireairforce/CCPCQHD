import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import styles from'./content.less'
import Menu from './page/menu/menu'
import Slider from './page/slider/wdnb'
import 'antd/dist/antd.css'


const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className={styles.content}>
        <Route path="/manage/index" component={Menu} />
        <Route path="/manage/slider" component={Slider} />
        {/* <Route path="/follow" component={follow} />
        <Route path="/tools" component={Tools} />
       */}
      </Content>
    );
  }
}