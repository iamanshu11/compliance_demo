'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const resources = [
  {
    icon: '/resource/ic-1.png',
    title: 'Blog',
    link: '#',
  },
  {
    icon: '/resource/ic-2.png',
    title: 'Infographics',
    link: '#',
  },
  {
    icon: '/resource/ic-3.png',
    title: 'Research Reports',
    link: '#',
  },
  {
    icon: '/resource/ic-4.png',
    title: 'White Papers',
    link: '#',
  },
  {
    icon: '/resource/ic-5.png',
    title: 'AML Compliance Papers',
    link: '#',
  },
];

const Resources = () => {
  return (
    <section className="w-full bg-[#f7fafb] py-16 px-4 font-Inter">
      <div className="container mx-auto flex flex-col items-center">
        <motion.h2
          className="text-4xl md:text-5xl font-medium text-[#06323c] text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Resources
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl">
          {resources.map((resource, idx) => (
            <motion.div
              key={resource.title}
              className="bg-[#EBEBEB] rounded-2xl shadow p-6 flex flex-col items-center justify-center text-center min-h-[280px] transition-all hover:shadow-lg hover:-translate-y-1 duration-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <Image
                  src={resource.icon}
                  alt={resource.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-[#00374A] mb-4 mt-6">
                {resource.title}
              </h4>
              <a
                href={resource.link}
                className="text-xs px-4 py-2 rounded bg-[#e6f6fa] text-[#06323c] font-medium hover:bg-[#d0eef6] transition flex items-center gap-1 w-max"
              >
                Click here <span className="text-base">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
