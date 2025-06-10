'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ExploreService from '@/components/sections/ExploreService';
import MLRiskAssessmentsEndToEnd from '@/components/sections/ml-risk-assesments/MLRiskAssessmentsEndToEnd';
import MLRiskAssessmentsExpertise from '@/components/sections/ml-risk-assesments/MLRiskAssessmentsExpertise';
import MLRiskAssessmentsCommitment from '@/components/sections/ml-risk-assesments/MLRiskAssessmentsCommitment';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const MlRiskAssessmentsPage: React.FC = () => {
  const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="ml-risk-assessments">
      <HeroSection
        title={"ML/TF Risk Assessments"}
        subtitle={"Expert identification, analysis, and documentation of your specific Money Laundering & Terrorist Financing (ML/TF) risks using sophisticated, globally informed methodologies."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/ml-risk-assessments/hero-img.png"
        imageAlt="Aml Program"
      />
      <MLRiskAssessmentsEndToEnd />
      <MLRiskAssessmentsExpertise />
      <MLRiskAssessmentsCommitment />
      <ExploreService />
    </main>
  );
};

export default MlRiskAssessmentsPage; 