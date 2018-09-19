import React, {Component} from 'react'
import styles from './index.css'
import { Link } from 'react-router-dom'
import createHistory from 'history/createHashHistory'

const history = createHistory()
const AppNews=(props)=>{
  return(
      <div className='news111'>

      <div className='news222'>
        <p className='news333'>焦点新闻</p>
      </div>
      <div className='news444'>
       
          <div className='news4440' >
            <img src='http://pdx2xd16q.bkt.clouddn.com/lt.png' alt='test1' style={{width: '300px', height: '225px'}} />
            <div className='news44410'>
              <p className='news'>2018年CCPC夏季论坛成功举行</p>
            </div>
            <div className='news4441'>
              <p className='title4441'>2018年8月3日-6日，CCPC夏季论坛在河北省
              秦皇岛市召开，来自全国的120多位教练参加研讨
              </p>
              {/* <p className='date4441'>9月28日</p> */}
            </div>
          </div>
        <div className='news4440' >
          <img src='http://pdx2xd16q.bkt.clouddn.com/gzhy.png' alt='test2' style={{width: '300px', height: '225px'}} />
          <div className='news44411'>
            <p className='news'>2018年CCPC工作会议</p>
          </div>
          <div className='news4441'>
            <p className='title4441'>会议明确了CCPC竞赛规则，工作目标，决定了组委会成员及工作小组职责</p>
            {/* <p className='date4441'>9月28日</p> */}
          </div>
        </div>

        <div className='news4440' >
          <img src='http://pdx2xd16q.bkt.clouddn.com/wangluosai.png' alt='test3' style={{width: '300px', height: '225px'}} />
          <div className='news44412'>
            <p className='news'>2018年CCPC全国网络赛</p>
          </div>
          <div className='news4441'>
            <p className='title4441'>2018年8月25日，来自全国的350余所高校的近2400支队伍参加了这次比赛，并产生了3个分站赛的参赛资格</p>
            {/* <p className='date4441'>9月28日</p> */}
          </div>
        </div>

        <div className='news4440' >
          <img src='http://pdx2xd16q.bkt.clouddn.com/zz.png' alt='test3' style={{width: '300px', height: '225px'}} />
          <div className='news44413'>
            <p className='news'>2018年CCPC竞赛赞助工作进展</p>
          </div>
          <div className='news4441'>
            <p className='title4441'>CCPC竞赛得到企业界的高度关注，旷视科技，腾讯，字节跳动，快手等成为CCPC赞助商</p>
            {/* <p className='date4441'>9月28日</p> */}
          </div>
        </div>
      </div>
    </div>
  )
 }

export default AppNews
