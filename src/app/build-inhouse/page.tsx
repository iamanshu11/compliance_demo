'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ExploreService from '@/components/sections/ExploreService';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';
import BuildInhouseCompliance from '@/components/sections/build-inhouse/BuildInhouseCompliance';
import BuildInhouseWhy from '@/components/sections/build-inhouse/BuildInhouseWhy';

const BuildInhousePage: React.FC = () => {
    const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="build-inhouse">
      <HeroSection
        title={"Build Inhouse Compliance Function"}
        subtitle={"Support for creating a fit-for-purpose internal AML/CFT compliance structure, processes, and governance framework that meets global regulatory expectations."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/build-inhouse/hero-img.png"
        imageAlt="Aml Program"
      />
      <BuildInhouseCompliance />
      <BuildInhouseWhy />
      <ExploreService />
    </main>
  );
};

export default BuildInhousePage; 