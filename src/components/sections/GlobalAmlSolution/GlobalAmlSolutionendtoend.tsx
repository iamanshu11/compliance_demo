'use client'; // Required if using App Router

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const features = [
  {
    icon: '/global-aml/ic/ic-1.png',
    title: 'Training Needs Analysis',
    desc: 'Identifying precise training requirements based on employee roles, specific jurisdictional regulations, your risk assessment findings, and any audit/review recommendations.',
    aos: 'fade-up',
  },
  {
    icon: '/global-aml/ic/ic-2.png',
    title: 'Custom Curriculum & Content Development',
    desc: 'Creating tailored, engaging training materials that reflect your specific risks, internal policies, and applicable regulatory nuances.',
    aos: 'fade-down',
  },
  {
    icon: '/global-aml/ic/ic-3.png',
    title: 'Role-Specific Training Modules',
    desc: 'Developing targeted content designed for front-line teams, to strategic risk insights for senior management and board members.',
    aos: 'fade-up',
  },
  {
    icon: '/global-aml/ic/ic-4.png',
    title: 'Program Updates & Refresher Training',
    desc: 'Ongoing support to keep training content current with regulatory changes and delivering required annual or periodic refresher courses to maintain awareness.',
    aos: 'fade-down',
  },
];

const GlobalAmlSolutionendtoend = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="w-full bg-[#f7fafb] py-16 px-4 font-Inter">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-medium text-[#00374A] text-center mb-4" data-aos="fade-down">
          End-to-end AML/CFT Training Solutions
        </h2>
        <p className="text-base md:text-lg text-[#00374A] text-center max-w-3xl mb-10" data-aos="fade-up">
          In-depth diagnostic evaluation identifying discrepancies between your program&apos;s design, implementation,
          and current regulatory requirements or industry best practices worldwide.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-[#EBEBEB] rounded-2xl shadow p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg group"
              data-aos={feature.aos}
              data-aos-delay={idx * 120}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
                className="mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h4 className="text-lg font-semibold text-[#000000] mb-2">{feature.title}</h4>
              <p className="text-[#000000] text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalAmlSolutionendtoend;
