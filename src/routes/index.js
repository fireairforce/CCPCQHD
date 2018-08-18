import React,{Component} from "react"
import AppProcess from './AppProcess/AppProcess'
import AppNews from './AppNews/AppNews'
import AppRules from './AppRules/AppRules'
import Appbottom from './Appbottom/Appbottom'
import AppHeader from './AppHeader/AppHeader'
import AppSLider from './Slider/index'
import AppMessage from './AppMessage/AppMessage'
import AppCompete from "./AppCompete/AppCompete";

class App extends Component{
    render(){
       return(
        <div>
            <AppHeader />
            <AppSLider />
            <AppMessage />
            <AppCompete />
            <AppRules />
            <AppProcess />
            <AppNews />
            <Appbottom />
      </div>
       )
    }
}
export default App

