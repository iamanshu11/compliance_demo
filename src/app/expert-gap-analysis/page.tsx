'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ExploreService from '@/components/sections/ExploreService';
import ExpertGapAnalysisComprehensive from '@/components/sections/expert-gap-analysis/ExpertGapAnalysisComprehensive';
import ExpertGapAnalysisGapAnalysis from '@/components/sections/expert-gap-analysis/ExpertGapAnalysisGapAnalysis';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const ExpertGapAnalysisPage: React.FC = () => {
  const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="expert-gap-analysis">
      <HeroSection
        title={"Expert Gap Analysis & Remediation Roadmap"}
        subtitle={"Gain objective insights into your AML/CFT program's effectiveness and identify critical gaps against global regulatory standards, providing a clear, actionable path to enhancement."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/expert-gap-analysis/hero-img.png"
        imageAlt="Aml Program"
      />
      <ExpertGapAnalysisComprehensive />
      <ExpertGapAnalysisGapAnalysis />
      <ExploreService />
    </main>
  );
};

export default ExpertGapAnalysisPage; 