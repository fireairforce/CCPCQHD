import React,{Component} from 'react'
import AppHeader from '../AppHeader/AppHeader'
import styles from './index.css'

class NewsSecond extends Component{
    render(){
        return(
            <div className={styles.SecondContainer}>
               <AppHeader/>
               <div className={styles.SecondHeader}>
                   <h1>2017-秦皇岛</h1>
               </div>
               <div className={styles.SecondPic}>
                  <img src="http://pdx2xd16q.bkt.clouddn.com/NEUQ.jpeg" alt="NEUQ" style={{width:'1200px',height:'500px'}}/>
               </div>
               <div className={styles.SecondContent}>
                   <p className={styles.WordPlay}> 
                   2018年中国大学生程序设计竞赛网络选拔赛报名及账号申请通知<br />
                   2018年第四届中国大学生程序设计竞赛将于8月25日举行全国网络选拔赛，届时将产生今年三个分站（吉林站-北华大学、桂林站-桂林电子科技大学、成都站-四川大学）的现场赛参赛名额，现将网络赛报名相关信息发布如下：<br />
                    1、网络赛时间：2018年8月25日12:00–17:00<br />
                    <br />
                    2、网络赛平台：杭电OJ（http://acm.hdu.edu.cn/userloginex.php?cid=812）<br />
                    <br />
                    3、网络赛报名时间：2018年8月10日-2018年8月23日<br />
                    <br />
                    4、网络赛账号申请地址：http://dev.ccpc.io<br />
                    <br />
                    账号申请步骤：<br />
                    <br />
                    教练登录ccpc.io网站（如无账号请先注册教练账号）。<br />
                    在功能区左侧点击【CCPC2018网络赛报名】。然后根据由此操作区提示填写申请网赛账号数量，请谨慎填写，数量一经提交不允许更改。<br />
                    系统直接分配预置账号，点击【查看本校账号】可以看到分配结果。<br />
                    如注册账号时找不到对应学校，请联系王和兴（18630356775）。<br />
                    <br />
                    <br />
                    <br />
                    中国大学生程序设计竞赛组委会
                    <br />
                    2018年8月10日<br />
                   </p>
               </div>
            </div> 
        );
    }
}

export default NewsSecond 