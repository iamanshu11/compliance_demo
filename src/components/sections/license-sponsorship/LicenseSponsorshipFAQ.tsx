'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is license sponsorship?',
    answer: 'License sponsorship is a service where we act as your partner in obtaining and maintaining financial licenses. We handle the application process, compliance requirements, and ongoing regulatory obligations on your behalf.',
  },
  {
    question: 'How long does the license application process take?',
    answer: 'The duration varies depending on the type of license and jurisdiction. Typically, it can take anywhere from 3 to 6 months. We work efficiently to minimize delays and keep you informed throughout the process.',
  },
  {
    question: 'What types of licenses do you sponsor?',
    answer: 'We sponsor various types of financial licenses including money transmitter licenses, payment processing licenses, and other financial services licenses. Contact us to discuss your specific licensing needs.',
  },
  {
    question: 'What happens after the license is approved?',
    answer: 'After license approval, we continue to provide support with compliance management, regulatory reporting, and ongoing maintenance to ensure your license remains active and compliant.',
  },
  {
    question: 'Do you handle multiple jurisdictions?',
    answer: 'Yes, we have experience managing licenses across multiple jurisdictions. Our team is well-versed in various regulatory frameworks and can coordinate the licensing process for different regions.',
  },
];

const LicenseSponsorshipFAQ = () => {
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

export default LicenseSponsorshipFAQ; 