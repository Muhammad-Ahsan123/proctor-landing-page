import React from 'react';
import Image from 'next/image';
import styles from "@/styles/ui/header.module.scss";
import Logo from '../../../Assets/Mainlogo.svg';

function Header() {
  return (
      <div className="row ">
        <div className={`${styles.mainheaderdiv} col-10 mx-auto `}>
          <div className={styles.logo}>
            <Image src={Logo} alt="Logo" width={260} height={48} />
          </div>
          <div className={styles.ulheaderlist}>
            <ul className={styles.headerlist}>
              <li>Home</li>
              <li className={styles.sublist}>Features</li>
              <li className={styles.sublist}>Services</li>
              <li className={styles.sublist}>Pricing</li>
              <li className={styles.sublist}>Testimonials</li>
              <li className={styles.sublist}>Contact us</li>
              <li>Login</li>
              <li className={styles.button}>Become a Partner</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Header;
