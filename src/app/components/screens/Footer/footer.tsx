import React from 'react'
import styles from "@/styles/screens/footer.module.scss"
import Button from '../../ui/Header/Button/Button'
import Image from 'next/image'
import Mainllogo from "../../../Assets/footerlogo.svg"
import message from "../../../Assets/sms-tracking.svg"
import Phone from "../../../Assets/phone.svg"
import pak from "../../../Assets/pak.svg"
import Contactus from '../../ui/Contactus/Contactus'

function Footer() {
  return (
    
    <div className={`${styles.secondsection} container`}>
       
 <div className={`${styles.Subsection} row`}>
    <div className= {`${styles.Subsection1} col-6`}>
    <Image alt='' src={Mainllogo}/>
    <div className={styles.footersubdiv}>
      <Image alt='' src={message}/>
        <p className={styles.subdivtext}>
      info@proctorparhai.com
           </p>
           </div>
           <div className={styles.footersubdiv}>
      <Image alt='' src={Phone}/>
        <p className={styles.subdivtext}>
        (+92) 3123456789
           </p>
           </div>
           <div className={styles.footersubdiv2}>
      <Image alt='' src={pak}/>
        <div className={styles.subdivtext} >
        karachi, Pakistan
           </div>
           <div className={styles.subdivtext2}>FAST-NUCES Main Campus. Shah Latif Town (on National Highway)</div>
           </div>
           <div>
            map
           </div>

           <div className="container">
  <div className="row">
    <div className="col-md-4">Home</div>
    <div className="col-md-4">Pricing</div>
    <div className="col-md-4">Terms & Conditions</div>
  </div>

 
  <div className="row">
    <div className="col-md-4">Features</div>
    <div className="col-md-4">Testimonials</div>
    <div className="col-md-4">Privacy Policy</div>
  </div>

 
  <div className="row">
    <div className="col-md-4">Services</div>
    <div className="col-md-4">Register / Login</div>
    <div className="col-md-4">Contact Us</div>
  </div>
</div>
<hr/>
<div>
  <p>© Proctor Parhai 2024. All rights reserved</p>
</div>
    </div>
    <div className={`${styles.Subsection2} col-6`}>
     <Contactus/>
    </div>
</div>


    </div>
  )
}

export default Footer
