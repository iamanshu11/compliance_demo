'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Button {
  label: string;
  href?: string;
  variant: 'primary' | 'outline';
  onClick?: () => void;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttons?: Button[];
  image: string;
  imageAlt?: string;
  imageClass?: string;
  children?: React.ReactNode;
}

const HeroSection = ({
  title,
  subtitle,
  buttons = [],
  image,
  imageAlt = '',
  imageClass = '',
  children,
}: HeroSectionProps) => {
  const openPopup = () => {
    // Implement your popup logic here
    console.log('Open popup');
  };

  return (
    <section className="w-full bg-[#021F29] min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-6 py-12 w-full">
        {/* Left: Text */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-start w-full py-6 lg:px-10 mb-10 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl lg:text-5xl font-medium text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-lg text-[#c7d6d9] mb-8 whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          <motion.div 
            className="flex gap-4 mb-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {buttons.map((btn) => (
              btn.label === 'Talk to an Expert' ? (
                <motion.button
                  key={btn.label}
                  type="button"
                  className={
                    `px-6 py-3 rounded-lg text-base font-medium transition ` +
                    (btn.variant === 'outline'
                      ? 'border border-[#c7d6d9] text-[#c7d6d9] bg-transparent hover:bg-[#0b3442]'
                      : 'bg-blue-50 text-[#021F29] hover:bg-blue-100')
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </motion.button>
              ) : btn.onClick ? (
                <motion.button
                  key={btn.label}
                  type="button"
                  className={
                    `px-6 py-3 rounded-lg text-base font-medium transition ` +
                    (btn.variant === 'outline'
                      ? 'border border-[#c7d6d9] text-[#c7d6d9] bg-transparent hover:bg-[#0b3442]'
                      : 'bg-blue-50 text-[#021F29] hover:bg-blue-100')
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </motion.button>
              ) : (
                <motion.a
                  key={btn.label}
                  href={btn.href || '#'}
                  className={
                    `px-6 py-3 rounded-lg text-base font-medium transition ` +
                    (btn.variant === 'outline'
                      ? 'border border-[#c7d6d9] text-[#c7d6d9] bg-transparent hover:bg-[#0b3442]'
                      : 'bg-blue-50 text-[#021F29] hover:bg-blue-100')
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {btn.label}
                </motion.a>
              )
            ))}
          </motion.div>
          {children}
          <motion.hr 
            className="border-[#c7d6d9]/40 w-3/4 mt-8"
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>
        {/* Right: Image with overlay and dots */}
        <motion.div
          className="flex-1 flex items-center justify-center relative w-full lg:px-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Image with border overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-full">
            <Image
              src={image}
              alt={imageAlt}
              width={800}
              height={600}
              className={`w-full h-full object-cover ${imageClass}`}
            />
            <div className="absolute inset-0 rounded-2xl border-2 border-[#1e4b5c] pointer-events-none" style={{borderTopRightRadius: '32px', borderBottomLeftRadius: '32px'}}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 