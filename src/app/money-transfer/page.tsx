'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import MoneyTransferFeatures from '@/components/sections/money-transfer/MoneyTransferFeatures';
import MoneyTransferProcess from '@/components/sections/money-transfer/MoneyTransferProcess';
import MoneyTransferBenefits from '@/components/sections/money-transfer/MoneyTransferBenefits';
import MoneyTransferFAQ from '@/components/sections/money-transfer/MoneyTransferFAQ';
import MoneyTransferContact from '@/components/sections/money-transfer/MoneyTransferContact';

const MoneyTransferPage: React.FC = () => {
  return (
    <main className="money-transfer">
      <HeroSection
        title={"Money Transmitter\nLicensing"}
        subtitle={"Navigate the complex landscape of money transmitter licensing with our expert guidance and comprehensive support."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', variant: 'primary' },
          { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/money-transfer/hero-img.png"
        imageAlt="Money Transmitter Licensing"
      />
      <MoneyTransferFeatures />
      <MoneyTransferProcess />
      <MoneyTransferBenefits />
      <MoneyTransferFAQ />
      <MoneyTransferContact />
    </main>
  );
};

export default MoneyTransferPage; 