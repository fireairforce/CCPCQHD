import React from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import {Button, Divider, Steps, Tabs} from 'antd'
import './less/Content7.less'
import 'antd/dist/antd.css'


const TabPane = Tabs.TabPane
const Step = Steps.Step
class Content extends React.Component {
  constructor () {
    super()
    this.state = {
      divStyles: 'divStyle2',
      divStyle: 'divStyle3'

    }
  }
  static defaultProps = {
    className: 'content2'
  };
  onMouseEnter =() => {
    this.setState({
      divStyles: 'divStyle1',
      divStyle: 'divStyle3'

    })
  }
  onMouseLeave =() => {
    this.setState({
      divStyles: 'divStyle2',
      divStyle: 'divStyles4'
    })
  }
  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render () {
    const props = { ...this.props }
    delete props.isMobile
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' }
    const blockArray = [
      { icon: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png', title: '企业资源管理', content: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png', title: '云安全', content: '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: '云监控', content: '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: '移动', content: '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png', title: '分布式中间件', content: '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png', title: '大数据', content: '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。' }
    ]
    const children = blockArray.map((item, i) => {
      const id = `block${i}`
      const delay = this.getDelay(i)
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay }
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100 }
      return (<TweenOne
        component='li'
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className='img'
          key='img'
        >
          <img src={item.icon} width='100%' />
        </TweenOne>
        <div className='text'>
          <TweenOne key='h1' animation={childrenAnim} component='h1'>
            {item.title}
          </TweenOne>
          <TweenOne key='p' animation={{ ...childrenAnim, delay: delay + 200 }} component='p'>
            {item.content}
          </TweenOne>
        </div>
      </TweenOne>)
    })
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key='h1'
            animation={oneAnim}
            component='h1'
            id={`${props.id}-title`}
            reverseDelay={100}
          >
             信息站
          </TweenOne>
          <TweenOne
            key='p'
            animation={{ ...oneAnim, delay: 100 }}
            component='p'
            id={`${props.id}-titleContent`}
          >
            下面是当前时段需要完成的流程任务
          </TweenOne>
          <QueueAnim
            key='ul'
            type='bottom'
            className={`${props.className}-contentWrapper`}
            id={`${props.id}-contentWrapper`}
          >
            {/* <Steps style={{width: 1000}} current={1}>
              <Step >
                <div>
                  <img src='' />
                  <p>cdfsdfsdfds</p>
                  hhhdfhdfhdfhdh
                </div>
              </Step>
              <Step title='In Progress' description='This is a description.' />
              <Step title='Waiting' description='This is a description.' />
            </Steps>, */}
            {/* <ul className='uls'>
              {/* /!* {children} *!/ */}
            {/* <div className={this.state.divStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
              <li className='allThing'>
                <Divider />
                <img src='http://pdy48vy9a.bkt.clouddn.com/%E5%88%86%E9%85%8D.png' style={{width: '60px', height: '60px'}} />
                <p className='abc' >1.名额分配</p>
                <Button type='primary' size='large'>了解更多</Button>
              </li>
              </div> */}
            {/* <div className={this.state.divStyles}>
                sadasdsadasdasdasdasdasgdfggggsssssssssssssssssssssssssssssssssdgdfgdfgdfgdfgdfgdfgdfgfgdfg
                </div>
              <li className='allThing'>
                <Divider />
                <img src='http://pdy48vy9a.bkt.clouddn.com/%E6%97%A5%E7%A8%8B%E5%AE%89%E6%8E%92.png' style={{width: '60px', height: '60px'}} />
                <p className='abc'>2.住宿安排</p>
                <Button type='primary' size='large'>了解更多</Button>

              </li> */}
            {/* <li className='allThing'>
                <Divider />
                <img src='http://pdy48vy9a.bkt.clouddn.com/%E4%BA%A4%E9%80%9A%E6%8C%87%E5%8D%97.png' style={{width: '60px', height: '60px'}} />
                <p className='abc'>3.交通指南</p>
                <Button type='primary' size='large'>了解更多</Button>

              </li>
            </ul>
            <Divider>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Divider>   */}
            <Tabs 
            defaultActiveKey='1'
            tabPosition='top'
             >
              <TabPane tab='9月26日' key='1'>
              <strong>时间:</strong>&nbsp;&nbsp;09:00-18:00<br/>
              <strong>内容：</strong>&nbsp;&nbsp;报道<br />
              <strong>地点:</strong>&nbsp;&nbsp;入住酒店大厅
              </TabPane>
              <TabPane tab='9月27日' key='2'>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;08:00-12:30&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;报道&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;学校体育馆
              </p>
              <br/>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;09:00&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;乘车前往学校&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;各住宿酒店
              </p>
              <br/>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;14:00-14:30&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;开幕式&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;体育馆
              </p>
              <br/>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;15:00-17:00&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;热身赛&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;体育馆
              </p>
              <br/>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;15:00-16:00&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;教练会&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;科技楼9024
              </p>
              <br/>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;17:30-18:30&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;乘车返回酒店&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;体育馆&nbsp; 科技楼
              </p>
              </TabPane>
              <TabPane tab='9月28日' key='3'>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;07:30&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;乘车前往学校&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;各住宿酒店
              </p>
              <br/>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;09:00-14:00&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;正式比赛&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;体育馆
              </p>
              <br/>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;11:30-12:30&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;教练午餐&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;教职工食堂
              </p>
              <br/>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;15:00-17:30&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;闭幕式暨颁奖大会&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;体育馆
              </p>
              <br/>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;17:30-18:30&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;晚餐&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;学生食堂
              </p>
              <br/>
              <p>
                <strong>时间：</strong>&nbsp;&nbsp;18:30&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>内容：</strong>&nbsp;&nbsp;乘车返回酒店&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>地点:</strong>&nbsp;&nbsp;体育馆
              </p>
              </TabPane>
            </Tabs>
          </QueueAnim>
        </OverPack>
      </div>
    )
  }
}

export default Content
