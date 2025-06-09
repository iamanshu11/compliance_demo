'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a thorough consultation to understand your business needs and licensing requirements.',
    icon: '/icons/consultation.svg',
  },
  {
    number: '02',
    title: 'Application Preparation',
    description: 'Our team prepares and submits your license application with all required documentation.',
    icon: '/icons/application.svg',
  },
  {
    number: '03',
    title: 'Regulatory Review',
    description: 'We manage the regulatory review process and address any queries from authorities.',
    icon: '/icons/review.svg',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description: 'Continuous support for compliance management and regulatory reporting after license approval.',
    icon: '/icons/support.svg',
  },
];

const LicenseSponsorshipProcess = () => {
  return (
    <section className="w-full bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#021F29] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#021F29] rounded-lg flex items-center justify-center mr-4">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
                <span className="text-2xl font-bold text-[#021F29]">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#021F29] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseSponsorshipProcess; 