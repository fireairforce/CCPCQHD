import React from 'react'
<<<<<<< HEAD
import {Button,Input,Table,message,Form,Modal} from 'antd'
=======
import {Button,Input,Divider,Table,message,Popconfirm,Form} from 'antd'
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
import styles from './game.less'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import UpLoadPicture from '../../UpLoadPicture'
<<<<<<< HEAD
=======

>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24

const FormItem=Form.Item
const EditableContext = React.createContext();
const editorProps = {
  height: 500,
  contentFormat: 'html',
  initialContent: '<p>请输入内容</p>',
<<<<<<< HEAD
=======
  onChange: handleChange,
  onRawChange: handleRawChange,
}
const columns = [{
  title: '文章标题',
  dataIndex: 'title',
  key: 'title',
  dataIndex: 'header',
  key: 'header',
  render: text => <a href="javascript(void0)">{text}</a>,
},{ 
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

>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
}
@Form.create()
class News extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      iconLoading: false,
<<<<<<< HEAD
      allContent:'',
      changeContent:'',
      visible:false
=======
      allContent:''
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
    }
    this.handleSubmit=this.handleSubmit.bind(this)  
  }
  reFresh=(url)=>{fetch(url,
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
})}
  componentDidMount(){
  this.reFresh('https://ccpc.elatis.cn/content/type/focusNews')
  }
<<<<<<< HEAD
=======
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

>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
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
<<<<<<< HEAD
=======
      
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
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
            this.reFresh('https://ccpc.elatis.cn/content/type/focusNews')
          }
        }).catch((e) => {
          console.log(e)
        })
    }
  })
  }
  see(form,cid){
    const body={
      ...form,
      ...cid
    }
    body.cid=cid
    const url='https://ccpc.elatis.cn/content/cid/'+body.cid
    fetch(url,{
      method:'GET'
    }).then((res)=>{
      return res.json()
    }).then(recieve=>{
        this.setState({
         checkContent:recieve.data[0].text,
         visible:true
        })
    })
  }
  confirm=(form, cid)=> {
    const body={
      ...cid,
      ...form
    }
    body.cid=cid
    const url='https://ccpc.elatis.cn/admin/delete/cid/'+body.cid
    console.log(body)
     fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      'token':'IgyaO3US8Ju4rJgxiddE75z8pVW1cq7e'
    },
  }).then((res)=>{
    return res.json()
  }).then((json)=>{
    if(json.code===0){
      message.success('删除成功')
      const newData = [...this.state.allContent];
      const index = newData.findIndex(item => cid === item.cid);//找到该信息在数组中的的索引值
        newData.splice(index,1)
        this.setState({
          allContent:newData
        })
    }else{
      message.error('删除失败')
    }
  }).catch((e)=>{
    console.log(e)
  })
  }
  handleOk = () => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
 
  render () {
   const {getFieldDecorator} = this.props.form
<<<<<<< HEAD
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
    <EditableContext.Consumer>
                    {form => (
                      <Button onClick={()=>this.see(form,record.cid)}>查看</Button>
                    )}
        </EditableContext.Consumer>
      </span>
    ),
  }];
=======
    // const uploadButton = (
    //   <div>
    //     <Icon type={this.state.loading ? 'loading' : 'plus'} />
    //     <div className="ant-upload-text">正文图片</div>
    //   </div>
    // )
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
    return (
      <div>
         <Modal
          title="文章内容"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText='退出'
          okText='确定'
          width='1000px'
        >
        
         <div  dangerouslySetInnerHTML={{__html: this.state.checkContent}}/>
        
        </Modal>
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
<<<<<<< HEAD

=======
           
          
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
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