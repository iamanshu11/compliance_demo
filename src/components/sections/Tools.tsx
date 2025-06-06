'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const tools = [
  {
    icon: '/tools/ic-1.png',
    title: 'Sanction Screening',
    desc: 'Automated screening against global watchlists to block high-risk transactions.',
  },
  {
    icon: '/tools/ic-2.png',
    title: 'KYC (Coming Soon)',
    desc: 'Know Your Customer (KYC) tools launching soon to strengthen onboarding and verification.',
  },
];

const Tools = () => {
  const { openPopup } = usePopupTalkToExpert();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full min-h-[60vh] bg-[#06232c] flex flex-col items-center justify-center py-20 px-4 font-Inter">
      <motion.h2
        className="text-4xl md:text-5xl font-medium text-white text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tools
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-16 mb-12 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {tools.map(({ icon, title, desc }) => (
          <motion.div
            key={title}
            className="flex flex-col items-center w-full max-w-md group"
            variants={itemVariants}
          >
            <div className="mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative h-24 w-24 mx-auto"
              >
                <Image src={icon} alt={title} fill style={{ objectFit: 'contain' }} />
              </motion.div>
            </div>

            <motion.h3
              className="text-xl font-semibold text-[#2ec4b6] mb-2 text-center group-hover:text-[#38f9d7] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {title}
            </motion.h3>

            <p className="text-white text-base text-center max-w-xs">{desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="mt-4 px-8 py-3 rounded-full bg-[#e6f6fa] text-[#06323c] font-medium shadow hover:bg-[#d0eef6] transition-all duration-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={openPopup}
        type="button"
      >
        Talk to an Expert
      </motion.button>
    </section>
  );
};

export default Tools;
