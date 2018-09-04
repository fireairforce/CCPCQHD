import React, {Component}from 'react';
import '../manage/page/slider/index'
import styles from './index.less'
 import {Carousel} from 'react-bootstrap'

class AppSlider extends Component{
  render(){
    return(
   <div className={styles.sliders}>
     <Carousel>
        <Carousel.Item>
          <img  alt="900x500" src="http://pdy48vy9a.bkt.clouddn.com/13933.jpg"/>
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="900x500" src="http://pdy48vy9a.bkt.clouddn.com/13933.jpg"/>
         
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  alt="900x500" src="http://pdy48vy9a.bkt.clouddn.com/13933.jpg"/>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   </div>
    )
  }
}
export default AppSlider
