import React,{Component}from 'react'
import {Button,Input,Divider,Popconfirm,Table,Modal,message} from 'antd'
import 'antd/dist/antd.css'




const data = [{
  key: '1',
  type: 'CCPC 秦皇岛站',
  news: '东北大学秦皇岛分校',
}, {
  key: '2',
  type: 'CCPC 秦皇岛站',
  news: '东北大学秦皇岛分校',
},{
  key: '3',
  type: 'CCPC 秦皇岛站',
  news: '东北大学秦皇岛分校',
},{
  key: '4',
  type: 'CCPC 秦皇岛站',
  news: '东北大学秦皇岛分校',
},{
  key: '5',
  type: 'CCPC 秦皇岛站',
  news: '东北大学秦皇岛分校',
},{
  key: '6',
  type: 'CCPC 秦皇岛站',
  news: '东北大学秦皇岛分校',
},];
const confirm = () => {
  data.shift()
  message.success('删除成功');
}
const cancel=()=> {
  message.error('取消成功'); 
}
class Menu extends Component{
 state = { visible: false }
  
  render(){
    const showModal = () => {
      this.setState({
        visible: true,
      });
     
    }
    
    const handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
     
     }
    
    const handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    const columns = [{
      title: '比赛类型',
      dataIndex: 'type',
      key: 'type',
      render: text => <a href="javascript(void0)">{text}</a>,
    }, {
      title: '具体信息',
      dataIndex: 'news',
      key: 'news',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={showModal}>修改</Button>
          <Divider type="vertical" />
          <Popconfirm title="请确定是否删除" onConfirm={confirm} onCancel={cancel} okText="是" cancelText="否">
            <Button >删除</Button>
      </Popconfirm>
        </span>
      ),
    }];
    return(
      <div>
        <div>
        比赛类型：<Input placeholder="请输入比赛类型"  id='type'/>
        具体信息：<Input placeholder="请输入具体信息"  id='news'/>
        <Button >提交</Button>
        </div>
        <div>
        <Table columns={columns} dataSource={data} />
        </div>

  <div>
        
        <Modal
          title="信息修改"
          cancelText='取消'
          okText='确定'
         
          visible={this.state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
           <div>
        比赛类型：<Input placeholder="请输入比赛类型"  id='type'/>
        具体信息：<Input placeholder="请输入具体信息"  id='news'/>
        
       
        </div>
       
        </Modal>
      </div>
       
      </div>
    )
  }
}
export default Menu