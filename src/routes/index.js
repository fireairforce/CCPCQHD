import React,{Component} from "react"
import AppProcess from './AppProcess/AppProcess'
import AppNews from './AppNews/AppNews'
import AppRules from './AppRules/AppRules'
import Appbottom from './Appbottom/Appbottom'
import AppHeader from './AppHeader/AppHeader'
import AppSLider from './Slider/index'
import AppMessage from './AppMessage/AppMessage'
import AppCompete from "./AppCompete/AppCompete"
import AppClender from "./AppClender/AppClender"
import styles from "../routes/index.css"
class App extends Component{
    // componentDidMount(){
    //     fetch('http://form.andyhui.xin/evaluation', {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //     }).then((res) => {
    //       return res.json()
    
    //     }).then((json) => {
    //       console.log('json',json)
    //       if (json.code === 1000) {
    //         console.log('json'.json)
    //         this.props.dispatch({
    //           type: 'app/allMessage',
    //           payload: json.data.info
    //         })
    //         this.setState({submitted: true})
    //       }
    //     }).catch((e) => {
    //       console.log(e)
    //     })    
    //   }
    render(){
       return(
        <div className={styles.Main1}>
            <AppHeader />
            <AppSLider />
            <AppMessage />
            <AppCompete />
            <AppRules />
            <AppProcess />
            <AppNews />
            <AppClender />
            <Appbottom />
      </div>
       )
    }
}
export default App

