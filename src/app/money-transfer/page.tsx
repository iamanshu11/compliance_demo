'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import MoneyRegulators from '@/components/sections/money-transfer/MoneyRegulators';
import SpecializedLicensingSupport from '@/components/sections/money-transfer/SpecializedLicensingSupport';
import ExploreService from '@/components/sections/ExploreService';
import MoneyObtain from '@/components/sections/money-transfer/MoneyObtain';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const MoneyTransferPage: React.FC = () => {
  const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="money-transfer">
      <HeroSection
        title={"Navigate Money Transfer Licensing"}
        subtitle={"In-depth, practical support shaped by years of experience to meet all \nlicensing and compliance requirements"}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/money-transfer/hero-img.png"
        imageAlt="Money Transmitter Licensing"
      />
      <MoneyRegulators />
      <SpecializedLicensingSupport />
      <ExploreService />
      <MoneyObtain />
    </main>
  );
};

export default MoneyTransferPage; 