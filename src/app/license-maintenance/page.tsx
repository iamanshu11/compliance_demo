'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import LicenseMaintenanceFeatures from '@/components/sections/license-maintenance/LicenseMaintenanceFeatures';
import LicenseMaintenanceProcess from '@/components/sections/license-maintenance/LicenseMaintenanceProcess';
import LicenseMaintenanceBenefits from '@/components/sections/license-maintenance/LicenseMaintenanceBenefits';
import LicenseMaintenanceFAQ from '@/components/sections/license-maintenance/LicenseMaintenanceFAQ';
import LicenseMaintenanceContact from '@/components/sections/license-maintenance/LicenseMaintenanceContact';

const LicenseMaintenancePage: React.FC = () => {
  return (
    <main className="license-maintenance">
      <HeroSection
        title={"License\nMaintenance"}
        subtitle={"Keep your licenses active and compliant with our comprehensive maintenance and renewal support services."}
        buttons={[
          { label: 'Talk to an Expert', href: '#', variant: 'primary' },
          { label: 'Learn More', href: '#', variant: 'outline' },
        ]}
        image="/licensemaintenance/hero-img.png"
        imageAlt="License Maintenance"
      />
      <LicenseMaintenanceFeatures />
      <LicenseMaintenanceProcess />
      <LicenseMaintenanceBenefits />
      <LicenseMaintenanceFAQ />
      <LicenseMaintenanceContact />
    </main>
  );
};

export default LicenseMaintenancePage; 