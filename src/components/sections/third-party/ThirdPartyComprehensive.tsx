'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const features = [
  {
    icon: '/third-party/compre-img/ic/ic-1.png',
    img: '/third-party/compre-img/img/img-1.png',
    title: 'Risk Assessment Review',
    desc: 'Evaluating the adequacy, documentation, and regular updating of your specific ML/TF risk assessment based on your business model and operations.',
    aos: 'fade-up',
    bg: 'bg-[#F3FCD3]'
  },
  {
    icon: '/third-party/compre-img/ic/ic-2.png',
    img: '/third-party/compre-img/img/img-2.png',
    title: 'Policy & Procedure Evaluation',
    desc: 'Assessing the design, completeness, and implementation of your documented AML/CFT program (including KYC/CDD/EDD, beneficial ownership, PEPs) against regulatory requirements.',
    aos: 'fade-down',
    bg: 'bg-[#E2FFDC]'
  },
  {
    icon: '/third-party/compre-img/ic/ic-3.png',
    img: '/third-party/compre-img/img/img-3.png',
    title: 'Controls & Systems Testing',
    desc: 'Independent testing and analysis of key controls, such as transaction monitoring effectiveness, sanctions screening accuracy, and customer verification processes.',
    aos: 'fade-up',
    bg: 'bg-[#FFE6D0]'
  },
  {
    icon: '/third-party/compre-img/ic/ic-4.png',
    img: '/third-party/compre-img/img/img-4.png',
    title: 'Reporting & Record-Keeping Assessment',
    desc: 'Reviewing the adequacy and timeliness of your suspicious activity reporting (SAR/STR etc.) framework and your record-keeping procedures.',
    aos: 'fade-down',
    bg: 'bg-[#EDF5FE]'
  },
  {
    icon: '/third-party/compre-img/ic/ic-5.png',
    img: '/third-party/compre-img/img/img-5.png',
    title: 'Training & Governance Review',
    desc: 'Evaluating the effectiveness of your AML/CFT employee training program and the adequacy of board/senior management oversight structures.',
    aos: 'fade-up',
    bg: 'bg-[#D9FCEB]'
  },
  {
    icon: '/third-party/compre-img/ic/ic-6.png',
    img: '/third-party/compre-img/img/img-6.png',
    title: 'Deficiency Identification & Recommendations',
    desc: 'Providing clear, actionable reports detailing identified compliance gaps or weaknesses, alongside practical recommendations for remediation and enhancement.',
    aos: 'fade-down',
    bg: 'bg-[#CDDCFF]'
  },
];

const ThirdPartyComprehensive = () => {
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
          Comprehensive, Independent Evaluation
        </h2>
        <p className="text-lg text-[#00374A] text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          AML/CFT policies, procedures, risk assessment, controls, and overall compliance posture as per your local regulatory requirements
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-10">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`rounded-2xl shadow flex flex-col items-start relative overflow-hidden min-h-[320px] transition-all duration-300 ${feature.bg} hover:scale-105`}
              data-aos={feature.aos}
              data-aos-delay={idx * 120}
            >
              <div className="flex items-center gap-3 p-4 w-full">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow mr-2">
                  <Image src={feature.icon} alt={`${feature.title} icon`} width={28} height={28} />
                </div>
                <h4 className="text-base font-semibold text-[#00374A] mb-1">{feature.title}</h4>
              </div>
              <div className="w-full flex-1 flex flex-col justify-end items-center px-4 pb-4">
                <p className="text-[#00374A] text-sm mb-4">{feature.desc}</p>
                <Image
                  src={feature.img}
                  alt={`${feature.title} illustration`}
                  width={300}
                  height={120}
                  className="w-full h-32 object-contain rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#00374A] text-center mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          Providing clear, actionable reports detailing identified compliance gaps or weaknesses, alongside practical recommendations for remediation and enhancement.
        </p>
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

export default ThirdPartyComprehensive;
