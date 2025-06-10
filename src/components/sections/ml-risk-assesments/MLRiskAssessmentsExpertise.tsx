'use client'; // Required if using Next.js App Router (app/ directory)

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const features = [
  {
    icon: '/ml-risk-assessments/end-to-end/ic-1.png',
    title: 'Tailored & Defensible Methodology',
    desc: 'We design robust, evidence-based risk assessment methodologies that are precisely tailored to your business model and withstand rigorous scrutiny.',
    aos: 'fade-up',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-2.png',
    title: 'Uncovering Your True Risk Exposures',
    desc: 'Deep-dive analyses to identify and evaluate the nuanced inherent ML/TF risks embedded within your specific customer segments, product features, transaction flows, delivery channels, and geographic footprint.',
    aos: 'fade-down',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-3.png',
    title: 'Evaluation of Control Effectiveness',
    desc: 'We objectively test and assess the real-world effectiveness of your existing AML/CFT controls in mitigating inherent risks – determining not just if controls exist, but if they actually work as intended.',
    aos: 'fade-up',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-4.png',
    title: 'Articulating Residual Risk',
    desc: 'Document and justify your residual risk profile with robust analysis and data points, providing the necessary assurance to auditors, regulators, senior management, and financial partners.',
    aos: 'fade-down',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-5.png',
    title: 'Actionable Insights, Not Just Findings',
    desc: 'Our reports provide more than just a list of gaps. We deliver prioritized, practical recommendations linked directly to your risk profile, enabling efficient resource allocation and effective risk mitigation.',
    aos: 'fade-up',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-6.png',
    title: 'Strategic Risk Integration',
    desc: 'Leverage the risk assessment insights not just for compliance, but to inform business strategy, optimize control spending, enhance training, and foster a stronger risk-aware culture.',
    aos: 'fade-down',
  },
];

const MLRiskAssessmentsExpertise = () => {
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full mb-8">
          <h2 className="text-4xl md:text-5xl font-medium text-[#00374A] mb-4 md:mb-0" data-aos="fade-down">
            Expertise Forged in<br className="hidden md:block" /> Complex Environments
          </h2>
          <p className="text-base md:text-lg text-[#357187] md:max-w-xl md:text-right" data-aos="fade-up">
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
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={24}
                    height={24}
                    className="mr-3"
                  />
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

export default MLRiskAssessmentsExpertise;
