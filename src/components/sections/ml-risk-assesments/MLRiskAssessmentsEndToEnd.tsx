'use client'; // Required only for Next.js App Router

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const features = [
  {
    icon: '/ml-risk-assessments/end-to-end/ic-1.png',
    title: 'Risk Assessment Methodology Design',
    desc: "Developing or refining a robust, defensible risk assessment methodology tailored to your business's unique size, complexity, products, and global operational footprint.",
    aos: 'fade-up',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-2.png',
    title: 'In-Depth Risk Factor Analysis',
    desc: 'Conducting a thorough analysis to identify inherent ML/TF risks associated with your specific customer base, product/service offerings, delivery channels, and geographic exposures worldwide.',
    aos: 'fade-down',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-3.png',
    title: 'Control Effectiveness Evaluation',
    desc: 'Objectively assessing the design and operational effectiveness of your existing AML/CFT controls (e.g., KYC, monitoring, screening) in mitigating the identified inherent risks.',
    aos: 'fade-up',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-4.png',
    title: 'Residual Risk Determination & Documentation',
    desc: 'Quantifying or qualifying and clearly documenting the level of ML/TF risk remaining after considering the impact of your mitigating controls, as required by regulators.',
    aos: 'fade-down',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-5.png',
    title: 'Regulatory-Ready Documentation',
    desc: 'Providing comprehensive, clear documentation of the entire risk assessment process, methodology, analysis, findings, and conclusions, suitable for regulators, auditors, and banking partners.',
    aos: 'fade-up',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-6.png',
    title: 'Mitigation & Strategy Support',
    desc: 'Assisting in developing practical, prioritized action plans to address identified control gaps and strategically manage high-risk areas identified in the assessment.',
    aos: 'fade-down',
  },
  {
    icon: '/ml-risk-assessments/end-to-end/ic-7.png',
    title: 'Risk Assessment',
    desc: 'ML/TF risks manifest differently across borders. We incorporate global typologies and regulatory focus areas, considering factors relevant to diverse jurisdictions to provide a truly comprehensive assessment.',
    aos: 'fade-up',
  },
];

const MLRiskAssessmentsEndToEnd = () => {
  const { openPopup } = usePopupTalkToExpert();

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
          End-to-end Expert Support
        </h2>
        <p className="text-lg text-[#00374A] text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          From methodology design and risk factor analysis to control assessment, documentation, and actionable mitigation planning – meeting global regulatory expectations.
        </p>
        <div className="flex flex-col md:flex-row items-start justify-center w-full gap-8 mb-10">
          {/* Left: Main Image and first two cards */}
          <div className="flex-1 flex flex-col items-center md:items-start mb-10 md:mb-0 gap-6" data-aos="fade-up">
            <Image
              src="/ml-risk-assessments/end-to-end/img.png"
              alt="ML/TF Risk Assessment"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover mb-6"
            />
            <div className="flex-1 flex flex-col gap-6 w-full justify-center md:justify-start">
              {features.slice(0, 2).map((feature, idx) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow transition-all duration-200 hover:shadow-lg hover:bg-[#eaf4fa] w-full"
                  data-aos={feature.aos}
                  data-aos-delay={idx * 120}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-[#f7fafb] rounded-full mr-2">
                    <Image src={feature.icon} alt={`${feature.title} icon`} width={32} height={32} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#00374A] mb-1">{feature.title}</h4>
                    <p className="text-[#00374A] text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Features 3-7 */}
          <div className="flex-1 flex flex-col gap-6">
            {features.slice(2).map((feature, idx) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow transition-all duration-200 hover:shadow-lg hover:bg-[#eaf4fa]"
                data-aos={feature.aos}
                data-aos-delay={idx * 120}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#f7fafb] rounded-full mr-2">
                  <Image src={feature.icon} alt={`${feature.title} icon`} width={32} height={32} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#00374A] mb-1">{feature.title}</h4>
                  <p className="text-[#00374A] text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="px-8 py-3 rounded-full bg-[#021F29] text-white font-medium shadow hover:bg-[#357187] transition-all duration-200"
          data-aos="fade-up"
          data-aos-delay="700"
          onClick={openPopup}
        >
          Talk to an Expert
        </button>
      </div>
    </section>
  );
};

export default MLRiskAssessmentsEndToEnd;
