'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


interface ComplianceEasierProps {
  id?: string;
}

const cards = [
  {
    icon: '/licensing-ic/license-ic-1.gif',
    title: 'Money Transmitter Licensing',
    desc: 'End-to-end support to help you secure the licenses required to launch and operate legally.',
    link: '/money-transfer',
  },
  {
    icon: '/licensing-ic/license-ic-2.gif',
    title: 'License Maintenance',
    desc: 'Ongoing assistance to keep your licenses active, valid, and aligned with regulatory updates.',
    link: '/license-maintenance',
  },
  {
    icon: '/licensing-ic/license-ic-3.gif',
    title: 'License Sponsorship',
    desc: "Access to sponsor partnerships where direct licensing isn't feasible.",
    link: '/license-sponsorships',
  },
  {
    icon: '/licensing-ic/license-ic-4.gif',
    title: 'Existing License Acquisition',
    desc: 'Guidance on acquiring pre-approved licenses to fast-track market entry.',
    link: '/existing-license',
  },
];

const ComplianceEasier = ({ id }: ComplianceEasierProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id={id} className="w-full bg-[#f7fafb] py-16 px-4 font-Inter">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-medium text-[#06323c] text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Make Compliance Easier
        </motion.h2>
        <motion.p
          className="text-lg text-[#20505c] text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We simplify the complex world of compliance through expert support across licensing, advisory, and digital tools.
        </motion.p>

        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl font-normal text-[#06323c] text-center">Licensing</h3>
          <div className="flex-1 border-t border-[#20505c] opacity-40"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              className="bg-[#EBEBEB] rounded-2xl shadow-sm p-6 flex flex-col items-start min-h-[270px] cursor-pointer transition-all"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 8px 32px 0 rgba(34, 139, 230, 0.18)',
                backgroundColor: '#f3f4f6',
                transition: { type: 'tween', duration: 0.22, ease: [0.4, 0, 0.2, 1] },
              }}
            >
              <Image
                src={card.icon}
                alt={card.title}
                className="h-12 w-12 mb-4"
                width={48}
                height={48}
              />
              <h4 className="text-lg font-semibold text-[#00374A] mb-2">{card.title}</h4>
              <p className="text-[#00374A] text-sm mb-6 flex-1">{card.desc}</p>
              <Link
                href={card.link}
                className="text-xs px-4 py-2 rounded bg-[#f3f4f6] text-[#06323c] font-medium hover:bg-[#e0e7ef] transition flex items-center gap-1"
              >
                LEARN MORE <span className="text-base">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceEasier;
