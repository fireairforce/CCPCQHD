import React,{ Component} from 'react'
import styles from './AppCompete.less'
import { Card, Col, Row ,Tabs} from 'antd';
import 'antd/dist/antd.css'
const TabPane = Tabs.TabPane;
// const { Meta } = Card;

// const TabPane = Tabs.TabPane;
// const { Meta } = Card;

function callback(key) {
  console.log(key);
}
const card=[(
    <Col span={8} >
    <Card title="" bordered={false} style={{ backgroundColor: '#ECECEC'}} > 
        <div style={{wdith:498,marginLeft:'-10px'}}  className={styles.float}>
           <img src="http://pdx2xd16q.bkt.clouddn.com/hgd.png" alt='hz' style={{width:'398px',height:'356px'}} className={styles.imgs}/>   
            <div className={styles.card}>
                <div className={styles.itd}>
                  CCPC 2017杭州站<br/>
                  浙江理工大学<br/>
                  11月4-5日<br/>
                </div>
            </div>
        </div>
        <div style={{lineHeight:4}} className={styles.more}>
                了解更多
            </div>
     </Card>
</Col>
)]
class AppCompete extends Component{
    render(){

        return(
            <div className={styles.AppCompete}>
                <Tabs defaultActiveKey="1" onChange={callback}  size='large' className={styles.tab}>
                  <TabPane tab="最新比赛" key="1"  >
                  
            <div style={{ background: '#ECECEC', padding: '30px',width:'94%',marginLeft:'3%'}}>
            <Row gutter={16} >
      
      {card }
      {card}
      {card}
    </Row>
  </div>
            
                 </TabPane>
                   <TabPane tab="国赛" key="2" ></TabPane>
                   <TabPane tab="分站赛" key="3" ></TabPane>
                   <TabPane tab="其它赛事" key="4" ></TabPane>
                </Tabs>
            </div>
        )
    }
}
export default AppCompete