import React from 'react'
import Image from 'next/image'
import styles from "@/styles/ui/pricingcard.module.scss"
import Right from "../../../Assets/right.svg"
import Button from '../Header/Button/Button'

// Define an interface for the props
interface PricingCardsProps {
  title: string;
  description: string;
  amount: string;
  features: string[];
}

const Pricingcards: React.FC<PricingCardsProps> = ({ title, description, amount, features }) => {
  return (
    <div className='container'>
      <div className={styles.maincard}>
        <p className={styles.mainfeatureheading}>
          {title}
        </p>
        <p className={styles.featurediscription}>
          {description}
        </p>
        <p className={styles.amount}>{amount}<span className={styles.account}>/Account</span></p>
        <hr className={`${styles.pricingHr}`} />
        <ul className={styles.ullist}>
          {features.map((feature, index) => (
            <li key={index}>
              <Image src={Right} alt="check" />
              {feature}
            </li>
          ))}
        </ul>
        <Button  text="Get Started" variant='secondary' />
      </div>
    </div>
  )
}

export default Pricingcards
