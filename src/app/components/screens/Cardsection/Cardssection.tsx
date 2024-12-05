import React from 'react'
import Pricingcards from '../../ui/Pricingcards/Pricingcards'
import styles from "@/styles/screens/cardsection.module.scss"

// Define an interface for package data
interface Package {
  title: string;
  description: string;
  amount: string;
  features: string[];
}

const Cardssection: React.FC = () => {
  // Define the packages array with typed data
  const packages: Package[] = [
    {
      title: "Fremium Package",
      description: "Enhance security with face detection, including eyes detection to ensure focused attention",
      amount: "$0",
      features: [
        "Single Institute Account",
        "150 Hours of Assessment",
        "Group Assessment",
        "AI Support",
        "Fully Customizable",
        "Vigilance Tools",
        "Results Insights"
      ]
    },
    {
      title: "Standard Package",
      description: "Advanced features with enhanced security and unlimited assessments for growing institutes.",
      amount: "$50",
      features: [
        "Single Institute Account",
        "150 Hours of Assessment",
        "Group Assessment",
        "AI Support",
        "Fully Customizable",
        "Vigilance Tools",
        "Results Insights"
      ]
    },
    {
      title: "Premium Package",
      description: "Ultimate package with all features and 24/7 support for large-scale institutes.",
      amount: "$100",
      features: [
        "Single Institute Account",
        "150 Hours of Assessment",
        "Group Assessment",
        "AI Support",
        "Fully Customizable",
        "Vigilance Tools",
        "Results Insights"
      ]
    }
  ];

  return (
    <div className='container'>
      <div className={styles.firstdiv}>
        <p className={styles.mainheading}>
          Our pricing
        </p>
        <p className={styles.mainpricingtext}>
          We offer various packages for you
        </p>
      </div>
      <div style={{ display: "flex" }}>
        {packages.map((pkg, index) => (
          <Pricingcards
            key={index}
            title={pkg.title}
            description={pkg.description}
            amount={pkg.amount}
            features={pkg.features}
          />
        ))}
      </div>
    </div>
  )
}

export default Cardssection
