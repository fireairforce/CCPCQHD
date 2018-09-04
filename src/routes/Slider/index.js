import React, {Component}from 'react';
import '../manage/page/slider/index'
import styles from './index.less'
 import {Carousel} from 'react-bootstrap'

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
