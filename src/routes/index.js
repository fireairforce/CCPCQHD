import React from 'react'
import AppNews from './AppNews/AppNews'
import AppRules from './AppRules/AppRules'
import AppBottomNews from './AppBottomNew/AppBottomNew'
import AppHeader from './AppHeader/AppHeader'
import AppMessage from './AppMessage/AppMessage'
import AppCompete from './AppCompeteNew/AppCompete'
import AppSlide from './AppSlide/AppSlide'
import Nav from './AppBottom/AppBottom'
import styles from '../routes/index.css'
const AppOne = (props) => {
  return (
    <div className={styles.Main1}>
      <AppHeader />
      <AppSlide />
      <AppMessage />
      <AppCompete />
      <AppRules />
      <AppNews />
      <AppBottomNews />
      <Nav />
    </div>
  )
}
export default AppOne

