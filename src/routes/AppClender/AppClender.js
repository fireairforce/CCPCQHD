import React,{Component} from 'react'
import styles from './Appclender.less'
import 'antd/dist/antd.css'
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}
class AppClender extends Component{
    render(){
        return(
          <div className={styles.Calender000}>
              <p className={styles.words111}>比赛日历</p>
              <div className={styles.Calender111}>
                 <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </div>
              <div className={styles.Calender222}>
              <p>2017年10月比赛</p>
              </div>
              <div className={styles.Calender333}>
                 <ul>
                   <li></li>
                   <li></li> 
                 </ul>
              </div>
          </div>      
        );
    }
}


export default AppClender
