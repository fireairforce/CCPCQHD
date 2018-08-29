import React from 'react'
import ReactDOM from 'react-dom'
import {Button,Input,Divider,Table,message,Popconfirm} from 'antd'
import styles from './game.less'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'


const handleChange = (content) => {
  console.log(content)
}

const handleRawChange = (rawContent) => {
  console.log(rawContent)
}
const editorProps = {
  height: 500,
  contentFormat: 'html',
  initialContent: '<p>请输入内容</p>',
  onChange: handleChange,
  onRawChange: handleRawChange,
  contentId:1
}

const editor=(
  <div className={styles.input}>
        比赛类型：<Input placeholder="请输入比赛类型"  id='type'/>
        比赛地点：<Input placeholder="请输入比赛地点"  id='adress'/>
        比赛时间：<Input placeholder="请输入比赛时间"  id='time'/>
   </div>
)
const columns = [{
  title: '比赛类型',
  dataIndex: 'type',
  key: 'type',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '比赛地点',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '比赛时间',
  dataIndex: 'time',
  key: 'time',
},  {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <Button onClick={onChange}>修改</Button>
      <Divider type="vertical" />
      <Popconfirm title="请确定是否删除" onConfirm={confirm} onCancel={cancel} okText="是" cancelText="否">
        <Button>删除</Button>
  </Popconfirm>
    </span>
  ),
}];

const data = [{
  key: '1',
  type: 'CCPC 秦皇岛站',
  address: '东北大学秦皇岛分校',
  time: '08.08',
 
}, {
  key: '2',
  type: 'CCPC 秦皇岛站',
  address: '东北大学秦皇岛分校',
  time: '08.08',
}, {
  key: '3',
  type: 'CCPC 秦皇岛站',
  address: '东北大学秦皇岛分校',
  time: '08.08',
}];
const confirm = () => {
  data.splice(data.indexOf(this),1)
  message.success('删除成功');
}
const cancel=()=> {
  message.error('取消成功'); 
}
const onChange=()=>{
  console.log(editorProps.contentId)
  editorProps.contentId=2
  console.log(editorProps.contentId)
  // editorProps.setContent('', '我是傻逼')
 //editorProps.editorInstance.setContent('fdfdsfdsfds', 'html')
  //editorProps.setContent='我是傻逼'
 // this.props.history.push('./manage/game')
 console.log(editorProps.initialContent)
 console.log(1)
}
// const handleChange=()=>{
//   this.setState({
    
//   })
// }

class GameNews extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  }
  enterLoading = () => {
    this.setState({ loading: true });
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }
  // handleSubmit (e) {
  //   e.preventDefault()
  //   this.props.form.validateFieldsAndScroll((err, values) => {
  //     if (err) { console.log(err) } else {
  //       const body = {
  //         // ...values,
  //         //  stu_id,
  //         //   ...ctx.state.pointall,
  //         //   ...ctx.state.arrangements,
  //         //   ...ctx.state.environment,
  //         //   ...ctx.state.accommodation,
  //         //   ...ctx.state.point1,
  //         //   ...ctx.state.point2,
  //         //   ...ctx.state.point3,
  //         //   ...ctx.state.point4,
  //         //   ...ctx.state.point5,
  //         //   ...ctx.state.point6,
  //         //   ...ctx.state.eva_tea6,
  //         //   ...ctx.state.eva_tea5,
  //         //   ...ctx.state.eva_tea4,
  //         //   ...ctx.state.eva_tea3,
  //         //   ...ctx.state.eva_tea2,
  //         //   ...ctx.state.eva_tea1,
  //       }
  //       console.log(body)
  //       // 处理发送的数据
  //       fetch('', {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(body)
  //       }).then((res) => {
  //         return res.json()

  //       }).then((json) => {
  //         console.log('json',json)
  //         if (json.code === 1000) {
  //           message.success('提交成功')
  //           this.props.history.push('/success')
  //           this.setState({submitted: true})
  //         }
  //       }).catch((e) => {
  //         console.log(e)
  //       })
  //     }
  //   })
  // }
  render () {
    
   
    return (
      <div>
          {editor}
        
        <BraftEditor ref={instance => this.editorInstance = instance} {...editorProps}/>
        <div className={styles.submit}>
          <Button type="primary" loading={this.state.loading} onClick={onChange}>
           提交
          </Button>
        </div>
        <div className={StyleSheet.table}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>     
    )
  }
}

export default GameNews