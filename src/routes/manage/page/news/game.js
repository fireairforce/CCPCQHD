import React from 'react'
import {Button,Input,Divider,Table,message,Popconfirm,Icon,Upload,Form} from 'antd'
import styles from './game.less'
import UpLoadPicture from '../../UpLoadPicture'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'


const FormItem=Form.Item
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片不能大于2M');
  }
  return  isLt2M;
}
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
}
const columns = [{
  title: '比赛类型',
  dataIndex: 'type',
  key: 'type',
  render: text => <a href=" ">{text}</a>,
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
  
  message.success('删除成功');
}
const cancel=()=> {
  message.error('取消成功'); 
}


const onChange=()=>{
  console.log(editorProps.contentId)
  editorProps.contentId=2
  console.log(editorProps.contentId)
  console.log(editorProps.initialContent)
 editorProps.initialContent="我是傻逼"
 console.log(editorProps.initialContent)

}
// const handleSubmit= (e)=> {
//   e.preventDefault()
//   // const ctx=this;
//   // this.props.form.validateFields((err, values) => {
//   //   if (err) { console.log(err) } else {
//       // const body = {
       
//       //  ...editorProps.content,
//       //  //...editorProps.initialContent
//       //     // ...ctx.state.pointall,
       
//       // }
//       // console.log(body)
//       // // 处理发送的数据
//       // fetch('https://ccpc.elatis.cn/writeconten/content.competePlace', {
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json'
//       //   },
//       //  // body: JSON.stringify(body)
//       // }).then((res) => {
//       //   return res.json()

//       // }).then((json) => {
//       //   console.log('json',json)
//       //   if (json.code === 1000) {
//       //     message.success('提交成功')
//       //     this.props.history.push('/success')
//       //     this.setState({submitted: true})
//       //   }
//       // }).catch((e) => {
//       //   console.log(e)
//       // })
//     // }
//   // })
// }

@Form.create()
class GameNews extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      iconLoading: false,
     
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  // componentDidMount(){
  // //   fetch('https://ccpc.elatis.cn/writecontent/content.competePlace',{
  // //     method:'POST'
  // //   }) 
  // // .then((res)=>{
  // //   return res.text() // res.text()是一个Promise对象
  // // })
  // // .then((res)=>{
  // //   console.log(res)
  // //   // res是最终的结果
  // // })
  // fetch('https://ccpc.elatis.cn/writecontent/account',
  //  {
  //   method: 'POST',
  //   mode: "no-cors",
  //   // headers: {
  //   //   'Content-Type': 'application/json'
  //   // },
  //   // body: JSON.stringify(body)
  // })
  // .then((res)=>{
  //   return res.text() // 返回一个Promise，可以解析成JSON
  // })
  // .then((res)=>{
  //   console.log(res) // 获取JSON数据
  // })
  // }
 handleSubmit(e){
    e.preventDefault()
    const ctx=this;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) { console.log(err) } else {
       
        const content = {
          ...values,
         ...ctx.state.competeType,
         ...ctx.state.competePlace,
         ...ctx.state.competeTime,
         ...ctx.state.title,
         
            // ...ctx.state.pointall,
        }
      
      content.text=this.editorInstance.getContent()
      content.status='public'
      content.previewImg='https://cdn.elatis.cn/archives/135/59665229_p0.png'
      
       
        // values.abcd=Upload.action
       // this.editorInstance.setContent('hasdhasdas')
        console.log(content)
       //处理发送的数据
        fetch('http://192.168.1.66:8888/admin/write/competeNews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token':'123123'
          },
         body: JSON.stringify(content)
        }).then((res) => {
          return res.json()
  
        }).then((json) => {
          console.log('json',json)
          if (json.code === 0) {
            message.success('提交成功')
            
          }
        }).catch((e) => {
          console.log(e)
        })
    }
  })
  }
  // handleChange = (info) => {
  //   if (info.file.status === 'uploading') {
  //     this.setState({ loading: true });
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, imageUrl => this.setState({
  //       imageUrl,
  //       loading: false,
  //     }));
  //   }
  // }
  enterLoading = () => {
    this.setState({ loading: true });
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }
 
  render () {
   const {getFieldDecorator} = this.props.form
    // const uploadButton = (
    //   <div>
    //     <Icon type={this.state.loading ? 'loading' : 'plus'} />
    //     <div className="ant-upload-text">正文图片</div>
    //   </div>
    // )
    // const imageUrl = this.state.imageUrl;
    return (
      <div>
          <div className={styles.input}>
         <Form >
          <FormItem
                label='比赛类型'
                key='form-content-competeType'
              >
                {getFieldDecorator('competeType')(
                 <Input placeholder="请输入比赛类型"  />
                )}
         </FormItem>
         <FormItem
                label='比赛地点'
              
                key='form-content-competePlace'
              >
                {getFieldDecorator('competePlace')(
                <Input placeholder="请输入比赛地点"  />
                )}
         </FormItem><FormItem
                label='比赛时间'
                // {...formItemLayout}
                key='form-content-competeTime'
              >
                {getFieldDecorator('competeTime')(
                 <Input placeholder="请输入比赛时间"  />
                )}
         </FormItem><FormItem
                label='文章标题'
                // {...formItemLayout}
                key='form-content-title'
              >
                {getFieldDecorator('title')(
                <Input placeholder="请输入文章标题"  />
                )}
         </FormItem>
        
        </Form>
      </div>
          <div className="clearfix">
        
     <UpLoadPicture>
     
     </UpLoadPicture>
      </div>
          <BraftEditor ref={instance => this.editorInstance = instance}{...editorProps}/>  
        <div className={styles.submit}>
          <Button type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
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
