'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'What is a Money Transmitter License?',
    answer: 'A Money Transmitter License is a regulatory requirement for businesses that transfer money on behalf of others. It ensures compliance with anti-money laundering and consumer protection regulations.',
  },
  {
    question: 'How long does it take to obtain a license?',
    answer: 'The timeline varies by jurisdiction, typically ranging from 3-6 months. Our team works efficiently to minimize delays and ensure a smooth application process.',
  },
  {
    question: 'What documents are required for licensing?',
    answer: 'Required documents typically include business plans, financial statements, compliance policies, background checks, and proof of insurance. We help prepare all necessary documentation.',
  },
  {
    question: 'Do I need a license in every state?',
    answer: 'Yes, if you plan to operate in multiple states, you\'ll need licenses for each state where you conduct business. We help navigate multi-state licensing requirements.',
  },
  {
    question: 'What are the ongoing compliance requirements?',
    answer: 'Ongoing requirements include regular reporting, record-keeping, audits, and maintaining compliance programs. We provide continuous support to meet these requirements.',
  },
];

const MoneyTransferFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#021F29] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full text-left bg-white rounded-lg p-6 shadow-md flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-[#021F29]">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`text-[#1ecbe1] text-xl transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-white mt-2 rounded-lg p-6 shadow-md"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoneyTransferFAQ; 