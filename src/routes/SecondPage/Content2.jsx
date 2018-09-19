import React from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

class Content extends React.Component {
  static defaultProps = {
    className: 'content0'
  }

  render () {
    const props = {...this.props}
    console.log('props', props)
    const isMobile = props.isMobile
    delete props.isMobile
    const animType = {
      queue: isMobile ? 'bottom' : 'right',
      one: isMobile ? {y: '+=30', opacity: 0, type: 'from'}
        : {x: '-=30', opacity: 0, type: 'from'}
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <div
          className={`content-template ${props.className}`}
          // location={props.id}
        >
          <TweenOne
            key='img'
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyle
          />
          <div style={{height: 160}} />
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key='text'
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <div className={`${props.className}-somecontent`}>
              <h1 key='words' id={`${props.id}-title`}>
                简介
              </h1>
              <p key='word-content' id={`${props.id}-content`}>
                中国大学生程序设计竞赛（China Collegiate Programming
                Contest，简称CCPC）是由中国大学生程序设计竞赛协会组织的年度性赛事，旨在通过竞赛来提高并展示中国大学生程序设计创新与解决实际问题的能力，发现优秀的计算机人才，引领并促进中国高校程序设计教学改革与人才培养。
                中国大学生程序设计竞赛（China Collegiate Programming
                Contest，简称CCPC）是由中国大学生程序设计竞赛协会组织的年度性赛事，旨在通过竞赛来提高并展示中国大学生程序设计创新与解决实际问题的能力，发现优秀的计算机人才，引领并促进中国高校程序设计教学改革与人才培养。

              </p>
            </div>
          </QueueAnim>
        </div>
      </div>
    )
  }
}

export default Content
