import React,{Component} from "react"
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
            <Appbottom />
      </div>
       )
    }
}
export default App

