'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What services are included in license maintenance?',
    answer: 'Our license maintenance services include renewal applications, compliance monitoring, regulatory reporting, audit preparation, and ongoing support to ensure your licenses remain active and compliant.',
  },
  {
    question: 'How often do licenses need to be renewed?',
    answer: 'License renewal periods vary by jurisdiction and license type. We monitor all your licenses and ensure timely renewal applications are submitted well before expiration dates.',
  },
  {
    question: 'What happens if a license expires?',
    answer: 'License expiration can lead to operational disruptions, penalties, and potential legal issues. Our proactive maintenance services help prevent such situations by ensuring timely renewals.',
  },
  {
    question: 'How do you stay updated with regulatory changes?',
    answer: 'We maintain a dedicated team that continuously monitors regulatory updates across jurisdictions. This ensures we can promptly adapt our maintenance strategies to new requirements.',
  },
  {
    question: 'Can you handle multiple licenses across different jurisdictions?',
    answer: 'Yes, we have experience managing licenses across multiple jurisdictions. Our team is well-versed in various regulatory frameworks and can coordinate maintenance for all your licenses.',
  },
];

const LicenseMaintenanceFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-[#021F29] mb-12"
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
                className="w-full text-left bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#021F29]">
                    {faq.question}
                  </h3>
                  <span className="text-[#021F29] text-2xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseMaintenanceFAQ; 