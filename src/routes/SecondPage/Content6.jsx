import React, {Component} from 'react'
import './less/content6.less'

class School extends Component {
  render () {
    return (
      <div className='contain' >
        <div className='container'>
          <div className='c-content-feature-8 c-opt-1'>
            <ul className='c-grid'>
              <li className='c-grids'>
                <div className='c-card c-bg-opacity-1'>
                  <h3 className='c-font-40 c-font-white c-font-bold c-font-uppercase'>场地<br />规模</h3>
                  <p className='c-font-white c-font-18'>体育馆可以容纳300支队伍，实验大楼可以容纳360支队伍，食堂可以容纳1600人就餐</p>
                </div>
              </li>
              <li className='c-grids'>
                <div className='c-card c-bg-opacity-1'>
                  <h3 className='c-font-40 c-font-white c-font-bold c-font-uppercase'>比赛<br />设备</h3>
                  <p className='c-font-white c-font-18'>竞赛专用PC计算机400台，相同型号，相同配置，相同外设，购买日期均为今年。</p>
                </div>
              </li>
            </ul>
            <ul className='c-grid'>
              <li className='c-grids'>
                <div className='c-card  c-bg-opacity-1'>
                  <h3 className='c-font-40 c-font-white c-font-bold c-font-uppercase'>技术<br />实力</h3>
                  <p className='c-font-white c-font-18'>拥有专业的试题团队，裁判计算机15台，支持高速代码打印，自主研发管理软件。</p>
                </div>
              </li>
              <li className='c-grids'>
                <div className='c-card c-img c-bg-img-center' >
                  <h3 className='c-font-white c-font-50 c-font-center'>&nbsp;</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default School
