'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import LicenseSponsorshipFeatures from '@/components/sections/license-sponsorship/LicenseSponsorshipFeatures';
import LicenseSponsorshipProcess from '@/components/sections/license-sponsorship/LicenseSponsorshipProcess';
import LicenseSponsorshipBenefits from '@/components/sections/license-sponsorship/LicenseSponsorshipBenefits';
import LicenseSponsorshipFAQ from '@/components/sections/license-sponsorship/LicenseSponsorshipFAQ';
import LicenseSponsorshipContact from '@/components/sections/license-sponsorship/LicenseSponsorshipContact';

const LicenseSponsorshipPage: React.FC = () => {
  return (
    <main className="license-sponsorship">
      <HeroSection
        title={"License\nSponsorship"}
        subtitle={"Partner with us to obtain and maintain your financial licenses through our expert sponsorship services."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', variant: 'primary' },
          { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/licensesponsorships/hero-img.png"
        imageAlt="License Sponsorship"
      />
      <LicenseSponsorshipFeatures />
      <LicenseSponsorshipProcess />
      <LicenseSponsorshipBenefits />
      <LicenseSponsorshipFAQ />
      <LicenseSponsorshipContact />
    </main>
  );
};

export default LicenseSponsorshipPage; 