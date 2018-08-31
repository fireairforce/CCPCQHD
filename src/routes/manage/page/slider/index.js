import React,{Component} from 'react'
import UpLoadPicture from '../../UpLoadPicture'
import {Button} from 'antd'

class Pictures extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
    }
  }
  
  render () {
    return (
      <div>
        <UpLoadPicture/>
        <Button type='primary' loading={this.state.loading}>提交</Button>
      </div>
    )
  }
}
export default Pictures
