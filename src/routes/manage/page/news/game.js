import React from 'react'
<<<<<<< HEAD
import {Button,Input,Table,message,Form,Modal} from 'antd'
=======
import {Button,Input,Divider,Table,message,Popconfirm,Form} from 'antd'
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
import styles from './game.less'
import UpLoadPicture from '../../UpLoadPicture'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

const FormItem=Form.Item
<<<<<<< HEAD
const EditableContext = React.createContext();
=======
const handleChange = (content) => {
  console.log(content)
}
const handleRawChange = (rawContent) => {
  console.log(rawContent)
}
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
const editorProps = {
  height: 500,
  contentFormat: 'html',
  initialContent: '<p>请输入内容</p>',
}
<<<<<<< HEAD
=======
const confirm = () => { 
  message.success('删除成功');
}
const cancel=()=> {
  message.error('取消成功'); 
}
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
@Form.create()
class GameNews extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      iconLoading: false,
      allContent:'',
<<<<<<< HEAD
      hhhh:'' ,
      checkContent:'',
      visible:false
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    }
   reFresh=()=>{fetch('https://ccpc.elatis.cn/content/type/competeNews',{
      method: 'GET'
      }).then(
          res => res.json()
         ).then(
          receive => {
          this.setState({
            allContent:receive,
            hhhh:receive.data
           },() => {
            console.log('a',this.state.hhhh)
          }); 
        }
       )}    
  componentDidMount(){
    this.reFresh()    
=======
      hhhh:''
     
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChangeContent=this.handleChangeContent.bind(this)
    }
  componentDidMount(){
    fetch('https://ccpc.elatis.cn/content/type/competeNews',{
         method: 'GET'
         }).then(
             res => res.json()
            ).then(
             receive => {
             this.setState({
               allContent:receive,
               hhhh:receive.data
              },() => {
               console.log('a',this.state.hhhh)
             }); 
           }
          )
          
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
  }
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
        }
      content.text=this.editorInstance.getContent()
      content.status='public'
      content.previewImg='http://pdx2xd16q.bkt.clouddn.com/zjlg.jpg'
        console.log(content)
       //处理发送的数据
        fetch('https://ccpc.elatis.cn/admin/write/competeNews', {
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
            message.success('提交成功')
            this.reFresh()
            
          }
        }).catch((e) => {
          console.log(e)
        })
    }
  })
  }
<<<<<<< HEAD
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
  handleOk = () => {
    this.setState({
      visible: false,
    });
=======
  handleChangeContent=()=>{
    // this.editorInstance.setContent(receive.data[4].text)
    fetch('https://ccpc.elatis.cn/content/cid/11',{
         method: 'GET'
         }).then(
             res => res.json()).then(
             receive => {
             this.setState({allContent:receive},() => {
                 console.log('mytext', this.state.allContent.data[0])
             }); 
             console.log(receive.data[0].title);      
             this.editorInstance.setContent(receive.data[0].text)
           }
          )
    
    
    }
  enterLoading = () => {
    this.setState({ loading: true });
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
<<<<<<< HEAD
  render () {
=======

  render () {
  // console.log(this.state.allContent.length)
   //const data=this.state.hhhh
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
    const columns = [{
      title: '比赛类型',
      dataIndex: 'competeType',
      key: 'competeType',
      render: text => <a href=" ">{text}</a>,
    }, {
      title: '比赛地点',
      dataIndex: 'competePlace',
      key: 'competePlace',
    }, {
      title: '比赛时间',
      dataIndex: 'competeTime',
      key: 'competeTime',
    },  {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
<<<<<<< HEAD
       <EditableContext.Consumer>
                    {form => (
                      <Button onClick={()=>this.see(form,record.cid)}>查看</Button>
                    )}
        </EditableContext.Consumer>
         
=======
          <Button onClick={this.handleChangeContent}>修改</Button>
          <Divider type="vertical" />
          <Popconfirm title="请确定是否删除" onConfirm={confirm} onCancel={cancel} okText="是" cancelText="否">
            <Button>删除</Button>
      </Popconfirm>
>>>>>>> ca94ed4894ac28f11a28afbf90a049af383b9f24
        </span>
      ),
    }];
   const {getFieldDecorator} = this.props.form
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
                label='比赛类型'
                key='form-content-competeType'
              >
                {getFieldDecorator('competeType',{
                rules: [{
                    required:true
                  }]})(
                 <Input placeholder="请输入比赛类型"  />
                )}
         </FormItem>
         <FormItem
                label='比赛地点'
                key='form-content-competePlace'
              >
                {getFieldDecorator('competePlace',{
                rules: [{
                    required:true
                  }]})(
                <Input placeholder="请输入比赛地点"  />
                )}
         </FormItem><FormItem
                label='比赛时间'
                key='form-content-competeTime'
              >
                {getFieldDecorator('competeTime',{
                rules: [{
                    required:true
                  }]})(
                 <Input placeholder="请输入比赛时间"  />
                )}
         </FormItem><FormItem
                label='文章标题'
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
        
          <Table columns={columns} dataSource={this.state.hhhh} />
        </div>
    
      </div>     
    )
  }
}

export default GameNews
