'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a thorough assessment of your business needs and licensing requirements.',
  },
  {
    number: '02',
    title: 'Documentation Preparation',
    description: 'Our team helps prepare all necessary documentation and compliance materials.',
  },
  {
    number: '03',
    title: 'Application Submission',
    description: 'We handle the complete application process and maintain communication with regulatory authorities.',
  },
  {
    number: '04',
    title: 'Compliance Setup',
    description: 'We help establish your compliance framework and ongoing monitoring systems.',
  },
];

const MoneyTransferProcess = () => {
  return (
    <section className="w-full bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#021F29] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Licensing Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-[#1ecbe1] mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#021F29] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-[#1ecbe1] transform translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoneyTransferProcess; 