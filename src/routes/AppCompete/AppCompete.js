import React,{CComponent, Component} from 'react'
import styles from './AppCompete.less'
import { Tabs,Card } from 'antd';
import 'antd/dist/antd.css'
const TabPane = Tabs.TabPane;
const { Meta } = Card;


function callback(key) {
  console.log(key);
}

class AppCompete extends Component{
    render(){
        return(
            <div className={styles.AppCompete}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="最新比赛" key="1" style={{marginLeft:40}} >
                  <ul className={styles.compete}>
              <li>
              <Card
                   hoverable
                    style={{ width: 500 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                   >
                  <Meta
                  title="CCPC 2017 杭州站"
                  description="浙江理工大学"
                  style={{backgroundColor:'blue',zIndex:100}}
                   />
                    <span>了解更多 →</span>
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
              </li>
            </ul>
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