'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: '/icons/license-renewal.png',
    title: 'License Renewal',
    description: 'Timely assistance with license renewal applications and documentation to ensure continuous operation.',
  },
  {
    icon: '/icons/compliance-monitoring.png',
    title: 'Compliance Monitoring',
    description: 'Ongoing monitoring of regulatory changes and updates to keep your licenses compliant.',
  },
  {
    icon: '/icons/reporting-support.png',
    title: 'Reporting Support',
    description: 'Expert guidance in preparing and submitting required regulatory reports and filings.',
  },
  {
    icon: '/icons/audit-preparation.png',
    title: 'Audit Preparation',
    description: 'Comprehensive support in preparing for regulatory audits and examinations.',
  },
];

const LicenseMaintenanceFeatures = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#021F29] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Comprehensive Maintenance Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-[#F8F9FA] rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#021F29] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseMaintenanceFeatures; 