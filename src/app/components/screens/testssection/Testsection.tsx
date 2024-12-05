import React from 'react'
import styles from "@/styles/screens/Testsection.module.scss"
import Button from '../../ui/Header/Button/Button'
import Image from 'next/image'
import Testquestion from "../../../Assets/tests.svg"
function Testsection() {
  return (

    <div className={`${styles.secondsection} container`}>
      <div className={`${styles.Subsection} row`}>
        <div className={`${styles.Subsection1} col-6`}>
          <p className={styles.mainheading}>
            Help You to Get Your Academic Assessments
          </p>
          <p className={styles.maindescription}>
            Discover the outstanding services offered by ProctorParhai. Experience comprehensive assessments, seamless interviews, AI-driven candidate insights, and advanced vigilance tools. Optimize your hiring process and unlock unparalleled excellence through ProctorParhai's exceptional offerings.
          </p>
          <Button text='Request Demo' variant='secondary' />
        </div>
        <div className={`${styles.Subsection2} col-6`}>
          <Image alt='' src={Testquestion} />
        </div>
      </div>


    </div>
  )
}

export default Testsection;
