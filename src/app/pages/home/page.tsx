'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import RunningStats from '@/components/sections/RunningStats';
import ComplianceEasier from '@/components/sections/ComplianceEasier';
import HomeConsulting from '@/components/sections/HomeConsulting';
import Tools from '@/components/sections/Tools';
import Industries from '@/components/sections/Industries';
import Resources from '@/components/sections/Resources';
import Success from '@/components/sections/Success';
import Trust from '@/components/sections/Trust';
import HomeKnowledge from '@/components/sections/HomeKnowledge';
import HomeContact from '@/components/sections/HomeContact';

export default function Home() {
  // Smooth scroll handler
  const handleLearnMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById('compliance-easier-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="home">
      <HeroSection
        title={"Your trusted partner in\ncompliance consulting"}
        subtitle={"Proven Expertise for Banks, Fintechs,\nMSBs & across diverse regulated industries"}
        buttons={[
          { label: 'Talk to an Expert', href: '#', variant: 'primary' },
          { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/hero-home-right.png"
        imageAlt="Consulting Team"
      />
      <RunningStats />
      <ComplianceEasier id="compliance-easier-section" />
      <HomeConsulting />
      <Tools />
      <Industries />
      <Resources />
      <Success />
      <Trust />
      <HomeKnowledge />
      <HomeContact />
    </main>
  );
} 