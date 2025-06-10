'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ExploreService from '@/components/sections/ExploreService';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';
import ThirdPartyComprehensive from '@/components/sections/third-party/ThirdPartyComprehensive';
import ThirdPartyComprehensiveCommitment from '@/components/sections/third-party/ThirdPartyComprehensiveCommitment';

const ThirdPartyPage: React.FC = () => {
    const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="third-party">
      <HeroSection
        title={"Third Party Independent Reviews"}
        subtitle={"Expert assessment of your AML/CFT program's design and operational effectiveness against your local regulatory standards."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/third-party/hero-img.png"
        imageAlt="Aml Program"
      />
      <ThirdPartyComprehensive />
      <ThirdPartyComprehensiveCommitment />
      <ExploreService />
    </main>
  );
};

export default ThirdPartyPage; 