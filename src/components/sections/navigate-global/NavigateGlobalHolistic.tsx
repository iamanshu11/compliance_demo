'use client'; // Add this if using Next.js app router (for useEffect and AOS)

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const features = [
  {
    icon: '/ml-risk-assessments/end-to-end/ic-1.png',
    title: 'Financial Crime Strategy & Program Design',
    desc: 'Developing enterprise-wide financial crime risk management strategies and designing integrated, adaptable compliance programs that address the convergence of risks like money laundering, fraud, bribery, and sanctions evasion.',
    aos: 'fade-up',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-2.png',
    title: 'Regulatory Change Management & Response',
    desc: 'Providing proactive insights into the evolving global regulatory landscape and expert support in responding effectively to regulatory inquiries, examinations, and complex enforcement actions.',
    aos: 'fade-down',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-3.png',
    title: 'Compliance Technology & Innovation Advisory',
    desc: 'Guiding the strategic selection, implementation, and optimization of RegTech solutions—including AI/ML, advanced analytics, and automation—to significantly enhance detection capabilities, improve operational efficiency, and manage compliance costs.',
    aos: 'fade-up',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-4.png',
    title: 'Risk & Control Framework Optimization',
    desc: 'Sophisticated assessments and enhancing risk assessment methodologies and control frameworks across diverse financial crime typologies for greater effectiveness, efficiency, and defensibility.',
    aos: 'fade-down',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-5.png',
    title: 'Operational Model & Process Transformation',
    desc: 'Assisting in redesigning financial crime compliance operating models, streamlining complex processes like investigations and reporting, and optimizing team structures for peak performance and sustainability.',
    aos: 'fade-up',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-6.png',
    title: 'Subject Matter Expertise',
    desc: 'Delivering deep, actionable expertise in specific high-risk areas, such as navigating complex sanctions regimes, combating sophisticated fraud typologies, implementing robust anti-bribery controls, or enhancing trade/market surveillance.',
    aos: 'fade-down',
  },
];

const NavigateGlobalHolistic = () => {
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
        <div className="w-full mx-auto mb-8">
          <h2
            className="text-4xl md:text-5xl font-medium text-[#00374A] text-center mb-4 md:mb-0"
            data-aos="fade-down"
          >
            Expertise Forged in<br className="hidden md:block" /> Complex Environments
          </h2>
          <p
            className="text-base mx-auto mt-8 md:text-lg text-[#357187] md:max-w-4xl text-center md:text-center"
            data-aos="fade-up"
          >
            Leverage significant experience gained from designing and executing sophisticated ML/TF risk assessments within leading global financial institutions
          </p>
        </div>
        <div className="w-full bg-[#EBEBEB] rounded-2xl shadow p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#666666]">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="flex flex-col gap-2 px-2 md:px-6 py-4"
                data-aos={feature.aos}
                data-aos-delay={idx * 120}
              >
                <div className="flex items-center mb-2">
                  <span className="h-4 w-4 mr-3 rounded-full bg-blue-200 animate-pulse border-2 border-blue-400 shadow" />
                  <h4 className="text-base font-semibold text-[#00374A]">{feature.title}</h4>
                </div>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <p className="text-[#357187] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigateGlobalHolistic;
