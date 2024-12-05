import React from 'react'
import styles from "@/styles/screens/services.module.scss"
import Button from '../../ui/Header/Button/Button'
import Image from 'next/image'
import Testquestion from "../../../Assets/Testquestion.svg"
function Services() {
  return (
    
    <div className={`${styles.secondsection} container`}>
        <p className={styles.text1}>Our Services</p>
        <p className={styles.text2}>We help in various domains</p>
        <p className={styles.text3}>
        Discover the outstanding services offered by ProctorParhai. Experience comprehensive assessments, seamless interviews, AI-driven candidate insights, and advanced vigilance tools. Optimize your hiring process and unlock unparalleled excellence through ProctorParhai's exceptional offerings.
        </p>
 <div className={`${styles.Subsection} row`}>
    <div className= {`${styles.Subsection1} col-6`}>
        <p className={styles.mainheading}>
            Helping Recruiting Team, with Customise Test...
        </p>
        <p className={styles.maindescription}>
            Discover the outstanding services offered by ProctorParhai. Experience comprehensive assessments, seamless interviews, AI-driven candidate insights, and advanced vigilance tools. Optimize your hiring process and unlock unparalleled excellence through ProctorParhai's exceptional offerings.
        </p>
        <Button text='Request Demo' variant='secondary'/>
    </div>
    <div className={`${styles.Subsection2} col-6`}>
        <Image alt='' src={Testquestion}/>
    </div>
</div>


    </div>
  )
}

export default Services
