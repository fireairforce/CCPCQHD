import React ,{Component} from 'react';
import { Link } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import styles from './index.css';

const history = createHistory()

const AppCompete=(props)=>{
  return(
    <div className='AppCompete'>

    <div className='AppCompete-title'>
      <p className='AppCompete-information'>比赛信息</p>
    </div>

    <div className='AppCompete-content'>
        <div className='AppCompete-zero' >
          <img src='http://pdx2xd16q.bkt.clouddn.com/%E6%9D%AD%E7%94%B5hdu.png' alt='test1' style={{width: '350px', height: '225px'}} />
          <div className='AppCompete-one1'>
            <p>CCPC2018 女生专场</p>
            <p>杭州电子科技大学</p>
            <p>05.26-05.27</p>
          </div>
        </div>
      
      <div className='AppCompete-zero' >
        <img src='http://pdx2xd16q.bkt.clouddn.com/%E7%BD%91%E7%BB%9C%E8%B5%9Bwls.png' alt='test2' style={{width: '350px', height: '225px'}} />
     
        <div className='AppCompete-one2'>
           <p>CCPC2018 网络选拔赛</p>
           <p>杭电OJ</p>
          <p>8月25日</p>
        </div>
      </div>

      <div className='AppCompete-zero' >
        <img src='http://pdx2xd16q.bkt.clouddn.com/%E5%8C%97%E5%8D%8Ebeihua.png' alt='test3' style={{width: '350px', height: '225px'}} />
     
        <div className='AppCompete-one3'>
          <p>CCPC2018 吉林站</p>
          <p>北华大学</p>
          <p>09.21-09.22</p>
        </div>
      </div>
      </div>

      <div className='AppCompete-content-one'>

      <Link to='./game'>
      <div className='AppCompete-zero' >
        <img src='http://pdx2xd16q.bkt.clouddn.com/%E4%B8%9C%E7%A7%A6neuq.png' alt='test3' style={{width: '350px', height: '225px'}} />
        <div className='AppCompete-one4'>
          <p>CCPC2018 秦皇岛站</p>
          <p>东北大学秦皇岛分校</p>
          <p>09.27-09.28</p>
        </div>
      </div>
      </Link>

     <div className='AppCompete-zero' >
        <img src='http://pdx2xd16q.bkt.clouddn.com/%E6%A1%82%E6%9E%97%E7%94%B5%E5%AD%90gldz.png' alt='test3' style={{width: '350px', height: '225px'}} />
     
        <div className='AppCompete-one5'>
          <p>CCPC2018 桂林站</p>
          <p>桂林电子科技大学</p>
          <p>10.27-10.28 </p>
        </div>
      </div>

      <div className='AppCompete-zero' >
        <img src='http://pdx2xd16q.bkt.clouddn.com/%E5%93%88%E5%B7%A5%E5%A4%A7%E6%B7%B1%E5%9C%B3%20hgd.png' alt='test3' style={{width: '350px', height: '225px'}} />
        <div className='AppCompete-one6'>
          <p>CCPC2018 总决赛</p>
          <p>哈尔滨工业大学（深圳）</p>
          <p>待定</p>
        </div>
      </div>
   </div>   
  </div>
)
}

export default AppCompete;