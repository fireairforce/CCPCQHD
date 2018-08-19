import React,{Component} from 'react'
import styles from './index.css'

class AppNews extends Component{
    render(){
        return(
            <div className={styles.news111}>
                 <div className={styles.news222}>
                     <p className={styles.news333}>焦点新闻</p> 
                 </div>
                 <div className={styles.news444}>
                        <div className={styles.news4440}>
                            <img src={require("../../images/test.jpg")} alt='test1' style={{width:'384px',height:'225px'}}/>
                            <div className={styles.news44410}>
                              <p className={styles.news}>To be or not to be,that is a question.</p>
                            </div>
                            <div className={styles.news4441}>
                              <p>CHYNB</p>
                            </div>
                        </div>
                        <div className={styles.news4440}>
                             <img src={require("../../images/test.jpg")} alt='test2' style={{width:'384px',height:'225px'}}/>
                             <div className={styles.news44411}>
                             <p className={styles.news}>To be or not to be,that is a question.</p>
                            </div>
                            <div className={styles.news4441}>
                              <p>CHYNB</p>
                            </div>
                        </div>     
                        <div className={styles.news4440}>
                             <img src={require("../../images/test.jpg")} alt='test3' style={{width:'384px',height:'225px'}}/>
                             <div className={styles.news44412}>
                             <p className={styles.news}>To be or not to be,that is a question.</p>
                            </div>
                            <div className={styles.news4441}>
                            <p>CHYNB</p>
                            </div>
                        </div>
                        <div className={styles.news4440}>
                             <img src={require("../../images/test.jpg")} alt='test4' style={{width:'384px',height:'225px'}}/>
                             <div className={styles.news44413}>
                             <p className={styles.news}>To be or not to be,that is a question.</p>
                            </div>
                            <div className={styles.news4441}>
                            <p>CHYNB</p>
                            </div>
                        </div>
                 </div>
            </div>
        )
    }
}

export default AppNews