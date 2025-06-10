'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ExploreService from '@/components/sections/ExploreService';
import AmlProgramComprehensive from '@/components/sections/aml-program/AmlProgramComprehensive';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const AmlProgramPage: React.FC = () => {
  const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="aml-program">
      <HeroSection
        title={"Develop & Maintain a Robust Global AML/CFT Program"}
        subtitle={"Expert assistance in drafting and implementing your tailored, risk-based AML/CFT program to meet stringent global regulatory requirements."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/aml/hero-img.png"
        imageAlt="Aml Program"
      />
      <AmlProgramComprehensive />
      <ExploreService />
    </main>
  );
};

export default AmlProgramPage; 