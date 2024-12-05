import React from 'react'
import Button from '../Header/Button/Button'
import styles from '@/styles/ui/contactus.module.scss'

function Contactus() {
  return (
    <div className={styles.contactFormContainer}>
      <p className={styles.contacttext}>Contact Us</p>
      <p className={styles.contacttext2}>Our team is available 24/7 for your quarries and questions</p>
      
      <div className={styles.inputGroup}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" placeholder="Muhammad Saad Iqbal" />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" placeholder="Demo Request for Proctor Parhai" />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Type Your Message"></textarea>
      </div>

      <Button text='Send Message' variant='secondary' />
    </div>
  )
}

export default Contactus
