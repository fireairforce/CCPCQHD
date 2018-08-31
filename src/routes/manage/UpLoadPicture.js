import React,{Component} from 'react'
import getToken from'./token'

import 'antd/dist/antd.css'



import { Icon, Modal, Upload,Button } from 'antd'
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
      }]
    }
  }
  handleCancel = () => this.setState({previewVisible: false})
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
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
      url: BASE_QINIU_URL + (response.hash || '')
    }
    fileList.pop()
    fileList.push(fileItem)
    this.setState({fileList})
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
    return (
      <div>
        <Upload {...uploadProps}>
          <div>
            <Icon type='plus' />
            <div className='ant-upload-text'>Upload</div>
          </div>
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img style={{width: '100%'}} src={previewImage} />
        </Modal>
      </div>
    )
  }
}
export default UpLoadPicture
