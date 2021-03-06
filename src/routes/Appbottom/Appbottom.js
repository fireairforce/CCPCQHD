import React from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import './footer.less'
class Footer extends React.Component {
  static defaultProps = {
    className: 'footer0'
  };

  render () {
    const props = { ...this.props }
    delete props.isMobile
    return (<OverPack
      {...props}
      playScale={0.05}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key='footer'
      >
        <span id={`${props.id}-content`}>
          Copyright © 2015-2018  中国大学生程序设计竞赛组委会
        </span>
      </TweenOne>
    </OverPack>)
  }
}

export default Footer

