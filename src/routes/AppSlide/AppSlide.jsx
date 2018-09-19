import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import 'rc-banner-anim/assets/index.css'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import PropTypes from 'prop-types'
import './total.less'

const BgElement = Element.BgElement
class Banner extends Component {
  render () {
    const props = {...this.props}
    delete props.isMobile
    const childrenData = [
      {
        content: '2018 中国大学生程序设计竞赛 (女生专场)',
        school: '杭州电子科技大学',
        time: '5.26-5.27',
        button: ''
      },
      {
        content: '2018 中国大学生程序设计竞赛网络赛',
        school: '杭电OJ',
        time: '8.25',
        button: ''
      },
      {
        content: '2018 中国大学生程序设计竞赛(吉林站)',
        school: '北华大学',
        time: '9.21-9.22',
        button: ''
      },
      {
        content: '2018 中国大学生程序设计竞赛(秦皇岛站)',
        school: '东北大学秦皇岛分校',
        time: '9.27-9.28',
        button: ''
      },
      {
        content: '2018 中国大学生程序设计竞赛(桂林站)',
        school: '桂林电子科技大学',
        time: '10.27-10.28',
        button: ''
      },
      {
        content: '2018 中国大学生程序设计竞赛总决赛',
        school: '哈尔滨工业大学(深圳)',
        time: '待定',
        button: ''
      }
    ]
    const childrenToRender = childrenData.map((item, i) => {
      const title = item.title
      const content = item.content
      const school = item.school
      const time = item.time
      const button = item.button
      return (<Element
        key={i}
        prefixCls='banner-user-elem'
      >
        <BgElement
          className={`bg${i}`}
          key='bg'
          autoPlay
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key='text'
          id={`${props.id}-wrapperBlock${i}`}
        >
          <span
            className='logo'
            key='logo'
            id={`${props.id}-titleBlock${i}`}
            dangerouslySetInnerHTML={{
              __html: title
            }}
          />
          <div
            className='Slide-title'
            key='content'
            id={`${props.id}-contentBlock${i}`}
          >
            <strong> {content}</strong>
          </div>
          <p
            key='school'
            id={`${props.id}-contentBlock${i}`}
          >
            {school}
          </p>
          <p
            key='time'
            id={`${props.id}-contentBlock${i}`}
          >
            {time}
          </p>
          <Button
            type='ghost'
            key='button'
            id={`${props.id}-buttonBlock${i}`}
          >
            {button}
          </Button>
        </QueueAnim>
      </Element>)
    }
    )
    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key='banner'
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=''
        >
          <div className={`${props.className}-wrapper`}>
            <BannerAnim
              key='banner'
              autoPlay
              duration={1000}
            >
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        {/* <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          style={{ bottom: 40 }}
          key='icon'
        >
          <Icon type='down' />
        </TweenOne> */}
      </OverPack>
    )
  }
}

Banner.propTypes = {
  className: PropTypes.string
}

Banner.defaultProps = {
  className: 'test'
}

export default Banner
