'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import LicenseMaintenancePartner from '@/components/sections/license-maintenance/LicenseMaintenancePartner';
import MoneyRegulators from '@/components/sections/money-transfer/MoneyRegulators';
import ExploreService from '@/components/sections/ExploreService';
import LicenseMaintenancePartnerActive from '@/components/sections/license-maintenance/LicenseMaintenancePartnerActive';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const LicenseMaintenancePage: React.FC = () => {
  const { openPopup } = usePopupTalkToExpert();
  return (
    <main className="license-maintenance">
      <HeroSection
        title={"Stay Licensed, Stay Compliant"}
        subtitle={"Expert oversight of renewals, reporting and regulatory requirements to prevent costly compliance lapses."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', onClick: openPopup, variant: 'primary' },
          // { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/licensemaintenance/hero-img.png"
        imageAlt="License Maintenance"
      />
      <LicenseMaintenancePartner />
      <MoneyRegulators />
      <ExploreService />
      <LicenseMaintenancePartnerActive />
    </main>
  );
};

export default LicenseMaintenancePage; 