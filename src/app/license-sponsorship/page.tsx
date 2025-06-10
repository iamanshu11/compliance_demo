'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import LicenseSponsorshipBridge from '@/components/sections/license-sponsorship/LicenseSponsorshipBridge';
import LicenseSponsorshipEmpowering from '@/components/sections/license-sponsorship/LicenseSponsorshipEmpowering';
import MoneyRegulators from '@/components/sections/money-transfer/MoneyRegulators';
import ExploreService from '@/components/sections/ExploreService';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const LicenseSponsorshipPage: React.FC = () => {
  const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="license-sponsorship">
      <HeroSection
        title={"Expert License Sponsorships Solutions"}
        subtitle={"Facilitating compliant partnerships between licensed Principal firms and Agents/Appointed Representatives worldwide."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/licensesponsorships/hero-img.png"
        imageAlt="License Sponsorship"
      />
      <LicenseSponsorshipBridge />
      <LicenseSponsorshipEmpowering />
      <MoneyRegulators />
      <ExploreService />
    </main>
  );
};

export default LicenseSponsorshipPage; 