import React from 'react'
import styles from "@/styles/screens/Support.module.scss"
import Button from '../../ui/Header/Button/Button'
import Image from 'next/image'
import Testquestion from "../../../Assets/Officegirl.svg"
import Bulb from "../../../Assets/bulb.svg"
import Assess from "../../../Assets/Assess.svg"
import Line from "../../../Assets/Line.svg"
function Support() {
  return (

    <div className={`${styles.secondsection} container`}>

      <div className={`${styles.Subsection} row`}>


        <div className={`${styles.Subsection1} col-5 mx-auto`}>
          <p className={styles.firstpara}>How we are different from others</p>
          <p className={styles.mainheading}>
            We gives you, a wide variety of support!
          </p>
          <p className={styles.maindescription}>
            Explore our exceptional services at ProctorParhai. Benefit from comprehensive assessments, seamless interviews, AI-powered candidate insights, and advanced vigilance tools. Streamline your hiring process and unlock unparalleled excellence with ProctorParhai's outstanding services.
          </p>
          <div >
            <div className={styles.features}>
              <Image alt='' src={Bulb} />
              <div >
                <p className={styles.featuretext}>Free Assessments</p>
                <p className={styles.featurediscription}>Uncover areas for improvement and growth through our assessments, gaining valuable insights into your skill gaps.
                </p>
              </div>

            </div>
            <div className={styles.features}>
              <Image alt='' src={Assess} />
              <div >
                <p className={styles.featuretext}>Fully Customizable</p>
                <p className={styles.featurediscription}>Receive personalized recommendations tailored to your specific weaknesses, guiding you on the skills that require further development.
                </p>
              </div>

            </div>
            <div className={styles.features}>
              <Image alt='' src={Bulb} />
              <div >
                <p className={styles.featuretext}>Vigilance Tools</p>
                <p className={styles.featurediscription}>Access comprehensive insights and analysis of your assessment results, allowing you to track your progress.
                </p>
              </div>

            </div>
            <div className={styles.features}>
              <Image alt='' src={Assess} />
              <div >
                <p className={styles.featuretext}>AI Based Recommendations & High Level Insights</p>
                <p className={styles.featurediscription}>Access comprehensive insights and analysis of your assessment results, allowing you to track your progress.
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className={`${styles.Subsection2} col-5  mx-auto`}>
          <div className={styles.Subsectiondiv2}>
            <div className={styles.seconddiv}>
              <p className={styles.Seconddivtext1}>For Enterprises</p>
              <p className={styles.Seconddivtext2}>Build Exceptional Tech Teams</p>
              <p className={styles.Seconddivtext3}>
                Elevate your hiring process with TestParhai. Assess candidates' skills accurately and efficiently. Identify top talent to build exceptional tech teams that drive your company's success.
              </p>
              <div className={`${styles.supportSectionImageWrapper}`}>
                <Image alt='' src={Line} />
              </div>
              <Button text='Request Demo' variant='secondary' />
            </div>

            <div className={styles.imagesection}>
              <Image alt='' className={styles.imagesection1} src={Testquestion} />
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}

export default Support;
