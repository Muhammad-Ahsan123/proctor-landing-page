// Button.tsx
import React from 'react';
import styles from "@/styles/ui/button.module.scss";

interface ButtonProps {
  text: string; 
  variant?: 'primary' | 'secondary'; 
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'primary' }) => {
  return (
    <button className={`${styles.button} ${variant === 'secondary' ? styles.secondary : styles.primary}`}>
      {text}
    </button>
  );
}

export default Button;
