import React,{Component}from 'react'
import {Button,Input,Divider,Popconfirm,Table,Modal,message,Form} from 'antd'
import 'antd/dist/antd.css'

const FormItem=Form.Item



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
const confirm = () => {
  data.shift()
  message.success('删除成功');
}
const cancel=()=> {
  message.error('取消成功'); 
}
@Form.create()
class Menu extends Component{
  constructor(props){
    super(props)
    this.state={
      visible: false ,
      loading: false
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
 handleSubmit(e){
  // e.preventDefalut()
   e.preventDefault()
   const ctx=this;
   this.props.form.validateFieldsAndScroll((err,values)=>{
     if(err){console.log(err)}else{
   
      const body={
        ...values,
        ...ctx.state.competeType,
        ...ctx.state.details
      }
      body.competePlace="null"
      body.competeTime="null"
      body.text="null"
      body.status="null"
      body.title="null"
      body.previewImg="null"
        console.log(body)
      fetch('https://ccpc.ela.moe/headerNavs',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'token':'123123'
        },
        body:JSON.stringify(body)

      }).then((res)=>{
        return res.json()
      }).then((json)=>{
        console.log('json',json)
        if(json.code===0){
          message.success('提交成功')
        }
      }).catch((e)=>{
        console.log(e)
      })
     }
   })
 }

 
  render(){
    const showModal = () => {
      this.setState({
        visible: true,
      });
     
    }
    
    const handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
     
     }
    
    const handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    const columns = [{
      title: '比赛类型',
      dataIndex: 'type',
      key: 'type',
      render: text => <a href="javascript(void0)">{text}</a>,
    }, {
      title: '具体信息',
      dataIndex: 'news',
      key: 'news',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={showModal}>修改</Button>
          <Divider type="vertical" />
          <Popconfirm title="请确定是否删除" onConfirm={confirm} onCancel={cancel} okText="是" cancelText="否">
            <Button >删除</Button>
      </Popconfirm>
        </span>
      ),
    }];
    const {getFieldDecorator}=this.props.form
    return(
      <div>
        <div>
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
                label='具体信息'
              
                key='form-content-details'
              >
                {getFieldDecorator('details',{
                rules: [{
                    required:true
                  }]})(
                <Input placeholder="请输入具体信息"  />
                )}
         </FormItem>
         {/* <FormItem onSubmit={this.handleSubmit}>
         <Button
                  type='primary'
                  htmlType='submit'
                  className='form-button'
                  loading={this.state.loading}
                  disabled={this.state.submitted}
                >
                  {this.state.submitted ? '提交成功' : '点击提交'}
                </Button>
         </FormItem> */}
        </Form>
        <Button type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
           提交
          </Button>
        </div>
        <div>
        <Table columns={columns} dataSource={data} />
        </div>

  <div>
        
        <Modal
          title="信息修改"
          cancelText='取消'
          okText='确定'
         
          visible={this.state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
           <div>
       
         <Form >
          <FormItem
                label='比赛类型'
                key='form-content-competeType1'
              >
                {getFieldDecorator('competeType1')(
                 <Input placeholder="请输入比赛类型"  />
                )}
         </FormItem>
         <FormItem
                label='具体信息'
              
                key='form-content-details1'
              >
                {getFieldDecorator('details1')(
                <Input placeholder="请输入具体信息"  />
                )}
         </FormItem>
        </Form>
        
       
        </div>
       
        </Modal>
      </div>
       
      </div>
    )
  }
}
export default Menu