import React from 'react'
import {Button,Input,Table,message,Form,Modal} from 'antd'
import styles from './game.less'
import UpLoadPicture from '../../UpLoadPicture'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

const FormItem=Form.Item
const EditableContext = React.createContext();
const editorProps = {
  height: 500,
  contentFormat: 'html',
  initialContent: '<p>请输入内容</p>',
}
@Form.create()
class GameNews extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      iconLoading: false,
      allContent:'',
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
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
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
                      <Button onClick={()=>this.see(form,record.cid)}>查看</Button>
                    )}
        </EditableContext.Consumer>
         
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
