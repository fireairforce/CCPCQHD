import React,{Component} from 'react'
import getToken from'./token'
import 'antd/dist/antd.css'
import { Icon, Modal, Upload,message} from 'antd'
const QINIU_SERVER = 'http://up.qiniu.com' // 根据存储区域修改上传域名
const BASE_QINIU_URL = 'pdy48vy9a.bkt.clouddn.com'  // 空间 bucket 绑定的域名
class UpLoadPicture extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://pdy48vy9a.bkt.clouddn.com/13933.jpg'
      }],
    }
   
  }
  componentDidMount(){
    fetch('https://ccpc.elatis.cn/img/groupid/1',{
      method:'GET'
    }).then((res)=>{
      return res.json()
    }).then(recieve=>{
      const fileList=JSON.stringify(recieve.data)
    //  fileList.map((ab)=>{
    //   console.log(ab)
    //    return(
    //     ab.uid=fileList.pid,
    //     ab.url=fileList.url,
    //     ab.name='xxx.png',
    //     ab.status='done'
    //  )
     
     // })
     this.setState({
       fileList:[{
         uid:recieve.data[0].pid,
         url:recieve.data[0].url,
         name: 'xxx.png',
        status: 'done',
       }]
     })
   
    console.log(fileList)
    })
  }

  handleCancel = () => this.setState({previewVisible: false})
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
      abc:''
    })
  }
  handleChange = ({file, fileList}) => {
    const {uid, name, type, thumbUrl, status, response = {}} = file
    const fileItem = {
      uid,
      name,
      type,
      thumbUrl,
      status,
      url: 'http://'+BASE_QINIU_URL + (response.hash || '')
    }
    fileList.pop()
    fileList.push(fileItem)
     this.setState({fileList})
    //  this.setState({
    //    abc:BASE_QINIU_URL+'/'+(response.hash||'')
    //  })
    const body={
     url:'http://'+BASE_QINIU_URL+'/'+(response.hash||''),
     gid:1
    }
    console.log(body)
    fetch('https://ccpc.elatis.cn/admin/img/upload',{
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
        message.success('上传成功')
        fileList.pop()
       fileList.push(fileItem)
        this.setState({fileList})
      }else if(json.code===-1){
        message.error('图片已存在')
      }
    }).catch((e)=>{
      console.log(e)
    })
   
  }
  getUploadToken = () =>{
    const token = getToken() // 从服务器获取 token
    this.setState({token})
  }
  render () {
    const {previewVisible, previewImage, fileList} = this.state
    const uploadProps = {
      action: QINIU_SERVER,
      data: {
        token: this.state.token
      },
      listType: 'picture-card',
      className: 'upload-list-inline',
      fileList,
      beforeUpload: this.getUploadToken,
      onPreview: this.handlePreview,
      onChange: this.handleChange
    }
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">正文图片</div>
      </div>
    )
    return (
      <div>
        <Upload {...uploadProps}>
          {/* <div>
            <Icon type='plus' />
            <div className='ant-upload-text'>图片上传</div>
          </div>
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img style={{width: '100%'}} src={previewImage} alt='pictures' />
          
        </Modal>
      </div>
    )
  }
}
export default UpLoadPicture
