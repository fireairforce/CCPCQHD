import React,{ Component} from 'react'
import styles from './AppCompete.less'
import { Card, Col, Row ,Tabs} from 'antd';
import 'antd/dist/antd.css'
import createHistory from 'history/createHashHistory';
const TabPane = Tabs.TabPane;
const history=createHistory();
function callback(key) {
  console.log(key);
}
class AppCompete extends Component{
    constructor(){
        super()
        this.state={
            mytext: '',
        }
    }
    getData(){  
         fetch('https://ccpc.elatis.cn/content/type/competeNews',{
         method: 'GET'
         }).then(
             res => res.json()).then(
             receive => {
             this.setState({mytext:receive},() => {
                 console.log('mytext', this.state.mytext)
             });    
           }
          )
     }
     componentDidMount(){
       this.getData();
     }
    render(){
        return(
            <div className={styles.AppCompete}>
                <Tabs defaultActiveKey="1" onChange={callback}  size='large' className={styles.tab}>
                  <TabPane tab="最新比赛" key="1"  > 
                    <div style={{ background: '#ECECEC', padding: '30px',width:'94%',marginLeft:'3%'}}>
                        <Row gutter={16} >
                          <Col span={8} >
                            <Card title="" bordered={false} style={{ backgroundColor: '#ECECEC'}} onClick={()=>{history.push('./news')}}> 
                                <div style={{wdith:498,marginLeft:'-10px'}}  className={styles.float}>
                                <img src={this.state.mytext.data ? this.state.mytext.data[0].previewImg : 'null'} alt='hz' style={{width:'398px',height:'356px'}} className={styles.imgs}/>   
                                    <div className={styles.card}>
                                        <div className={styles.itd}>
                                        {this.state.mytext.data ? this.state.mytext.data[0].competeType : 'null'}<br/>
                                        {this.state.mytext.data ? this.state.mytext.data[0].competePlace : 'null'}<br/>
                                        {this.state.mytext.data ? this.state.mytext.data[0].competeTime : 'null'}<br/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{lineHeight:4}} className={styles.more}>
                                        了解更多
                                    </div>
                            </Card>
                        </Col>

                        <Col span={8} >
                            <Card title="" bordered={false} style={{ backgroundColor: '#ECECEC'}} onClick={()=>{history.push('./news1')}}> 
                                <div style={{wdith:498,marginLeft:'-10px'}}  className={styles.float}>
                                <img src={this.state.mytext.data ? this.state.mytext.data[1].previewImg : 'null'} alt='hz' style={{width:'398px',height:'356px'}} className={styles.imgs}/>   
                                    <div className={styles.card}>
                                        <div className={styles.itd}>
                                        {this.state.mytext.data ? this.state.mytext.data[1].competeType : 'null'}<br/>
                                        {this.state.mytext.data ? this.state.mytext.data[1].competePlace : 'null'}<br/>
                                        {this.state.mytext.data ? this.state.mytext.data[1].competeTime : 'null'}<br/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{lineHeight:4}} className={styles.more}>
                                        了解更多
                                    </div>
                            </Card>
                        </Col>
                        
                   
                        <Col span={8} >
                            <Card title="" bordered={false} style={{ backgroundColor: '#ECECEC'}} onClick={()=>{history.push('./news2')}}> 
                                <div style={{wdith:498,marginLeft:'-10px'}}  className={styles.float}>
                                <img src={this.state.mytext.data ? this.state.mytext.data[2].previewImg : 'null'} alt='hz' style={{width:'398px',height:'356px'}} className={styles.imgs}/>   
                                    <div className={styles.card}>
                                        <div className={styles.itd}>
                                        {this.state.mytext.data ? this.state.mytext.data[2].competeType : 'null'}<br/>
                                        {this.state.mytext.data ? this.state.mytext.data[2].competePlace : 'null'}<br/>
                                        {this.state.mytext.data ? this.state.mytext.data[2].competeTime : 'null'}<br/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{lineHeight:4}} className={styles.more}>
                                        了解更多
                                    </div>
                            </Card>
                        </Col>

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