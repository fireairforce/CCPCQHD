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
const card=(
    <Col span={8} >
    <Card title="" bordered={false} style={{ backgroundColor: '#ECECEC'}}> 
        <div style={{wdith:498,height:664,marginLeft:'20px'}}>
        <div >
         <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' alt='hz' style={{width:'498px',height:'356px'}}/>
     </div>
     <div style={{backgroundColor:'rgba(46,133,176,1)',width:498,height:308,fontFamily:'Roboto'}}>
  
        <div style={{fontSize:28,lineHeight:2,color:'rgba(255,255,255,1)',marginLeft:'25px'}}>
        CCPC 2017杭州站<br/>
         浙江理工大学<br/>
         11月4-5日<br/>
        </div>
     </div>
      <div style={{width:450,height:60,color:'rgba(0,59,77,1)',fontSize:16,textAlign:'center',marginTop:'-60px',marginLeft:'22px',
     zIndex:9999,backgroundColor:'rgba(255,255,255,1)'}}>
         <div style={{lineHeight:5}}>
         了解更多
         </div>
     </div>
     </div>
     </Card>
</Col>
)
class AppCompete extends Component{
    render(){

        return(
            <div className={styles.AppCompete}>
                <Tabs defaultActiveKey="1" onChange={callback}  size='large'>
                  <TabPane tab="最新比赛" key="1"  >
                  
            <div style={{ background: '#ECECEC', padding: '30px'}}>
            <Row gutter={16} >
      
      {card }
      {card}
      {card}
    </Row>
  </div>
            
                 </TabPane>
                  
           
                   <TabPane tab="国赛" key="2">Content of Tab Pane 2</TabPane>
              
                   
              
                  
           
                   <TabPane tab="分站赛" key="3">Content of Tab Pane 2</TabPane>
              
                  
           
                   <TabPane tab="其它赛事" key="4">Content of Tab Pane 2</TabPane>
                </Tabs>
            </div>
        )
    }
}
export default AppCompete