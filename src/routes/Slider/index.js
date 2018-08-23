import React, {Component}from 'react';

import Slider from './Slider';


const IMAGE_DATA = [
  {
    src: require('../../images/haligong.png'),
    alt: 'images-1',
  },
  {
    src: require('../../images/zjlg.jpg'),
    alt: 'images-2',
  },
  {
    src: require('../../images/hgd.png'),
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
