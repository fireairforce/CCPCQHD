import React,{Component} from 'react'
import styles from './index.css'
import createHistory from 'history/createHashHistory';

const history=createHistory();
const NewsOne=(
    <div className={styles.news4440}  onClick={()=>{history.push('./focus')}}>
        <img src="http://pdx2xd16q.bkt.clouddn.com/test.jpg" alt='test1' style={{width:'300px',height:'225px'}}/>
        <div className={styles.news44410}>
        <p className={styles.news}>To be or not to be,that is a question.</p>
        </div>
        <div className={styles.news4441}>
        <p>CHYNB</p>
        </div>
    </div>
)
const NewsTwo=(
 <div className={styles.news4440} onClick={()=>{history.push('./focus1')}}>
    <img src="http://pdx2xd16q.bkt.clouddn.com/test.jpg" alt='test2' style={{width:'300px',height:'225px'}}/>
    <div className={styles.news44411}>
        <p className={styles.news}>To be or not to be,that is a question.</p>
    </div>
    <div className={styles.news4441}>
        <p>CHYNB</p>
    </div>
 </div> 
)
const NewsThree=(
<div className={styles.news4440} onClick={()=>{history.push('./focus2')}}>
    <img src="http://pdx2xd16q.bkt.clouddn.com/test.jpg" alt='test3' style={{width:'300px',height:'225px'}}/>
    <div className={styles.news44412}>
        <p className={styles.news}>To be or not to be,that is a question.</p>
    </div>
    <div className={styles.news4441}>
        <p>CHYNB</p>
    </div>
</div>
)
const NewsFour=(
<div className={styles.news4440} onClick={()=>{history.push('./focus3')}}>
    <img src="http://pdx2xd16q.bkt.clouddn.com/test.jpg" alt='test4' style={{width:'300px',height:'225px'}}/>
    <div className={styles.news44413}>
       <p className={styles.news}>To be or not to be,that is a question.</p>
    </div>
    <div className={styles.news4441}>
       <p>CHYNB</p>
   </div>
</div>
)
class AppNews extends Component{
    render(){
        return(
            <div className={styles.news111}>
                 <div className={styles.news222}>
                     <p className={styles.news333}>焦点新闻</p> 
                 </div>
                 <div className={styles.news444}>
                     {NewsOne}
                     {NewsTwo}
                     {NewsThree}
                     {NewsFour}
                 </div>
            </div>
        )
    }
}
export default AppNews