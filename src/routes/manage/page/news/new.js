import React from 'react'
import {Button,Input,Divider,Table,message,Popconfirm,Form} from 'antd'
import styles from './game.less'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import UpLoadPicture from '../../UpLoadPicture'


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
  dataIndex: 'title',
  key: 'title',
  render: text => <a href=" ">{text}</a>,
},   {
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
const confirm = () => {
  
  message.success('删除成功');
}
const cancel=()=> {
  message.error('取消成功'); 
}
const onChange=()=>{
//  
console.log(1)

}
@Form.create()
class News extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      iconLoading: false,
      allContent:''
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  componentDidMount(){
  fetch('https://ccpc.elatis.cn/content/type/focusNews',
   {
    method: 'GET',
  })
  .then((res)=>{
    return res.json() // 返回一个Promise，可以解析成JSON
  })
  .then(recieve=>{
    this.setState({
      allContent:recieve.data
    },()=>{
      console.log(this.state.allContent)
    })
  }
    
)
  }

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
      body.previewImg="http://pdy48vy9a.bkt.clouddn.com/13933.jpg"
      
        console.log(body)
       //处理发送的数据
        fetch('https://ccpc.elatis.cn/admin/write/focusNews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token':'IgyaO3US8Ju4rJgxiddE75z8pVW1cq7e'
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
    // const uploadButton = (
    //   <div>
    //     <Icon type={this.state.loading ? 'loading' : 'plus'} />
    //     <div className="ant-upload-text">正文图片</div>
    //   </div>
    // )
    return (
      <div>
          <div className={styles.input}>
         <Form >
         <FormItem
                label='文章标题'
                // {...formItemLayout}
                key='form-content-title'
              >
                {getFieldDecorator('title',{
                rules: [{
                    required:true
                  }]})(
                <Input placeholder="请输入文章标题"  />
                )}
         </FormItem>
        </Form>
      </div>
          <div className="clearfix">
             <UpLoadPicture />
           
          
          </div>
          <BraftEditor ref={instance => this.editorInstance = instance}{...editorProps}/>  
        <div className={styles.submit}>
          <Button type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
           提交
          </Button>
        </div>
        <div className={StyleSheet.table}>
          <Table columns={columns} dataSource={this.state.allContent} />
        </div>
       
      </div>     
    )
  }
}

export default News