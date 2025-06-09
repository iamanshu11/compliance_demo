'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: '/icons/license-application.svg',
    title: 'License Application',
    description: 'Comprehensive support for preparing and submitting license applications to regulatory authorities.',
  },
  {
    icon: '/icons/compliance-management.svg',
    title: 'Compliance Management',
    description: 'Ongoing compliance monitoring and management to ensure adherence to regulatory requirements.',
  },
  {
    icon: '/icons/risk-assessment.svg',
    title: 'Risk Assessment',
    description: 'Thorough risk assessment and mitigation strategies to maintain regulatory compliance.',
  },
  {
    icon: '/icons/regulatory-reporting.svg',
    title: 'Regulatory Reporting',
    description: 'Expert assistance with regulatory reporting requirements and documentation.',
  },
];

const LicenseSponsorshipFeatures = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#021F29] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our License Sponsorship Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#F8F9FA] p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-[#021F29] rounded-lg flex items-center justify-center mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#021F29] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseSponsorshipFeatures; 