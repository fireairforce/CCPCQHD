import React,{Component} from 'react'
import styles from './index.css'
import '../../../src/router'

class Appbottom extends Component{
    render(){
        return(
            <div className={styles.copyright}>
                <div className={styles.copyright_content}>
                    <ul>
                        <li><a href=" "><span className={styles.copyright_link}>Contact Us</span></a>
                            <ul>
                                <li><a href=" ">US Sales:+1.800.633.0738</a></li>
                                <li><a href=" ">Global Contacts</a></li>
                                <li><a href=" ">Support Directory</a></li>
                                <li><a href=" ">Subscrible to Emails</a></li>
                            </ul>
                        </li>
                        <li><a href=" "><span className={styles.copyright_link}>About Oracle</span></a>
                            <ul> 
                                <li><a href=" ">Careers</a></li>
                                <li><a href=" ">Company Information</a></li>
                                <li><a href=" ">Social Responsibility</a></li>
                                <li><a href=" ">Comunities</a></li>
                            </ul> 
                        </li>
                        <li><a href=" "><span className={styles.copyright_link}>Downloads and Trials</span></a>
                            <ul> 
                                <li><a href=" ">Java Runtime Download</a></li>
                                <li><a href=" ">Java for Developers</a></li>
                                <li><a href=" ">Software Downloads</a></li>
                                <li><a href=" ">Try Oracle Cloud Platform</a></li>
                            </ul> 
                        </li>
                        <li><a href=" "><span className={styles.copyright_link}>News and Events</span></a>
                            <ul> 
                                <li><a href=" ">Acquisitions</a></li>
                                <li><a href=" ">Blogs</a></li>
                                <li><a href=" ">Events</a></li>
                                <li><a href=" ">Newsroom</a></li>
                            </ul> 
                        </li>
                    </ul>
                </div>
                <hr className={styles.line}/>
                <div className={styles.Images}>
                     <img src={require("../../images/facebook.png")} alt="facebook" style={{width:'40px',height:'40px'}}/>
                     <img src={require("../../images/Twitter.png")} alt='Twitter'style={{width:'40px',height:'40px'}}/>
                     <img src={require("../../images/instagram.png")} alt='instagram' style={{width:'40px',height:'40px'}}/>
                     <img src={require("../../images/google-plus-box.png")} alt='google' style={{width:'40px',height:'40px'}}/>
                     <img src={require("../../images/youtube.png")} alt='youtube'style={{width:'40px',height:'40px'}}/>
                     <img src={require("../../images/wifi信号.png")} alt='wifi'style={{width:'40px',height:'40px'}}/>
                </div>
                <div className={styles.Oracle}>
                   <img src={require("../../images/oracle.png")} alt='oracle' />
                </div>
            </div>
        )
    }
}
export default Appbottom