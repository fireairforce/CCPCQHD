import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import styles from'./content.less'
import Menu from './page/menu/menu'
import Slider from './page/slider/index'
import GameNews from './page/news/game'
import News from './page/news/new'
import competeModify from './page/modify/competeModify'
import focusNewsModify from './page/modify/focusNewsModify'
import 'antd/dist/antd.css'


const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className={styles.content}>
        <Route path="/manage/index" component={Menu} />
        <Route path="/manage/slider" component={Slider} />
        <Route path='/manage/game' component={GameNews} />
        <Route path='/manage/news' component={News} /> 
        <Route path="/manage/competemodify" component={competeModify} />
        <Route path="/manage/focusnewsmodify" component={focusNewsModify} />
      
      </Content>
    );
  }
}