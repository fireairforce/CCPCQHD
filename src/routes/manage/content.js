import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import styles from'./content.less'
import Index from './page/index'
import Wdnb from './page/wdnb/wdnb'


const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className={styles.content}>
        <Route path="/index" component={Index} />
        <Route path="/wdnb" component={Wdnb} />
        {/* <Route path="/follow" component={follow} />
        <Route path="/tools" component={Tools} />
       */}
      </Content>
    );
  }
}