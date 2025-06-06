'use client';

import { motion } from 'framer-motion';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const MoneyTransferContact = () => {
  const { openPopup } = usePopupTalkToExpert();

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-[#021F29] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contact our experts today to begin your money transmitter licensing journey.
          </motion.p>
          <motion.button
            className="bg-[#021F29] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#1ecbe1] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={openPopup}
          >
            Talk to an Expert
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default MoneyTransferContact; 