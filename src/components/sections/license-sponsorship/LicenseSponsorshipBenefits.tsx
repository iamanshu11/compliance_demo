'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  {
    icon: '/icons/expertise.svg',
    title: 'Expert Guidance',
    description: 'Access to experienced professionals who understand regulatory requirements and licensing processes.',
  },
  {
    icon: '/icons/time-saving.svg',
    title: 'Time Efficiency',
    description: 'Streamlined processes and expert handling of documentation to save your valuable time.',
  },
  {
    icon: '/icons/compliance.svg',
    title: 'Compliance Assurance',
    description: 'Ensure your business remains compliant with all regulatory requirements and standards.',
  },
  {
    icon: '/icons/support.svg',
    title: 'Ongoing Support',
    description: 'Continuous assistance with compliance management and regulatory reporting after license approval.',
  },
];

const LicenseSponsorshipBenefits = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#021F29] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Benefits of Our License Sponsorship
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
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
                  src={benefit.icon}
                  alt={benefit.title}
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#021F29] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseSponsorshipBenefits; 