import React,{Component} from 'react'
import styles from '../secondIndex.css'
export default class FocusSecondTwo extends Component{   
   constructor(){
       super()
       this.state={
           mytext: '',    
       }
   }
   getData(){  
        fetch('https://ccpc.elatis.cn/content/type/focusNews',{
        method: 'GET'
        }).then(
            res => res.json()).then(
            receive => {
            this.setState({mytext:receive},() => {
                console.log('mytext', this.state.mytext.data[2])
                // m=this.state.mytext.data[0];
            }); 
            console.log(receive.data[2].title);      
          }
         )
    }
    componentDidMount(){
      this.getData();
    }

    render(){
        //console.log(this.state.mytext.data ? this.state.mytext.data[0].title : 'null');
        console.log(this.state.mytext.data ? this.state.mytext.data[2].previewImg : 'null');
       return(
           <div className={styles.FocusContainer}>
                <div className={styles.FocusHeader}>
                    <img src={this.state.mytext.data ? this.state.mytext.data[2].previewImg : 'null'} alt="logo" style={{width:'1200px',height:'500px'}}/>
                </div>
                <div className={styles.FocusBody}>
                    <div className={styles.FocusBodyHeader} >
                       {this.state.mytext.data ? this.state.mytext.data[2].title : 'null'}
                    </div>
                    <div 
                    className={styles.FocusBodyOne} 
                    dangerouslySetInnerHTML={{__html: (this.state.mytext.data ? this.state.mytext.data[2].text : 'null')}}/>
                   </div>
            </div>  
       )
   }
}