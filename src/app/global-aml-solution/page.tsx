'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ExploreService from '@/components/sections/ExploreService';
import GlobalAmlSolutionendtoend from '@/components/sections/GlobalAmlSolution/GlobalAmlSolutionendtoend';
import GlobalAmlSolutionTailored from '@/components/sections/GlobalAmlSolution/GlobalAmlSolutionTailored';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const GlobalAmlSolutionPage: React.FC = () => {
    const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="global-aml-solution">
      <HeroSection
        title={"Global AML/CFT Training Solutions"}
        subtitle={"Role-specific training programs designed to meet global regulatory mandates, enhance risk awareness, and embed compliant behaviour across your organization."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/global-aml/hero-img.png"
        imageAlt="Aml Program"
      />
      <GlobalAmlSolutionendtoend />
      <GlobalAmlSolutionTailored />
      <ExploreService />
    </main>
  );
};

export default GlobalAmlSolutionPage; 