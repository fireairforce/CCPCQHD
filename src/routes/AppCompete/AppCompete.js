import React,{ Component} from 'react'
import styles from './AppCompete.less'
import { Card, Col, Row ,Tabs} from 'antd';
import 'antd/dist/antd.css'
const TabPane = Tabs.TabPane;
// const { Meta } = Card;


function callback(key) {
  console.log(key);
}

class AppCompete extends Component{
    render(){
        return(
            <div className={styles.AppCompete}>
                <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter='500px' size='large'>
                  <TabPane tab="最新比赛" key="1"  >
                  {/* <ul className={styles.compete} >
              <li> */}
              {/* <Card */}
                {/* //    hoverable
                //     style={{ width: 500 }}
                //     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                   > */}
                  {/* <Meta
                  title="CCPC 2017 杭州站"
                  description="浙江理工大学"
                  style={{backgroundColor:'blue',zIndex:100}}
                   /> */}
                    {/* <span>了解更多 →</span> */}
                    {/* <div>
                       <div className={styles.hangzhou}>
                           <div >
                            <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' alt='bj' className={styles.hz}/>
                           </div>
                           <div>
                           东北大学<br/>
                           了解一下<br/>
                           神神叨叨<br/>
                           </div>
                          <div>了解更多</div>
                       </div>
                       <div></div>
                       <div></div> 
                    </div> */}
                 {/* </Card> */}
                
              {/* </li> */}
              {/* <li>
              <Card
                  hoverable
                   style={{ width: 500 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                 >
                 <Meta
                 title="Europe Street beat"
                 description="www.instagram.com"
                 />
                 </Card>
              </li>
              <li>
              <Card
                  hoverable
                   style={{ width: 500 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                 >
                 <Meta
                 title="Europe Street beat"
                 description="www.instagram.com"
                 />
                 </Card>
              </li> */}
            {/* </ul> */}
            <div style={{ background: '#ECECEC', padding: '30px'}}>
    <Row gutter={16}>
    <Col span={8}>
        <Card title="" bordered={false}> 
        <div style={{wdith:498,height:664}}>
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
      <Col span={8}>
        <Card title="" bordered={false}> 
        <div style={{wdith:498,height:664}}>
            <div >
                <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' alt='hz' style={{width:'498px',height:'356px'}}/>
            </div>
            <div style={{backgroundColor:'rgba(46,133,176,1)',width:498,height:308,fontFamily:'Roboto'}}>
         
               <div style={{fontSize:28,lineHeight:2,color:'rgba(255,255,255,1)',marginLeft:'25px'}}>
               CCPC &nbsp; 2017 &nbsp; &nbsp;总决赛<br/>
                哈尔滨工业大学<br/>
                12月1-3日<br/>
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
      <Col span={8}>
        <Card title="" bordered={false}> 
        <div style={{wdith:498,height:664}}>
            <div >
                <img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' alt='hz' style={{width:'498px',height:'356px'}}/>
            </div>
            <div style={{backgroundColor:'rgba(46,133,176,1)',width:498,height:308,fontFamily:'Roboto'}}>
         
               <div style={{fontSize:28,lineHeight:2,color:'rgba(255,255,255,1)',marginLeft:'25px'}}>
               CCPC&nbsp; 2018 &nbsp;总决赛
               
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