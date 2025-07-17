import React from 'react';
import styles from './PricingCard.module.css';

const PricingCard = ({ title, subtitle, price, features, isPopular }) => {
  return (
    <div className={`${styles.card} ${isPopular ? styles.popular : ''}`}>
      {isPopular && <div className={styles.tag}>Popular</div>}
      <h2>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.price}>{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className={styles.getStarted}>Get Started</button>
      <a href="#">Learn More</a>
    </div>
  );
};

export default PricingCard;
