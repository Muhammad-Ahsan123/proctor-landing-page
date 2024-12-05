import React from 'react'
import styles from "@/styles/ui/testimonalscard.module.scss"
import Avatar from "../../../Assets/avatar.svg"
import Stars from "../../../Assets/stars.png"

import Image from 'next/image'
function Testimonalscard() {
  return (
    <div className={`${styles.maindiv} col-md-4`}>
      <p>
        “Working with this agency was a great experience. They understood our needs and produced creative video content that resonated with our audience and generated an impressive number of leads. We would highly recommend them to anyone looking for top-notch production services!"
      </p>

      <div className={styles.mainwritesection}>
        <div className={styles.imagediv}>
          <Image alt='' src={Avatar} />
        </div>
        <div className={styles.subwrite}>
          <p>
            Hamza abdul qader
          </p>
          <p >
            <Image alt='' src={Stars} />
          </p>
        </div>

      </div>
    </div>
  )
}

export default Testimonalscard
