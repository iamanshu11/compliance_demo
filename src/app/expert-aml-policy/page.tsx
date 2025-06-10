'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ExploreService from '@/components/sections/ExploreService';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';
import ExpertAMLPolicyTailoring from '@/components/sections/expert-aml-policy/ExpertAMLPolicyTailoring';
import ExpertAMLPolicyMeeting from '@/components/sections/expert-aml-policy/ExpertAMLPolicyMeeting';

const ExpertAmlPolicyPage: React.FC = () => {
    const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="expert-aml-policy">
      <HeroSection
        title={"Expert AML/CFT Policy, Procedure & Control Documentation"}
        subtitle={"Develop clear, comprehensive, and regulator-ready documentation that translates your AML/CFT strategy and risk assessment into actionable, compliant guidance for your global operations."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/expert-aml-policy/hero-img.png"
        imageAlt="Aml Program"
      />
      <ExpertAMLPolicyTailoring />
      <ExpertAMLPolicyMeeting />
      <ExploreService />
    </main>
  );
};

export default ExpertAmlPolicyPage; 