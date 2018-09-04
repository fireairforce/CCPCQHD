import React, {Component}from 'react';
import '../manage/page/slider/index'

import Slider from './Slider';


class AppSlider extends Component{
  constructor(){
    super()
    this.state={
        mytext: '',
    }
}
getData(){  
     fetch('https://ccpc.elatis.cn/img/groupid/1',{
     method: 'GET'
     }).then(
         res => res.json()).then(
         receive => {
         this.setState({mytext:receive},() => {
             //console.log('mytextimg', this.state.mytext)
         });    
       }
      )
 }
 componentDidMount(){
   this.getData();
 }

  render(){
  //  console.log(this.state.mytext);
    return(
      <Slider
      items={[
        {
          src: "http://pdx2xd16q.bkt.clouddn.com/haligong.png",
          alt: 'images-1',
        },
        {
          src: "http://pdx2xd16q.bkt.clouddn.com/zjlg.jpg",
          alt: 'images-2',
        },
        {
          src: "http://pdx2xd16q.bkt.clouddn.com/hgd.png",
          alt: 'images-3',
        }]
      }
      speed={1.2}
      delay={2.1}
      pause={true}
      autoplay={true}
      dots={true}
      arrows={true}
    />
    )
  }
}
export default AppSlider
