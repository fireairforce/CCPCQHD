import React from 'react'
import {Button,Input,Divider,Table,message,Popconfirm,Form} from 'antd'
import styles from '../news/game.less'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import UpLoadPicture from '../../UpLoadPicture'

const EditableContext = React.createContext();
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
@Form.create()
class focusNewsModify extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      iconLoading: false,
      allContent:'',
      changeContent:'',
      status:false,
      title:'',
      url:''
    }
    this.handleChangeContent=this.handleChangeContent.bind(this)
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
 handleSubmit(e){
    e.preventDefault()
    const ctx=this;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) { console.log(err) } else {
        const body = {
          ...values,
         ...ctx.state.title,
        }
        body.cid=this.state.changeContent.cid
        console.log(body)
      body.text=this.editorInstance.getContent()
      body.status='public'
      body.previewImg="http://pdx2xd16q.bkt.clouddn.com/zjlg.jpg"
        console.log(body)
        const content={
          cid:body.cid,
          title:body.title,
          text:body.text,
          previewImg:body.previewImg
        }
       //处理发送的数据
        fetch('https://ccpc.elatis.cn/admin/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token':'IgyaO3US8Ju4rJgxiddE75z8pVW1cq7e'
          },
         
         body: JSON.stringify(content)
        }).then((res) => {
          return res.json()
        }).then((json) => {
          console.log('json',json)
          if (json.code === 0) {
            message.success('修改成功')
            this.reFresh('https://ccpc.elatis.cn/content/type/focusNews')
          }
        }).catch((e) => {
          console.log(e)
        })
    }
  })
  this.setState({
    status:false
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
  cancel=()=>{
   message.error('取消成功')
  }
  enterLoading = () => {
    this.setState({ loading: true });
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }
 handleChangeContent=(form,cid)=>{
   const body={
    
     ...form,
     ...cid
   }
  body.cid=cid
   console.log(body)
   const url='https://ccpc.elatis.cn/content/cid/'+body.cid
   fetch(url,{
     method:'GET'
   }).then((res)=>{
     return res.json()
   }).then(recieve=>{
      this.setState({
        changeContent:recieve.data[0],
        title:recieve.data[0].title,
        status:true,
        url:recieve.data[0].previewImg
      },()=>{
        console.log(this.state.title)
        console.log(this.state.changeContent.text)
        this.editorInstance.setContent(this.state.changeContent.text)
      })
     
   })
   
  }

  render () {
   const {getFieldDecorator} = this.props.form
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
        {/* <Button onClick={this.handleChangeContent}>修改</Button> */}
        <EditableContext.Consumer>
              {form => (
                <Button onClick={()=>{this.handleChangeContent(form,record.cid)}}>修改</Button>
              )}
            </EditableContext.Consumer>
        <Divider type="vertical" />
        <EditableContext.Consumer>
              {form => (
                <Popconfirm title="请确定是否删除" onConfirm={()=>{this.confirm(form,record.cid)}} onCancel={this.cancel} okText="是" cancelText="否">
                  <Button>删除</Button>
                </Popconfirm>
              )}
            </EditableContext.Consumer>
      </span>
    ),
  }];
  //const yc=this.state.status===false?{styles.yc1}
    return (
      <div>
        <div className={this.state.status===false?styles.yc1:styles.yc2}>
          <div className={styles.input}>
         <Form >
         <FormItem
                label='文章标题'
                // {...formItemLayout}
                key='form-content-title'
              >
                {getFieldDecorator('title', {
                    initialValue: this.state.title
                  })(
                <Input   />
                )}
         </FormItem>
        </Form>
        </div>
          <div className="clearfix">
             {/* <UpLoadPicture /> */}
           <div>
             <img src={this.state.url} alt='' className={styles.changeimg}/>
           </div>
          
          </div>
          <BraftEditor ref={instance => this.editorInstance = instance}{...editorProps}/>  
        <div className={styles.submit}>
          <Button type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
           保存
          </Button>
        </div>
        </div>
        <div className={StyleSheet.table}>
          <Table columns={columns} dataSource={this.state.allContent} />
        </div>
       
      </div>     
    )
  }
}

export default focusNewsModify
