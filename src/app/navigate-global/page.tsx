'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ExploreService from '@/components/sections/ExploreService';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';
import BuildInhouseWhy from '@/components/sections/build-inhouse/BuildInhouseWhy';
import NavigateGlobalHolistic from '@/components/sections/navigate-global/NavigateGlobalHolistic';

const NavigateGlobalPage: React.FC = () => {
    const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="navigate-global">
      <HeroSection
        title={"Navigate Global Financial Crime Complexity"}
        subtitle={"Expert advisory helping your organization design, implement, and optimize integrated strategies and innovative solutions to combat financial crime effectively and efficiently across global operations."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/build-inhouse/hero-img.png"
        imageAlt="Aml Program"
      />
      <NavigateGlobalHolistic />
      <BuildInhouseWhy />
      <ExploreService />
    </main>
  );
};

export default NavigateGlobalPage; 