'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  {
    icon: '/icons/expert-guidance.png',
    title: 'Expert Guidance',
    description: 'Access to experienced professionals who understand the complexities of money transmitter licensing.',
  },
  {
    icon: '/icons/time-saving.png',
    title: 'Time Saving',
    description: 'Streamlined process that saves you time and resources in obtaining your license.',
  },
  {
    icon: '/icons/risk-reduction.png',
    title: 'Risk Reduction',
    description: 'Minimize risks and ensure compliance with all regulatory requirements.',
  },
  {
    icon: '/icons/ongoing-support.png',
    title: 'Ongoing Support',
    description: 'Continuous assistance and support throughout your licensing journey and beyond.',
  },
];

const MoneyTransferBenefits = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#021F29] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#021F29] mb-3">
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

export default MoneyTransferBenefits; 