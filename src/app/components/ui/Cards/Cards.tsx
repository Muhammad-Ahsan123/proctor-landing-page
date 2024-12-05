import React from 'react';
import styles from "@/styles/ui/Cards.module.scss";
import Facesvg from "../../../Assets/Face.svg";
import Gadgetsvg from "../../../Assets/Activity.svg";
import Voicesvg from "../../../Assets/Voice.svg";
import Activitysvg from "../../../Assets/Gadget.svg";
import Image from 'next/image';

const cardData = [
  {
    title: "Face Detection",
    description: "Enhance security with face detection, including eyes detection to ensure focused attention, even with glasses.",
    image: Facesvg
  },
  {
    title: "Activity Detection",
    description: "Enhance security with face detection, including eyes detection to ensure focused attention, even with glasses.",
    image: Activitysvg
  },
  {
    title: "Voice Detection",
    description: "Enhance security with face detection, including eyes detection to ensure focused attention, even with glasses.",
    image: Voicesvg
  },
  {
    title: "Gadget Detection",
    description: "Enhance security with face detection, including eyes detection to ensure focused attention, even with glasses.",
    image: Gadgetsvg
  }
];

function Cards() {
  return (
    <div className={styles.maincarddiv}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card1}>
          <Image className={styles.imagecard} src={card.image} alt={card.title} />
          <p className={styles.cardtitle}>{card.title}</p>
          <p className={styles.carddiscription}>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
