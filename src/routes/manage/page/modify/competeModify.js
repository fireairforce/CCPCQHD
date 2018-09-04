import React from 'react'
import {Button,Input,Divider,Table,message,Popconfirm,Form} from 'antd'
import styles from '../news/game.less'
import BraftEditor from 'braft-editor'
import UpLoadPicture from '../../UpLoadPicture'
import 'braft-editor/dist/braft.css'


const FormItem=Form.Item
const EditableContext = React.createContext();
const editorProps = {
  height: 500,
  contentFormat: 'html',
  initialContent: '<p>请输入内容</p>',
}
@Form.create()
class competeModify extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      iconLoading: false,
      status:false,
      allContent:'',
      hhhh:'' ,
      competePlace:'',
      competeTime:'',
      competeType:'',
      cid:'',
      url:''
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChangeContent=this.handleChangeContent.bind(this)
    }
   reFresh=()=>{fetch('https://ccpc.elatis.cn/content/type/competeNews',{
      method: 'GET'
      }).then(
          (res) => res.json()
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
      content.cid=this.state.hhhh.cid
       console.log(this.state.hhhh)
        const body={
          competeType:content.competeType,
          competePlace:content.competePlace,
          competeTime:content.competeTime,
          title:content.title,
          text:content.text,
          previewImg:content.previewImg,
          cid:this.state.cid
        }
        console.log(body)
       //处理发送的数据
        fetch('https://ccpc.elatis.cn/admin/update', {
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
            this.reFresh()
          this.setState({
            status:false
          })
            
          }
        }).catch((e) => {
          console.log(e)
        })
    }
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
      const newData = [...this.state.hhhh];
      const index = newData.findIndex(item => cid === item.cid);//找到该信息在数组中的的索引值
        newData.splice(index,1)
        this.setState({
          hhhh:newData
        })
    }else{
      message.error('删除失败')
    }
  }).catch((e)=>{
    console.log(e)
  })
  }
   cancel=()=> {
    message.error('取消成功'); 
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
         competePlace:recieve.data[0].competePlace,
         competeTime:recieve.data[0].competeTime,
         competeType:recieve.data[0].competeType,
         status:true,
         cid:body.cid,
         url:recieve.data[0].previewImg
       },()=>{
         console.log(this.state.url)
         console.log(this.state.changeContent.text)
         this.editorInstance.setContent(this.state.changeContent.text)
       })
      
    })
    
   }
  enterLoading = () => {
    this.setState({ loading: true });
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  render () {
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
   const {getFieldDecorator} = this.props.form
    return (
      <div>
        <div className={this.state.status===false?styles.yc1:styles.yc2}>
          <div className={styles.input}>
         <Form >
          <FormItem
                label='比赛类型'
                key='form-content-competeType'
              >
                {getFieldDecorator('competeType',{
                    initialValue: this.state.competeType
                  })(
                 <Input placeholder="请输入比赛类型"  />
                )}
         </FormItem>
         <FormItem
                label='比赛地点'
                key='form-content-competePlace'
              >
                {getFieldDecorator('competePlace',{
                    initialValue: this.state.competePlace
                  })(
                <Input placeholder="请输入比赛地点"  />
                )}
         </FormItem><FormItem
                label='比赛时间'
                key='form-content-competeTime'
              >
                {getFieldDecorator('competeTime',{
                    initialValue: this.state.competeTime
                  })(
                 <Input placeholder="请输入比赛时间"  />
                )}
         </FormItem><FormItem
                label='文章标题'
                key='form-content-title'
              >
                {getFieldDecorator('title',{
                    initialValue: this.state.title
                  })(
                <Input placeholder="请输入文章标题"  />
                )}
         </FormItem>
        
        </Form>
      </div>
          <div className="clearfix">
        
     {/* <UpLoadPicture>
     
     </UpLoadPicture> */}
     <div>
       <img src={this.state.url} alt=''className={styles.changeimg}/>
     </div>
      </div>
          <BraftEditor ref={instance => this.editorInstance = instance}{...editorProps}/>  
        <div className={styles.submit}>
          <Button type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
           提交
          </Button>
        </div>
        </div>
        <div className={StyleSheet.table}>
        
          <Table columns={columns} dataSource={this.state.hhhh} />
        </div>
    
      </div>     
    )
  }
}

export default competeModify
