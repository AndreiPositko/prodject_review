import React from 'react'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import MainSection from './components/MainSection/index'
import PrincipleFirst from './components/PrincipleFirst'
import PrincipleSecond from './components/PrincipleSecond'
import PrincipleThird from './components/PrincipleThird'
import PrincipleFourth from './components/PrincipleFourth'
import PrincipleFifth from './components/PrincipleFifth'

import styles from './styles.module.scss'

function Home() {
  return (
    <>
      <div className={styles['main-container']}>
        {/* <Header />
        <SideNav /> */}
        <MainSection />
        <hr />
        <PrincipleFirst />
        <hr />
        <PrincipleSecond />
        <hr />
        <PrincipleThird />
        <hr />
        <PrincipleFourth />
        <hr />
        <PrincipleFifth />
      </div>
    </>
  )
}

export default Home
