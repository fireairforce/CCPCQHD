import React,{Component} from 'react'
import styles from './index.css'
import createHistory from 'history/createHashHistory';
const history=createHistory();
class AppNews extends Component{
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
                // console.log('mytext', this.state.mytext)
             });    
           }
          )
     }
     componentDidMount(){
       this.getData();
     }
    render(){
      //  console.log(this.state.mytext.data);
        return(
            <div className={styles.news111}>
                 <div className={styles.news222}>
                     <p className={styles.news333}>焦点新闻</p> 
                 </div>
                 <div className={styles.news444}>
                    <div className={styles.news4440}  onClick={()=>{history.push('./focus')}}>
                        <img src={this.state.mytext.data ? this.state.mytext.data[0].previewImg : 'null'} alt='test1' style={{width:'300px',height:'225px'}}/>
                        <div className={styles.news44410}>
                           <p className={styles.news}>{this.state.mytext.data ? this.state.mytext.data[0].title : 'null'}</p>
                        </div>
                        <div className={styles.news4441} 
                         dangerouslySetInnerHTML={{__html: this.state.mytext.data ? this.state.mytext.data[0].text : 'null'}}
                        />
                    </div>

                    <div className={styles.news4440} onClick={()=>{history.push('./focus1')}}>
                        <img src={this.state.mytext.data ? this.state.mytext.data[1].previewImg : 'null'} alt='test2' style={{width:'300px',height:'225px'}}/>
                        <div className={styles.news44411}>
                            <p className={styles.news}>{this.state.mytext.data ? this.state.mytext.data[1].title : 'null'}</p>
                        </div>
                        <div className={styles.news4441}  
                        dangerouslySetInnerHTML={{__html: this.state.mytext.data ? this.state.mytext.data[1].text : 'null'}}
                        />
                    </div>

                   <div className={styles.news4440} onClick={()=>{history.push('./focus2')}}>
                        <img src={this.state.mytext.data ? this.state.mytext.data[2].previewImg : 'null'} alt='test3' style={{width:'300px',height:'225px'}}/>
                        <div className={styles.news44412}>
                            <p className={styles.news}>{this.state.mytext.data ? this.state.mytext.data[2].title : 'null'}</p>
                        </div>
                        <div className={styles.news4441}  
                        dangerouslySetInnerHTML={{__html: this.state.mytext.data ? this.state.mytext.data[2].text : 'null'}}
                        />
                    </div>

                    <div className={styles.news4440} onClick={()=>{history.push('./focus3')}}>
                        <img src={this.state.mytext.data ? this.state.mytext.data[3].previewImg : 'null'} alt='test4' style={{width:'300px',height:'225px'}}/>
                        <div className={styles.news44413}>
                            <p className={styles.news}>{this.state.mytext.data ? this.state.mytext.data[3].title : 'null'}</p>
                        </div>
                        <div className={styles.news4441}  
                        dangerouslySetInnerHTML={{__html: this.state.mytext.data ? this.state.mytext.data[3].text : 'null'}}
                        />
                    </div>
                 </div>
            </div>
        )
    }
}
export default AppNews