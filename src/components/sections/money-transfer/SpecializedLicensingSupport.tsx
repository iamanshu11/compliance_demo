'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiFileText, FiShield, FiBarChart2, FiUsers } from 'react-icons/fi';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const cards = [
  {
    icon: <FiFileText size={36} className="text-[#20505c] mb-2" />,
    title: 'Business Plan Creation',
    desc: 'Developing the comprehensive roadmap regulators require to assess your venture',
    aos: 'fade-up',
  },
  {
    icon: <FiShield size={36} className="text-[#20505c] mb-2" />,
    title: 'AML/CTF Programme, Policies & Controls',
    desc: 'Developing the robust AML/CTF policies and procedures mandated by regulators',
    aos: 'fade-down',
  },
  {
    icon: <FiBarChart2 size={36} className="text-[#20505c] mb-2" />,
    title: 'ML/TF Risk Assessment Documentation',
    desc: 'Completing the essential ML/TF risk analysis and documentation for compliance.',
    aos: 'fade-up',
  },
  {
    icon: <FiUsers size={36} className="text-[#20505c] mb-2" />,
    title: 'Management Structure Charts',
    desc: 'Visually defining management hierarchy and key personnel for regulatory review.',
    aos: 'fade-down',
  },
];

const SpecializedLicensingSupport = () => {
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
        <h2
          className="text-4xl md:text-5xl font-medium text-[#00374A] text-center mb-4"
          data-aos="fade-down"
        >
          Specialized Licensing Support
        </h2>
        <p
          className="text-lg text-[#00374A] text-center mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Expert Assistance with Document Preparation & Regulatory Inquiries
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="bg-[#EBEBEB] rounded-2xl shadow flex flex-col items-start p-8 min-h-[180px] transition-all duration-200"
              data-aos={card.aos}
              data-aos-delay={idx * 120}
            >
              {card.icon}
              <h4 className="text-lg font-semibold text-[#00374A] mb-2">{card.title}</h4>
              <p className="text-[#00374A] text-base">{card.desc}</p>
            </div>
          ))}
        </div>
        <p
          className="text-[#00374A] text-center mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Licensing often involves unexpected requests from regulators. Our support covers all
          documentation needs authorities may ask for ensuring your application remains complete
          and compliant.
        </p>
        <button
          className="px-8 py-3 rounded-full bg-[#021F29] text-white font-medium shadow hover:bg-[#164d60] transition-all duration-200"
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

export default SpecializedLicensingSupport;
