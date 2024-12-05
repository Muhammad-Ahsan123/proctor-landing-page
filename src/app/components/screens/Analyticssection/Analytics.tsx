import React from 'react'
import styles from "@/styles/screens/Analytics.module.scss"
import Button from '../../ui/Header/Button/Button'
import Image from 'next/image'
import Testquestion from "../../../Assets/Analytics.svg"
function Analytics() {
  return (

    <div className={`${styles.secondsection} container`}>
      <div className={`${styles.Subsection} row`}>

        <div className={`${styles.Subsection2} col-6`}>
          <div className={styles.imagesection}>
            <Image alt='' className={styles.imagesection1} src={Testquestion} />
          </div>
        </div>
        <div className={`${styles.Subsection1} col-6`}>
          <p className={styles.mainheading}>
            Helping Your Team to Get Professional Trainings
          </p>
          <p className={styles.maindescription}>
            Discover the outstanding services offered by ProctorParhai. Experience comprehensive assessments, seamless interviews, AI-driven candidate insights, and advanced vigilance tools. Optimize your hiring process and unlock unparalleled excellence through ProctorParhai's exceptional offerings.
          </p>
          <Button text='Request Demo' variant='secondary' />
        </div>
      </div>


    </div>
  )
}

export default Analytics;
