import React, {Component}from 'react';
import '../manage/page/slider/index'

import Slider from './Slider';


const IMAGE_DATA = [
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
  }
];

class AppSlider extends Component{
  render(){
    return(
      <Slider
      items={IMAGE_DATA}
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
