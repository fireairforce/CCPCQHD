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
import NewsSecond from "./NewsSecond/NewsSecond"
import styles from "../routes/index.css"
class App extends Component{
    render(){
       return(
        <div className={styles.Main1}>
            {/* <NewsSecond /> */}
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

