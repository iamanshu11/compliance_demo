'use client'; 

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: 'Financial Crime Strategy & Program Design',
    desc: 'Developing enterprise-wide financial crime risk management strategies and designing integrated, adaptable compliance programs that address the convergence of risks like money laundering, fraud, bribery, and sanctions evasion.',
    aos: 'fade-up',
  },
  {
    title: 'Regulatory Change Management & Response',
    desc: 'Providing proactive insights into the evolving global regulatory landscape and expert support in responding effectively to regulatory inquiries, examinations, and complex enforcement actions.',
    aos: 'fade-down',
  },
  {
    title: 'Compliance Technology & Innovation Advisory',
    desc: 'Guiding the strategic selection, implementation, and optimization of RegTech solutions—including AI/ML, advanced analytics, and automation—to significantly enhance detection capabilities, improve operational efficiency, and manage compliance costs.',
    aos: 'fade-up',
  },
  {
    title: 'Risk & Control Framework Optimization',
    desc: 'Sophisticated assessments and enhancing risk assessment methodologies and control frameworks across diverse financial crime typologies for greater effectiveness, efficiency, and defensibility.',
    aos: 'fade-down',
  },
];

const ExpertAMLPolicyTailoring = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4 font-Inter">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full mx-auto mb-8">
          <h2
            className="text-4xl md:text-5xl font-medium text-[#00374A] text-center mb-4 md:mb-0"
            data-aos="fade-down"
          >
            Tailoring your complete <br className="hidden md:block" /> AML/CFT documentation
          </h2>
          <p
            className="text-base mx-auto mt-8 md:text-lg text-[#357187] md:max-w-4xl text-center"
            data-aos="fade-up"
          >
            Ensuring clarity, usability, and alignment with your local regulatory standards.
          </p>
        </div>
        <div className="w-full bg-[#EBEBEB] md:max-w-5xl rounded-2xl shadow p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#666666]">
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
                <p className="text-[#357187] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertAMLPolicyTailoring;
