import React from 'react'
import ReactDOM from 'react-dom'
import {Button,Input,Divider,Table,message,Popconfirm,Icon,Upload} from 'antd'
import styles from './game.less'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

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
  contentId:1
}

const editor=(
  <div className={styles.input}>
        文章标题：<Input placeholder="请输入文章标题"  id='header'/>
   </div>
)
const columns = [{
  title: '标题',
  dataIndex: 'header',
  key: 'header',
  render: text => <a href="javascript:;">{text}</a>,
}, {
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
  header:'CCPC 2017秦皇岛'
 
},{
  key: '2',
  header:'CCPC 2018秦皇岛'
 
}];
const confirm = () => {
  data.splice(data.indexOf(this),1)
  message.success('删除成功');
}
const cancel=()=> {
  message.error('取消成功'); 
}

// const handleChange=()=>{
//   this.setState({
    
//   })
// }
const onChange=()=>{
  console.log(editorProps.contentId)
  editorProps.contentId=2
  console.log(editorProps.contentId)
  // editorProps.setContent('', '我是傻逼')
  // this.editorInstance.setContent('我是傻逼')
  console.log(editorProps.initialContent)
 editorProps.initialContent="我是傻逼"
 console.log(editorProps.initialContent)
 

}
class News extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
   
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
  enterLoading = () => {
    this.setState({ loading: true });
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }
  // handleSubmit (e) {
  //   e.preventDefault()
  //   this.props.form.validateFieldsAndScroll((err, values) => {
  //     if (err) { console.log(err) } else {
  //       const body = {
  //         // ...values,
  //         //  stu_id,
  //         //   ...ctx.state.pointall,
  //         //   ...ctx.state.arrangements,
  //         //   ...ctx.state.environment,
  //         //   ...ctx.state.accommodation,
  //         //   ...ctx.state.point1,
  //         //   ...ctx.state.point2,
  //         //   ...ctx.state.point3,
  //         //   ...ctx.state.point4,
  //         //   ...ctx.state.point5,
  //         //   ...ctx.state.point6,
  //         //   ...ctx.state.eva_tea6,
  //         //   ...ctx.state.eva_tea5,
  //         //   ...ctx.state.eva_tea4,
  //         //   ...ctx.state.eva_tea3,
  //         //   ...ctx.state.eva_tea2,
  //         //   ...ctx.state.eva_tea1,
  //       }
  //       console.log(body)
  //       // 处理发送的数据
  //       fetch('', {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(body)
  //       }).then((res) => {
  //         return res.json()

  //       }).then((json) => {
  //         console.log('json',json)
  //         if (json.code === 1000) {
  //           message.success('提交成功')
  //           this.props.history.push('/success')
  //           this.setState({submitted: true})
  //         }
  //       }).catch((e) => {
  //         console.log(e)
  //       })
  //     }
  //   })
  // }
  render () {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <div>
          {editor}
          <div className="clearfix">
          <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="url"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
      </div>
          <BraftEditor {...editorProps}/> 
        <div className={styles.submit}>
          <Button type="primary" loading={this.state.loading} a>
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