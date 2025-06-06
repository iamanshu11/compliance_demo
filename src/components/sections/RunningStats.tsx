'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Human Years of Experience', value: 10 },
  { label: 'Concurrent Projects', value: 20 },
  { label: 'Countries Worked In', value: 17 },
];

const RunningStats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-20">
      <div
        ref={ref}
        className="flex flex-col md:flex-row justify-center items-center text-center"
      >
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center mb-6 md:mb-0"
            >
              <span className="text-blue-600 dark:text-green-400 text-4xl font-bold">
                {inView && <CountUp end={stat.value} duration={2.5} />}+
              </span>
              <div className="text-xl font-medium text-gray-800 dark:text-white mt-1">
                {stat.label}
              </div>
            </motion.div>

            {/* Separator: horizontal on mobile, vertical on desktop */}
            {index < stats.length - 1 && (
              <>
                {/* Mobile (horizontal) */}
                <div className="block md:hidden w-60 h-0.5 bg-gray-300 dark:bg-gray-600 my-2"></div>
                {/* Desktop (vertical) */}
                <div className="hidden md:block h-12 w-0.5 bg-gray-300 dark:bg-gray-600 mx-6"></div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default RunningStats;
