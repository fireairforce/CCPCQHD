import React,{Component}from 'react'
import {Button,Input,message,Form} from 'antd'
import 'antd/dist/antd.css'
import Rewriten from './EditableCell';

const FormItem=Form.Item
@Form.create()
class Menu extends Component{
  constructor(props){
    super(props)
    this.state={
      visible: false ,
      loading: false,
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
 handleSubmit(e){
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
      fetch('https://ccpc.elatis.cn/admin/write/headerNavs',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'token':'IgyaO3US8Ju4rJgxiddE75z8pVW1cq7e'
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
        </Form>
        <Button type="primary" loading={this.state.loading} onClick={this.handleSubmit}>
           提交
          </Button>
        </div>
       <div>
         <Rewriten />
       </div>
      </div>
    )
  }
}


export default Menu