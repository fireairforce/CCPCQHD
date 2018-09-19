import React from 'react'
import PropTypes from 'prop-types'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

class Content extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    className: 'content6'
  };

  state = {
    show: 0
  };

  onChange = (key) => {
    this.setState({ show: parseInt(key) })
  }

  getBlockChildren = (item, i) => {
    const tag = item.tag
    const img = item.img
    const text = item.text
    return (
      <TabPane
        key={i}
        tab={(<span
          className={`${this.props.className}-tag`}
          id={`${this.props.id}-tagBlock${i}`}
        >
          <i><img src={tag.icon} width='100%' /></i>
          {tag.tag}
        </span>)}
      >
        <TweenOne.TweenOneGroup
          enter={{ y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          leave={null}
          component=''
        >
          {this.state.show === i && (
            <div key='content'>
              <div
                className={`${this.props.className}-img`}
                id={`${this.props.id}-imgBlock${i}`}
              >
                {img}
              </div>
              <div
                className={`${this.props.className}-text`}
                id={`${this.props.id}-textBlock${i}`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>)}
        </TweenOne.TweenOneGroup>
      </TabPane>
    )
  };

  render () {
    const props = { ...this.props }
    delete props.isMobile
    const childrenData = [
      {
        tag: { tag: '住宿安排' },
        img: <img width='100%' src='http://pdy48vy9a.bkt.clouddn.com/5.jpg' />,
        text: `<strong>1.北戴河怪楼奇园大酒店（北戴河区 联峰中路106号）</strong><br/>
            秦皇岛火车站出发：
            <br />
            秦皇岛火车站上车->刘庄站 下车 （共32站）->步行380米到达目的地。全程：20.9公里，用时约1小时28分钟。
            <br />
             打车途经北环路、滨海大道，约48元，33分钟。<br/>
            北戴河火车站出发：燕兴小区站->乘坐37路->怪楼站下车（共24站）->步行190米到达目的地。全程15.6公里，约1小时10分钟。 打车约27元 ，19分钟。<br/>
            <strong>2.北戴河莲蓬假日酒店（北戴河区 剑秋路25号）</strong><br/>
            秦皇岛火车站出发：秦皇岛火车站（公交站）-上车-34路-33站-海滨汽车站(北戴河旅游区)站-下车-步行10米-海滨汽车站-上车-22路-4站-莲花石站-下车-步行380米。打车约54元，预计38分钟。<br/>
            北戴河火车站出发：北戴河火车站-5/22路-联峰山公园站-步行390米。打车约22元，12分钟。<br/>
            <strong>3.北戴河悦华宾馆 (北戴河区东经路90号)</strong><br/>
            秦皇岛火车站出发：秦皇岛火车站上车（34路）->海滨汽车站（北戴河旅游区）站—换乘22路->老虎石站下车—沿海宁路走120米->左转进入东经路前进160米->到达酒店北戴河区东经路90号。<br/>
            北戴河火车站出发：北戴河火车站上车（37路）->海滨汽车站下车>向南走沿海宁路走760米->左转到东经路->沿东经路走160米->到达酒店，全程15.8公里，耗时约1小时16分钟，打车费用约19元。
        `
      },
      {
        tag: {tag: '交通路线'},
        img: <img width='100%' src='http://pdy48vy9a.bkt.clouddn.com/timg.jpeg' />,
        text: `&nbsp&nbsp&nbsp&nbsp&nbsp<strong>河北省秦皇岛市海港区泰山路143号东北大学秦皇岛分校体育馆。</strong>
            <br/>
       <div style='line-height: 40px;'>
        1.秦皇岛火车站乘出租车，预计20分钟，车费20元左右。<br/>
        2.北戴河火车站乘出租车，预计25分钟，车费35元左右。<br/>
        3.山海关火车站乘出租车，预计40分钟，车费50元左右。<br/>
        </div>
        `
      },
      {
        tag: { tag: '赛场布置' },
        img: <img width='100%' src='http://pdy48vy9a.bkt.clouddn.com/%E5%9B%BE%E7%89%87%201.png' />
      }
    ]
    const tabsChildren = childrenData.map(this.getBlockChildren)
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component='h1'
            key='h1'
            reverseDelay={200}
            id={`${props.id}-title`}
          >
            赛事服务
          </TweenOne>
          <TweenOne.TweenOneGroup
            key='tabs'
            enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
            leave={{ y: 30, opacity: 0 }}
            className={`${props.className}-tabs`}
            id={`${props.id}-tabs`}
          >
            <Tabs key='tabs' onChange={this.onChange} activeKey={`${this.state.show}`}>
                {tabsChildren}
              </Tabs>
          </TweenOne.TweenOneGroup>
        </OverPack>
      </div>
    )
  }
}

export default Content
