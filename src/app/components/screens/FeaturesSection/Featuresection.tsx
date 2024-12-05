import React from 'react';
import styles from "@/styles/ui/Featuresection.module.scss";
import Cards from "@/app/components/ui/Cards/Cards";

function Featuresection() {
  return (
    <div className={styles.wrapper}> {/* Full width background wrapper */}
      <div className={`${styles.secondsection} container`}>
        <p className={styles.text1}>Our features that we provide</p>
        <p className={styles.text2}>Smart Vigilance Tools</p>
        <p className={styles.text3}>
          Gain comprehensive insights into our assessments, enhanced by our smart vigilance tools including gadget, face, and voice detectors. Experience a secure and fair assessment environment.
        </p>
        <Cards />
      </div>
    </div>
  );
}

export default Featuresection;
