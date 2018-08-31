import React,{Component} from 'react'
import styles from '../secondIndex.css'
export default class FocusSecond extends Component{   
   constructor(){
       super()
       this.state={
           mytext: '',    
       }
   }
   getData(){  
        fetch('http://192.168.1.66:8888/content/cid/1',{
        method: 'GET'
        }).then(
            res => res.json()).then(
            receive => {
            this.setState({mytext:receive},() => {
                console.log('mytext', this.state.mytext.data[0])
                // m=this.state.mytext.data[0];
            }); 
            console.log(receive.data[0].title);      
          }
         )
    }
    componentDidMount(){
      this.getData();
    }

    render(){
        //console.log(this.state.mytext.data ? this.state.mytext.data[0].title : 'null');
        console.log(this.state.mytext.data ? this.state.mytext.data[0].previewImg : 'null');
       return(
           <div className={styles.FocusContainer}>
                <div className={styles.FocusHeader}>
                    <img src={this.state.mytext.data ? this.state.mytext.data[0].previewImg : 'null'} alt="logo" style={{width:'1200px',height:'500px'}}/>
                </div>
                <div className={styles.FocusBody}>
                    <div className={styles.FocusBodyHeader} >
                       {this.state.mytext.data ? this.state.mytext.data[0].title : 'null'}
                    </div>
                    <div 
                    className={styles.FocusBodyOne} 
                    dangerouslySetInnerHTML={{__html: (this.state.mytext.data ? this.state.mytext.data[0].text : 'null')}}/>
                   </div>
            </div>  
       )
   }
}