import React,{Component} from 'react'
import styles from '../secondIndex.css'

const focusbodyHeaderThree=(
    <div className={styles.FocusBodyOne}>
    <h2>Amazing!CHY has created an OJ for NEUQ</h2>
    <hr />
        <p>The Accenture Oracle data 
                team has more than 20,000 professionals, who aid in delivering 50 billion transactions a day across more than three exabytes of data for clients globally. Accenture Oracle data specialists recently put the Oracle Autonomous Data Warehouse to a rigorous performance test to provide a real-life application usage experience. The data was then extrapolated and expanded to nine years’ worth of data to test the performance.</p>
            <p>Learn directly from Accenture experts about testing methodology and results that enable them to deliver more data intelligence faster to the enterprise and transform the way people live and work.</p> 
        <p>Are you able to innovate, develop and deploy quickly in a world that is moving faster than ever? Is your organization leveraging the benefits of cloud development?

        Join Oracle to hear from development experts about best practices for the design, development, management and deployment of applications. Learn how Oracle customers were able to adopt new technologies and practices to accelerate innovation through their cloud and on-premise applications.

        With interactive sessions and hands-on labs, the Oracle Application Development Day offers:

        Full day session with deep-dive product demos
        Overview of application development focusing on DevOps, modern development practices with Blockchain, Serverless, Microservices, Mobile, Chatbots, AI/ML.
        Hands on workshop with Container Pipelines, Docker and Kubernetes
        Each attendee will receive an exclusive $500 free trial for Oracle Cloud


        Please bring your own laptop for this event!

        Find your city below for full session description, agenda, and logistical details.</p>
 </div>
)
export default class FocusSecondOne extends Component{
   render(){
       return(
           <div className={styles.FocusContainer}>
              <div className={styles.FocusHeader}>
                 <img src={require("../../images/advertisement.png")} alt="logo" style={{width:'1200px',height:'500px'}}/>
              </div>
              <div className={styles.FocusBody}>
                {focusbodyHeaderThree}
              </div>
           </div>
       )
   }
}