import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import 'rc-banner-anim/assets/index.css'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import PropTypes from 'prop-types'

const BgElement = Element.BgElement
class Banner extends Component {
  render () {
    const props = { ...this.props }
    delete props.isMobile
    const childrenData = [
      {
        content: '2018年中国大学生程序设计竞赛欢迎你',
        time: '9.27-9.28'
      },
      {
        content: '相逢的人会再相逢 ',
        time: '2017年省赛在我校成功举办'
      },
      {
        content: '小岛美景候多时',
        time: ''
      }
    ]
    const childrenToRender = childrenData.map((item, i) => {
      const title = item.title
      const content = item.content
      const time = item.time
      return (<Element
        key={i}
        prefixCls='banner-user-elem'
      >
        <BgElement
          className={`bk bk${i}`}
          key='bk'
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
          <p
            key='content'
            id={`${props.id}-contentBlock${i}`}
          >
            {content}
          </p>
          <p
            key='time'
            id={`${props.id}-contentBlock${i}`}
          >
            {time}
          </p>
        </QueueAnim>
      </Element>)
    })
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
            >
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
      </OverPack>
    )
  }
}

Banner.propTypes = {
  className: PropTypes.string
}

Banner.defaultProps = {
  className: 'banner1'
}

export default Banner
