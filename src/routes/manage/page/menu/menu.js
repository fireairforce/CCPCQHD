import React,{Component}from 'react'
import {Button,Input,Divider,Popconfirm,Table} from 'antd'
import 'antd/dist/antd.css'

const columns = [{
  title: '比赛类型',
  dataIndex: 'type',
  key: 'type',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '具体信息',
  dataIndex: 'news',
  key: 'news',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <Button >修改</Button>
      <Divider type="vertical" />
      <Popconfirm title="请确定是否删除"  okText="是" cancelText="否">
        <Button>删除</Button>
  </Popconfirm>
    </span>
  ),
}];
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
class Menu extends Component{
  render(){
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
      </div>
    )
  }
}
export default Menu