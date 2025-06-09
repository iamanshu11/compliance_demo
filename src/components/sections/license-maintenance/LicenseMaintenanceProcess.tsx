'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Initial Assessment',
    description: 'We evaluate your current licenses, compliance status, and maintenance requirements.',
    icon: '/icons/assessment.png',
  },
  {
    number: '02',
    title: 'Compliance Review',
    description: 'Thorough review of your compliance documentation and procedures.',
    icon: '/icons/review.png',
  },
  {
    number: '03',
    title: 'Renewal Planning',
    description: 'Strategic planning for license renewals and regulatory updates.',
    icon: '/icons/planning.png',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description: 'Continuous monitoring and support to maintain compliance.',
    icon: '/icons/support.png',
  },
];

const LicenseMaintenanceProcess = () => {
  return (
    <section className="w-full bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#021F29] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Maintenance Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#021F29] text-white rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#021F29] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseMaintenanceProcess; 