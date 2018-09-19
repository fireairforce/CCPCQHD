import React, {Component} from 'react'
import styles from './index.css'
import { Row, Col } from 'antd'
import '../../../src/router'
import BannerAnim from 'rc-banner-anim'
import QueueAnim from 'rc-queue-anim'
import { TweenOneGroup } from 'rc-tween-one'
import Icon from 'antd/lib/icon'
import PropTypes from 'prop-types'
import { relativeTimeRounding } from 'moment'

const Element = BannerAnim.Element

let textData = [
  {
    content: '旷视科技是以人工智能技术为核心的行业物联解决方案提供商，为全球行业用户提供领先的人工智能算法和解决方案，致力于构建城市级智能物联网系统。作为世界最早一批用深度学习方法实现人脸识别规模化商用的人工智能企业之一，旷视旗下拥有全球最大的人脸识别开放平台 Face++ 和第三方人脸身份验证平台 FaceID，并已在各垂直领域推出了包括人脸识别支付、人脸识别解锁、全帧智能抓拍机在内的多个具有开创性意义的 AI 产品。基于核心的深度学习和智能传感技术，旷视科技希望用 AI+IoT 赋能摄像头、手机、汽车等城市终端，构建数字化、智能化的物联系统，从而提升商业运营效率和人们生活品质，为行业用户提供真正的商业价值。旷视在行业的领先地位源于对核心技术持之以恒的创新。作为国内最大的人工智能原创技术企业，旷视拥有国内外在申及授权专利 700余件，并代表行业领先技术提供方参与了 19 项人工智能国家及行业标准制定。 ',
    title: 'Face++'
  },
  {
    content: '腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一，秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务。通过互联网服务提升人类生活品质是腾讯的使命。腾讯提供社交平台与数字内容两项核心服务，把“连接一切”作为战略目标。QQ的月活跃帐户数达到7.83亿，最高同时在线帐户数达到2.71亿；微信和WeChat的合并月活跃帐户数达9.89亿。腾讯的发展深刻地影响和改变了数以亿计网民的沟通方式和生活习惯，并为中国互联网行业开创了更加广阔的应用前景。面向未来，坚持自主创新，树立民族品牌是腾讯的长远发展规划。腾讯50%以上员工为研发人员，拥有完善的自主研发体系，在存储技术、数据挖掘、多媒体、中文处理、分布式网络、无线技术六大方向都拥有了相当数量的专利，在全球互联网企业中专利申请和授权总量均位居前列。成为最受尊敬的互联网企业是腾讯的远景目标。腾讯一直积极参与公益事业、努力承担企业社会责任、推动网络文明。腾讯成立了中国互联网首家慈善公益基金会——腾讯慈善公益基金会，并建立了腾讯公益网（gongyi.qq.com）。秉承“致力公益慈善事业，关爱青少年成长，倡导企业公民责任，推动社会和谐进步”的宗旨，腾讯的每一项产品与业务都拥抱公益，开放互联，并倡导所有企业一起行动，通过互联网领域的技术、传播优势，缔造“人人可公益，民众齐参与”的互联网公益新生态。',
    title: '腾讯'
  },
  {
    content: '字节跳动公司成立于2012年3月，是全球第一家将人工智能应用到主产品的公司。随着大众用户的阅读行为广泛向移动设备迁移，字节跳动获得了高速发展，在行业内已建立起了极高的品牌知名度与影响力。在此过程中，字节跳动帮助内容创造者们更方便的进行内容的分发，助力各类媒体更好地适应移动互联网时代。旗下产品主要有：今日头条、抖音、火山小视频、西瓜视频、悟空问答、懂车帝、Face U、图虫等。此外，2016年字节跳动人工智能实验室成立，依托字节跳动的海量数据，专注于人工智能领域的前沿技术研究。在夯实国内市场的同时，字节跳动也在积极进行国际化部署，目标在全球范围内提供先进的移动互联网信息分发服务，成为全球领先的移动互联网公司。',
    title: '字节跳动'
  },
  {
    content: '快手是一个记录和分享生活的短视频社交平台，公司自2011年创立，在过去7年时间里，稳步成长为数亿用户的生活分享社区。快手坚持每个人都值得被记录，每个人都有被看到的权利和机会，致力于用技术提升每一个人独特的幸福感。 在快手上，用户可以用短视频和照片记录生活点滴，也可以通过直播与他人实时互动。作为线下真实生活在网络上的全息投射，快手平台汇聚了完整的中国社会生活图景，被誉为流动的清明上河图。在东南亚地区、韩国、俄罗斯、巴西等海外市场，快手也发展迅猛，深受用户欢迎。',
    title: '快手'
  }
]
let dataArray = [
  {
    pic: 'http://pdx2xd16q.bkt.clouddn.com/faceplus.png',
    map: '',
    color: '#FFF43D',
    background: '#F6B429',
    content: '旷视科技是以人工智能技术为核心的行业物联解决方案提供商，为全球行业用户提供领先的人工智能算法和解决方案，致力于构建城市级智能物联网系统。作为世界最早一批用深度学习方法实现人脸识别规模化商用的人工智能企业之一，旷视旗下拥有全球最大的人脸识别开放平台 Face++ 和第三方人脸身份验证平台 FaceID，并已在各垂直领域推出了包括人脸识别支付、人脸识别解锁、全帧智能抓拍机在内的多个具有开创性意义的 AI 产品。基于核心的深度学习和智能传感技术，旷视科技希望用 AI+IoT 赋能摄像头、手机、汽车等城市终端，构建数字化、智能化的物联系统，从而提升商业运营效率和人们生活品质，为行业用户提供真正的商业价值。旷视在行业的领先地位源于对核心技术持之以恒的创新。作为国内最大的人工智能原创技术企业，旷视拥有国内外在申及授权专利 700余件，并代表行业领先技术提供方参与了 19 项人工智能国家及行业标准制定。 ',
    title: 'Face++'
  },
  {
    pic: 'http://pdx2xd16q.bkt.clouddn.com/Tencent_Logo.png',
    map: '',
    color: '#FF4058',
    background: '#FC1E4F',
    content: '腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一，秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务。通过互联网服务提升人类生活品质是腾讯的使命。腾讯提供社交平台与数字内容两项核心服务，把“连接一切”作为战略目标。QQ的月活跃帐户数达到7.83亿，最高同时在线帐户数达到2.71亿；微信和WeChat的合并月活跃帐户数达9.89亿。腾讯的发展深刻地影响和改变了数以亿计网民的沟通方式和生活习惯，并为中国互联网行业开创了更加广阔的应用前景。面向未来，坚持自主创新，树立民族品牌是腾讯的长远发展规划。腾讯50%以上员工为研发人员，拥有完善的自主研发体系，在存储技术、数据挖掘、多媒体、中文处理、分布式网络、无线技术六大方向都拥有了相当数量的专利，在全球互联网企业中专利申请和授权总量均位居前列。成为最受尊敬的互联网企业是腾讯的远景目标。腾讯一直积极参与公益事业、努力承担企业社会责任、推动网络文明。腾讯成立了中国互联网首家慈善公益基金会——腾讯慈善公益基金会，并建立了腾讯公益网（gongyi.qq.com）。秉承“致力公益慈善事业，关爱青少年成长，倡导企业公民责任，推动社会和谐进步”的宗旨，腾讯的每一项产品与业务都拥抱公益，开放互联，并倡导所有企业一起行动，通过互联网领域的技术、传播优势，缔造“人人可公益，民众齐参与”的互联网公益新生态。',
    title: '腾讯'
  },
  {
    pic: 'http://pdx2xd16q.bkt.clouddn.com/bytejump.png',
    map: '',
    color: '#9FDA7F',
    background: '#64D487',
    content: '字节跳动公司成立于2012年3月，是全球第一家将人工智能应用到主产品的公司。随着大众用户的阅读行为广泛向移动设备迁移，字节跳动获得了高速发展，在行业内已建立起了极高的品牌知名度与影响力。在此过程中，字节跳动帮助内容创造者们更方便的进行内容的分发，助力各类媒体更好地适应移动互联网时代。旗下产品主要有：今日头条、抖音、火山小视频、西瓜视频、悟空问答、懂车帝、Face U、图虫等。此外，2016年字节跳动人工智能实验室成立，依托字节跳动的海量数据，专注于人工智能领域的前沿技术研究。在夯实国内市场的同时，字节跳动也在积极进行国际化部署，目标在全球范围内提供先进的移动互联网信息分发服务，成为全球领先的移动互联网公司。',
    title: '字节跳动'
  },
  {
    pic: 'http://pdx2xd16q.bkt.clouddn.com/quickhand.png',
    map: '',
    color: '#9FDA7F',
    background: '#64D487',
    content: '快手是一个记录和分享生活的短视频社交平台，公司自2011年创立，在过去7年时间里，稳步成长为数亿用户的生活分享社区。快手坚持每个人都值得被记录，每个人都有被看到的权利和机会，致力于用技术提升每一个人独特的幸福感。 在快手上，用户可以用短视频和照片记录生活点滴，也可以通过直播与他人实时互动。作为线下真实生活在网络上的全息投射，快手平台汇聚了完整的中国社会生活图景，被誉为流动的清明上河图。在东南亚地区、韩国、俄罗斯、巴西等海外市场，快手也发展迅猛，深受用户欢迎。',
    title: '快手'
  }
]
dataArray = dataArray.map(item => ({ ...item, ...textData }))
class AppBottomNews extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: 'details-switch-demo'
  };

  constructor (props) {
    super(props)
    this.state = {
      olds: '',
      showInt: 0,
      delay: 0,
      imgAnim: [
            { translateX: [0, 300], opacity: [1, 0] },
            { translateX: [0, -300], opacity: [1, 0] }
      ],
      styles1: 'zanzhushang1',
      styles2: 'zanzhushang3',
      content: ' ',
      pic: '',
      title: ''
    }
    this.oneEnter = false
  }

  onChange = () => {
    if (!this.oneEnter) {
      // this.setState({ delay: 300 })
      this.oneEnter = true
    }
  }
  onMouseEnter1=() => {
    this.setState({
      styles1: 'zanzhushang2',
      styles2: 'zanzhushang4',
      content: '旷视科技是以人工智能技术为核心的行业物联解决方案提供商，为全球行业用户提供领先的人工智能算法和解决方案，致力于构建城市级智能物联网系统。作为世界最早一批用深度学习方法实现人脸识别规模化商用的人工智能企业之一，旷视旗下拥有全球最大的人脸识别开放平台 Face++ 和第三方人脸身份验证平台 FaceID，并已在各垂直领域推出了包括人脸识别支付、人脸识别解锁、全帧智能抓拍机在内的多个具有开创性意义的 AI 产品。基于核心的深度学习和智能传感技术，旷视科技希望用 AI+IoT 赋能摄像头、手机、汽车等城市终端，构建数字化、智能化的物联系统，从而提升商业运营效率和人们生活品质，为行业用户提供真正的商业价值。旷视在行业的领先地位源于对核心技术持之以恒的创新。作为国内最大的人工智能原创技术企业，旷视拥有国内外在申及授权专利 700余件，并代表行业领先技术提供方参与了 19 项人工智能国家及行业标准制定。 ',
      pic: 'http://pdx2xd16q.bkt.clouddn.com/faceplus.png',
      title: 'Face++'

    })
    console.log('aa')
  }
  onMouseEnter2=() => {
    this.setState({
      styles1: 'zanzhushang2',
      styles2: 'zanzhushang4',
      content: '腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一，秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务。通过互联网服务提升人类生活品质是腾讯的使命。腾讯提供社交平台与数字内容两项核心服务，把“连接一切”作为战略目标。QQ的月活跃帐户数达到7.83亿，最高同时在线帐户数达到2.71亿；微信和WeChat的合并月活跃帐户数达9.89亿。腾讯的发展深刻地影响和改变了数以亿计网民的沟通方式和生活习惯，并为中国互联网行业开创了更加广阔的应用前景。面向未来，坚持自主创新，树立民族品牌是腾讯的长远发展规划。腾讯50%以上员工为研发人员，拥有完善的自主研发体系，在存储技术、数据挖掘、多媒体、中文处理、分布式网络、无线技术六大方向都拥有了相当数量的专利，在全球互联网企业中专利申请和授权总量均位居前列。成为最受尊敬的互联网企业是腾讯的远景目标。腾讯一直积极参与公益事业、努力承担企业社会责任、推动网络文明。腾讯成立了中国互联网首家慈善公益基金会——腾讯慈善公益基金会，并建立了腾讯公益网（gongyi.qq.com）。秉承“致力公益慈善事业，关爱青少年成长，倡导企业公民责任，推动社会和谐进步”的宗旨，腾讯的每一项产品与业务都拥抱公益，开放互联，并倡导所有企业一起行动，通过互联网领域的技术、传播优势，缔造“人人可公益，民众齐参与”的互联网公益新生态。',
      pic: 'http://pdx2xd16q.bkt.clouddn.com/Tencent_Logo.png',
      title: '腾讯'

    })
    console.log('aa')
  }
  onMouseEnter3=() => {
    this.setState({
      styles1: 'zanzhushang2',
      styles2: 'zanzhushang4',
      content: '字节跳动公司成立于2012年3月，是全球第一家将人工智能应用到主产品的公司。随着大众用户的阅读行为广泛向移动设备迁移，字节跳动获得了高速发展，在行业内已建立起了极高的品牌知名度与影响力。在此过程中，字节跳动帮助内容创造者们更方便的进行内容的分发，助力各类媒体更好地适应移动互联网时代。旗下产品主要有：今日头条、抖音、火山小视频、西瓜视频、悟空问答、懂车帝、Face U、图虫等。此外，2016年字节跳动人工智能实验室成立，依托字节跳动的海量数据，专注于人工智能领域的前沿技术研究。在夯实国内市场的同时，字节跳动也在积极进行国际化部署，目标在全球范围内提供先进的移动互联网信息分发服务，成为全球领先的移动互联网公司。 ',
      pic: 'http://pdx2xd16q.bkt.clouddn.com/bytejump.png',
      title: '字节跳动'

    })
    console.log('aa')
  }
  onMouseEnter4=() => {
    this.setState({
      styles1: 'zanzhushang2',
      styles2: 'zanzhushang4',
      content: '快手是一个记录和分享生活的短视频社交平台，公司自2011年创立，在过去7年时间里，稳步成长为数亿用户的生活分享社区。快手坚持每个人都值得被记录，每个人都有被看到的权利和机会，致力于用技术提升每一个人独特的幸福感。 在快手上，用户可以用短视频和照片记录生活点滴，也可以通过直播与他人实时互动。作为线下真实生活在网络上的全息投射，快手平台汇聚了完整的中国社会生活图景，被誉为流动的清明上河图。在东南亚地区、韩国、俄罗斯、巴西等海外市场，快手也发展迅猛，深受用户欢迎。 ',
      pic: 'http://pdx2xd16q.bkt.clouddn.com/quickhand.png',
      title: '快手'

    })
    console.log('aa')
  }
  onMouseLeave=() => {
    this.setState({
      styles1: 'zanzhushang1',
      styles2: 'zanzhushang3'
    })
  }
  onLeft = () => {
    let showInt = this.state.showInt
    showInt -= 1
    const imgAnim = [
          { translateX: [0, -300], opacity: [1, 0] },
          { translateX: [0, 300], opacity: [1, 0] }
    ]
    if (showInt <= 0) {
      showInt = 0
    }
    this.setState({ showInt, imgAnim })
    this.bannerImg.prev()
    this.bannerText.prev()
  };

  onRight = () => {
    let showInt = this.state.showInt
    const imgAnim = [
          { translateX: [0, 300], opacity: [1, 0] },
          { translateX: [0, -300], opacity: [1, 0] }
    ]
    showInt += 1
    if (showInt > dataArray.length - 1) {
      showInt = dataArray.length - 1
    }
    this.setState({ showInt, imgAnim })
    this.bannerImg.next()
    this.bannerText.next()
  };
  getDuration = (e) => {
    if (e.key === 'map') {
      return 800
    }
    return 1000
  };

  render () {
    const textChildren = dataArray.map((item, i) => {
      return (
        <Element
          key={i}
          leaveChildHide
          autoPlay
          >
          <QueueAnim type='bottom' duration={1000} >
            <h1 key='h1'>{item[i].title}</h1>
            <em key='em' style={{ background: item.background }} />
            <p key='p'>{item[i].content}</p>
            <div style={{position: 'relative', marginTop: '-50px', marginLeft: '700px'}}>
              <div className={`${this.props.className}-map map${i}`} key='map'>
                <img src={item.map} width='100%' />
              </div>
              <div className={`${this.props.className}-pic pic${i}`} key='pic'>
                <img src={item.pic} width='100%' />
              </div>
            </div>
          </QueueAnim>
        </Element>)
    })

    return (
      <div className='AppBottom'>
        <div
          className={`${this.props.className}-wrapper`}
          style={{ background: dataArray[this.state.showInt].background }}
      >
          <div style={{background: '#fff', paddingTop: '1.4em', paddingBottom: '1.0em'}}>
            <Row>
              <Col span={6} > <img width='30%' src='http://pdx2xd16q.bkt.clouddn.com/faceplus.png' onMouseEnter={this.onMouseEnter1} onMouseLeave={this.onMouseLeave} /></Col>
              <Col span={6}> <img width='30%' src='http://pdx2xd16q.bkt.clouddn.com/Tencent_Logo.png' onMouseEnter={this.onMouseEnter2} onMouseLeave={this.onMouseLeave} />                                               </Col>
              <Col span={6}> <img width='37%' src='http://pdx2xd16q.bkt.clouddn.com/bytejump.png' onMouseEnter={this.onMouseEnter3} onMouseLeave={this.onMouseLeave} />                                                 </Col>
              <Col span={6}> <img width='30%' src='http://pdx2xd16q.bkt.clouddn.com/quickhand.png' onMouseEnter={this.onMouseEnter4} onMouseLeave={this.onMouseLeave} />                                               </Col>
            </Row>
          </div>
          <div className={this.state.styles1}>
            <div className={this.props.className}>

              <BannerAnim
                prefixCls={`${this.props.className}-text-wrapper`}
                sync
                autoPlay
                type='across'
                duration={1000}
                arrow={false}
                onChange={this.onChange}
                thumb={false}
                ease='easeInOutExpo'
                ref={(c) => { this.bannerText = c }}
                dragPlay={false}
        >
                {textChildren}
              </BannerAnim>
            </div>
          </div>
          <div className={this.state.styles2}>
            <div style={{width: '1100px', position: 'relative', marginTop: '30px', marginLeft: '40px'}}>
              <strong><p style={{fontSize: '20px'}}>{this.state.title}</p></strong><br />
              <p style={{textAlign: 'left'}}>{this.state.content}</p>
            </div>
            <div style={{width: '180px', height: '100px', position: 'relative', marginTop: '20px', marginLeft: '900px'}}>
              <img src={this.state.pic} alt='' />
            </div>
          </div>
        </div>
      </div>)
  }
}

export default AppBottomNews
