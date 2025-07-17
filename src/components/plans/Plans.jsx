import React, { useState } from 'react';
import styles from './PricingPlans.module.css';
import PricingCard from './PricingCard';
import { Link } from 'react-router-dom';

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className={styles.pricingContainer}>
      <h1>Choose the Plan That Fits Your Health Journey</h1>
      <p>
        Discover the ideal plan to fuel your business growth. Our pricing options are carefully
        crafted to cater to businesses.
      </p>

      <div className={styles.billingToggle}>
        <button
          className={billingCycle === 'monthly' ? styles.active : ''}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button
          className={billingCycle === 'yearly' ? styles.active : ''}
          onClick={() => setBillingCycle('yearly')}
        >
          Yearly
        </button>
      </div>
       
      <div className={styles.planCards}>
        <Link className={styles.link} to={'createaccount'}>
        <PricingCard
          title="Basic"
          subtitle="Best for Personal use."
          price="Free"
          features={[
            'Employee directory',
            'Task Management',
            'Calendar Integration',
            'File Storage',
            'Communication Tools',
            'Reporting and Analytics',
          ]}
          isPopular={true}
        />
        </Link>
        <Link className={styles.link} to={'createaccount'}>
        <PricingCard
          title="Premium"
          subtitle="For large teams & corporations"
          price="10,000 FCFA /month"
          features={[
            'Advanced employee directory',
            'Project management',
            'Resource scheduling',
            'Version Control',
            'Team collaboration',
            'Advanced analytics',
          ]}
        />
        </Link>
        
      </div>

      <div className={styles.enterpriseSection}>
        <h3>Enterprise or Clinic Plan?</h3>
        <p>
          Are you a healthcare provider, school, or employer?{' '}
          <a href="#">Contact Us</a> for a custom solution tailored to your organization’s needs.
        </p>
      </div>
    </div>
  );
};

export default Plans;
