// import React from 'react'
// import PropTypes from 'prop-types'
// import QueueAnim from 'rc-queue-anim'
// import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

// class Content extends React.Component {
//   static propTypes = {
//     className: PropTypes.string,
//     id: PropTypes.string
//   };

//   static defaultProps = {
//     className: 'content7'
//   };

//   getBlockChildren = (item, i) => (
//     <li key={i} id={`${this.props.id}-block${i}`}>
//       <div className='icon'>
//         <img src={item.icon} width='100%' />
//       </div>
//       <div style={{fontSize: '1.4em'}}>{item.title}</div>
//       <p>{item.content}</p>
//     </li>);

//   render () {
//     const props = { ...this.props }
//     delete props.isMobile
//     const dataSource = [
//       { icon: 'http://pdy48vy9a.bkt.clouddn.com/yao.png', title: '邀请函' },
//       { icon: 'http://pdy48vy9a.bkt.clouddn.com/richeng.png', title: '日程安排' },
//       { icon: 'http://pdy48vy9a.bkt.clouddn.com/bangdan.png', title: '奖项榜单' }
//     ]
//     const listChildren = dataSource.map(this.getBlockChildren)
//     return (
//       <div
//         {...props}
//         className={`content-template-wrapper ${props.className}-wrapper`}
//       >
//         <div
//           className={`content-template ${props.className}`}
//           // location={props.id}
//         >
//           <QueueAnim
//             component='ul' type='bottom' key='block' leaveReverse
//             id={`${props.id}-contentWrapper`}
//           >
//           《div》》
//             {listChildren}
//           </QueueAnim>
//         </div>
//       </div>
//     )
//   }
// }

// export default Content
import React, {Component} from 'react'
import {Modal} from 'antd'
import PDF from 'react-pdf-js'
import './less/Content7.less'
class Content extends Component {
  constructor () {
    super()
    this.state = {
      visible: false,
      visibles: false
    }
  }
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  showModals =() => {
    this.setState({
      visibles: true
    })
  }
  handleOk = (e) => {
    console.log(e)
    this.setState({
      visible: false
    })
    const w = window.open('about:blank')
    w.location.href = 'http://pdy48vy9a.bkt.clouddn.com/ccpc.pdf'
  }
  handleOks = (e) => {
    console.log(e)
    this.setState({
      visibles: false
    })
    const w = window.open('about:blank')
    w.location.href = 'http://pdy48vy9a.bkt.clouddn.com/CCPC2018-%E7%A7%A6%E7%9A%87%E5%B2%9B%E7%AB%99%E6%97%A5%E7%A8%8B%E5%AE%89%E6%8E%92.pdf'
  }
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  handleCancels = (e) => {
    console.log(e)
    this.setState({
      visibles: false
    })
  }
  render () {
    console.log('this.props===>', this.props)
    return (
      <div>
        <div className='message'>
          <ul className='uls'>
            <li className='allThing'>
              <img src='http://pdy48vy9a.bkt.clouddn.com/yao.png' /><br />
              <p className='allP' onClick={this.showModal.bind(this)}>邀请函</p>
            </li>
            <li className='allThing'>
              <img src='http://pdy48vy9a.bkt.clouddn.com/richeng.png' /><br />
              <p className='allP'onClick={this.showModals.bind(this)}>日程安排</p>
            </li>
            <li className='allThing'>
              <img src='http://pdy48vy9a.bkt.clouddn.com/bangdan.png' /><br />
              <p className='allP'>奖项榜单</p>
            </li>
          </ul>
        </div>
        <div >
          <Modal
            title='邀请函'
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width='760px'
            okText='下载'
            cancelText='关闭'
            className='yao'
        >
            {/* <PDF
              file='http://pdy48vy9a.bkt.clouddn.com/ccpc.pdf'
            /> */}
            <img src='http://pdy48vy9a.bkt.clouddn.com/%E6%9C%AA%E5%91%BD%E5%90%8D.jpg' alt='inviation'/>

          </Modal>
        </div>
        <div >
          <Modal
            title='日程安排'
            visible={this.state.visibles}
            onOk={this.handleOks}
            onCancel={this.handleCancels}
            width='920px'
            okText='下载'
            cancelText='关闭'
        >
            <PDF
              file='http://pdy48vy9a.bkt.clouddn.com/CCPC2018-%E7%A7%A6%E7%9A%87%E5%B2%9B%E7%AB%99%E6%97%A5%E7%A8%8B%E5%AE%89%E6%8E%92.pdf'
            />

          </Modal>
        </div>
        <div class='sky'>
          <div class='clouds_one' />
          <div class='clouds_two' />
          <div class='clouds_three' />
        </div>
      </div>
    )
  }
}
export default Content
