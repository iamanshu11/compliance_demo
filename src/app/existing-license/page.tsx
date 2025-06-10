'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ExploreService from '@/components/sections/ExploreService';
import ExistingLicenseExpert from '@/components/sections/existing-license/ExistingLicenseExpert';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const ExistingLicensePage: React.FC = () => {
  const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="existing-license">
      <HeroSection
        title={"Acquire Licensed Money Service Businesses"}
        subtitle={"Navigating the complexities of due diligence, regulatory approvals, and transaction support for acquiring licensed entities worldwide."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/existing-license/hero-img.png"
        imageAlt="Existing License"
      />
      <ExistingLicenseExpert />
      <ExploreService />
    </main>
  );
};

export default ExistingLicensePage; 