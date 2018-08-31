import React from 'react'
<<<<<<< HEAD
import {Button,Input,Divider,Table,message,Popconfirm,Icon,Upload} from 'antd'
=======
import {Button,Input,Divider,Table,message,Popconfirm,Icon,Upload,Form} from 'antd'
>>>>>>> 85c73f279f9f0bfbcc0d5a229677455dde25d0e1
import styles from './game.less'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import Pictures from '../slider/index'


const FormItem=Form.Item
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
  title: '文章标题',
  dataIndex: 'header',
  key: 'header',
<<<<<<< HEAD
  render: text => <a href="javascript(void0)">{text}</a>,
}, {
=======
  render: text => <a href=" ">{text}</a>,
},   {
>>>>>>> 85c73f279f9f0bfbcc0d5a229677455dde25d0e1
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
  header:'吴东第一'
 
}, {
  key: '2',
  header:'吴东第一'
}, {
  key: '3',
  header:'吴东第一'
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
@Form.create()
class News extends React.Component {
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
       
        const body = {
          ...values,
         ...ctx.state.title,
        }
      body.text=this.editorInstance.getContent()
      body.status='public'
      body.previewImg='https://cdn.elatis.cn/archives/135/59665229_p0.png'
        console.log(body)
       //处理发送的数据
        fetch('http://192.168.1.66:8888/admin/write/focusNews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token':'123123'
          },
         
         body: JSON.stringify(body)
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

  enterLoading = () => {
    this.setState({ loading: true });
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }
 
  render () {
   const {getFieldDecorator} = this.props.form
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">正文图片</div>
      </div>
    )
    return (
      <div>
          <div className={styles.input}>
         <Form >
         <FormItem
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
             <Pictures />
          </div>
          <BraftEditor ref={instance => this.editorInstance = instance}{...editorProps}/>  }
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

export default News