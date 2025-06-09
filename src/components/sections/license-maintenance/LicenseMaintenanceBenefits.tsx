'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  {
    title: 'Continuous Compliance',
    description: 'Stay compliant with evolving regulations and avoid penalties or license suspensions.',
    icon: '/icons/compliance.png',
  },
  {
    title: 'Risk Mitigation',
    description: 'Proactively identify and address compliance risks before they become issues.',
    icon: '/icons/risk.png',
  },
  {
    title: 'Time & Resource Savings',
    description: 'Focus on your core business while we handle the complexities of license maintenance.',
    icon: '/icons/savings.png',
  },
  {
    title: 'Expert Guidance',
    description: 'Access to experienced compliance professionals who understand regulatory requirements.',
    icon: '/icons/guidance.png',
  },
];

const LicenseMaintenanceBenefits = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#021F29] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Benefits of Our Maintenance Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-[#F8F9FA] rounded-lg p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#021F29] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseMaintenanceBenefits; 