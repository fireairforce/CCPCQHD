import React,{Component} from 'react'
import AppHeader from '../AppHeader/AppHeader'
import styles from '../NewsSecond.css'

class NewsSecond extends Component{
    constructor(){
        super()
        this.state={
            mytext: '',    
        }
    }
    getData(){  
         fetch('https://ccpc.elatis.cn/content/type/competeNews',{
         method: 'GET'
         }).then(
             res => res.json()).then(
             receive => {
             this.setState({mytext:receive},() => {
                 console.log('mytext', this.state.mytext.data[4])
             }); 
             console.log(receive.data[4].title);      
           }
          )
     }

     componentDidMount(){
       this.getData();
     }
    render(){
        console.log(this.state.mytext.data);
        return(
            <div className={styles.SecondContainer}>
               <AppHeader/>
               <div className={styles.SecondHeader} >
                    <h1>{this.state.mytext.data ? this.state.mytext.data[0].title : 'null'}</h1>
               </div> 
               <div className={styles.SecondPic}>
                  <img src={this.state.mytext.data ? this.state.mytext.data[0].previewImg : 'null'} alt="NEUQ1" style={{width:'1200px',height:'500px'}}/>
               </div>
               <div className={styles.SecondContent} 
               dangerouslySetInnerHTML={{__html: this.state.mytext.data ? this.state.mytext.data[0].text : 'null'}}
               />
            </div> 
        );
    }
}

export default NewsSecond 