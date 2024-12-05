// Mainbanner.tsx
import React from 'react';
import Header from '../../ui/Header/Header';
import styles from "@/styles/screens/mainbanner.module.scss";
import Testimage from "../../../Assets/TestImage.png";
import Image from 'next/image';
import Button from '../../ui/Header/Button/Button';
import { relative } from 'path';

const Mainbanner: React.FC = () => {
  return (
    <div className={`container`}>
      <Header />
      <div className={styles.secondsection}>
        <p className={styles.text1}>AI-Based Assessment Platform</p>
        <p className={styles.text2}>Understand Your Candidate Better with Highly Effective Assessment</p>
        <p className={styles.text3}>Streamline your hiring with tailored assessments. Our platform uses advanced tools like face detection, gadget detection, and voice recognition for secure, accurate testing. Find top talent effortlessly.</p>
        <div>
        <div className={styles.mainbtndiv}>
        <Button text="Get Started" variant="primary" /> 
        <Button text="Request Demo" variant="secondary" />
        </div>
      </div>
      
      </div>
      <div style={{position:"relative"}} >
      <Image  src={Testimage} alt='image' style={{objectFit:"cover",width:"100%",height:"100%"}}/>
      </div>
    </div>
  );
}

export default Mainbanner;
