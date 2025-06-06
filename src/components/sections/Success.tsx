'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

type Story = {
  img: string;
  title: string;
  desc: string;
  pdf: string;
};

const stories: Story[] = [
  {
    img: '/success/img-1.png',
    title: 'Cracking an International Money Laundering Network',
    desc: 'The Hidden Trail – From the UK to Nigeria via Benin, Cameroon & Gabon',
    pdf: '/pdf/pdf-1.pdf',
  },
  {
    img: '/success/img-2.png',
    title: 'Exposing a Major Money Laundering & Identity Theft Network in Brazil',
    desc: 'See how we tracked, exposed, and stopped a financial crime operation. Download the full case study now!',
    pdf: '/pdf/pdf-2.pdf',
  },
  {
    img: '/success/img-3.png',
    title: 'The Deepfake Launderer – A High-Tech Manhunt That Ended in Arrest',
    desc: 'The case started with a single, unremarkable customer from Canada',
    pdf: '/pdf/pdf-3.pdf',
  },
];

const Success = () => {
  const { openPopup } = usePopupTalkToExpert();
  const [pdfToShow, setPdfToShow] = useState<string | null>(null);

  const closeModal = () => setPdfToShow(null);

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
    <section className="w-full bg-[#f7fafb] py-16 px-4 font-Inter">
      <div className="container mx-auto flex flex-col items-center">
        <motion.h2
          className="text-4xl md:text-5xl font-medium text-[#06323c] text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Success Stories
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stories.map((story) => (
            <motion.div
              key={story.title}
              className="bg-white rounded-2xl shadow flex flex-col md:flex-row overflow-hidden min-h-[320px] transition-all duration-200"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.img
                src={story.img}
                alt={story.title}
                className="w-full md:w-1/2 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-col justify-center p-8 flex-1">
                <motion.h4 className="text-lg font-semibold text-[#06323c] mb-2">
                  {story.title}
                </motion.h4>
                <p className="text-[#20505c] text-base mb-4">{story.desc}</p>
                <button
                  className="mt-2 px-5 py-2 rounded bg-[#06232c] text-white font-medium hover:bg-[#164d60] transition"
                  onClick={() => setPdfToShow(story.pdf)}
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="mt-4 px-8 py-3 rounded-full bg-[#06232c] text-white font-medium shadow hover:bg-[#164d60] transition-all duration-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={openPopup}
        >
          Talk to an Expert
        </motion.button>
      </div>

      {pdfToShow && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full relative flex flex-col">
            <div className="flex justify-end p-2 border-b rounded-t-lg">
              <button
                className="text-2xl font-bold text-gray-700 hover:text-red-500"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <iframe
              src={`${pdfToShow}#toolbar=0`}
              title="Case Study PDF"
              className="w-full h-[70vh] rounded-b-lg"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Success;
