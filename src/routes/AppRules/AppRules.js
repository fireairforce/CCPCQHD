import React,{Component} from 'react'
import styles from './index.css'

class AppRules extends Component{
    render(){
       return(
             <div className={styles.rules111}>
                    <div className={styles.rules222}>
                    <p className={styles.rules333}>竞赛规则</p>
                    </div>
                    <div className={styles.rules444}> 
                    <p className={styles.rules555}><a href=" ">了解更多</a></p>
                    <img src="http://pdx2xd16q.bkt.clouddn.com/arraw.png" alt="arrow" style={{width:'25px',height:'25px',position:'absolute',marginTop:'-75px',marginLeft:'200px'}}/>
                    </div>
             </div>    
       )
    } 
}
export default AppRules