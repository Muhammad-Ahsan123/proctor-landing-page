import React from 'react'
import Testimonalscard from '../../ui/Testimonalscard/Testimonalscard'
import styles from "@/styles/screens/testimonals.module.scss"

function Testimonals() {
  return (
    <div className='container'>
      <div className={styles.maindiv}>
      <p  className={styles.mainheading}>Testimonals</p>
      <p className={styles.maindiscription}>What Our Clients Say’s About Us</p>
      </div>
      <div className={styles.secondmaindiv}>
      <Testimonalscard/>
      <Testimonalscard/>

      <Testimonalscard/>

      </div>
    </div>


  )
}

export default Testimonals
