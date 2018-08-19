import React,{Component} from 'react'
import styles from './index.css'

class AppProcess extends Component{
   render(){
       return(
           <div className={styles.process111}>
              <div className={styles.process222}>
              <p className={styles.process333}>流程规范</p>
              </div>
              <hr className={styles.line111} />
              <div className={styles.Icon111}>
                     <img src={require("../../images/设置-1.png")} alt="setti" style={{width:'100px',height:'80px'}}/>
                     <img src={require("../../images/表单.png")} alt='biaodan'style={{width:'100px',height:'80px'}}/>
                     <img src={require("../../images/师资队伍.png")} alt='team'style={{width:'100px',height:'80px'}}/>
                     <img src={require("../../images/工厂.png")} alt='factory' style={{width:'100px',height:'80px'}}/>
                     <img src={require("../../images/灯泡.png")} alt='light' style={{width:'100px',height:'80px'}}/>
                     <img src={require("../../images/409折线图.png")} alt='pict1'style={{width:'100px',height:'80px'}}/>
                     <img src={require("../../images/折线图.png")} alt='pict'style={{width:'100px',height:'80px'}}/>
                     <img src={require("../../images/人.png")} alt='person'style={{width:'100px',height:'80px'}}/>
                     <img src={require("../../images/汽车.png")} alt='car'style={{width:'100px',height:'80px'}}/>
              </div>
           </div>
       )
   }
}
export default AppProcess
