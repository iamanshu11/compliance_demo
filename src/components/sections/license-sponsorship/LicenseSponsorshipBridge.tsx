'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const features = [
  {
    icon: '/licensesponsorships/bridge-pri/ic-1.png',
    title: 'Partner Identification & Matching',
    desc: 'Connecting aspiring businesses looking to join as Agents/appointed Representatives with suitable, licensed Principal Firms, and assisting Principals in finding compliant partners aligned with their risk appetite.',
    aos: 'fade-up',
  },
  {
    icon: '/licensesponsorships/bridge-pri/ic-2.png',
    title: 'Regulatory Due Diligence',
    desc: 'Conducting and managing comprehensive due diligence on both parties according to stringent global regulatory standards from likes of FCA, FinCEN, AUSTRAC, FINTRAC, & Regulatory Bodies across Europe',
    aos: 'fade-down',
  },
  {
    icon: '/licensesponsorships/bridge-pri/ic-3.png',
    title: 'Appointment Process Management',
    desc: 'Overseeing the application, notification, and approval procedures with relevant regulatory bodies for agent/AR appointments efficiently and correctly.',
    aos: 'fade-up',
  },
  {
    icon: '/licensesponsorships/bridge-pri/ic-4.png',
    title: 'Documentation & Agreement Support',
    desc: 'Assisting in the preparation, review, and finalization of all necessary contractual agreements, policies, compliance manuals, and application documents.',
    aos: 'fade-down',
  },
  {
    icon: '/licensesponsorships/bridge-pri/ic-5.png',
    title: 'Framework & Control Structuring',
    desc: 'Providing guidance on establishing appropriate operational controls, compliance oversight mechanisms, reporting structures, and commercial terms for the partnership.',
    aos: 'fade-up',
  },
];

const LicenseSponsorshipBridge = () => {
  const { openPopup } = usePopupTalkToExpert();

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
        <h2 className="text-4xl md:text-5xl font-medium text-[#20505c] text-center mb-4" data-aos="fade-down">
          Your Bridge to Principal & Agent/AR Partnerships
        </h2>
        <p className="text-lg text-[#357187] text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          End-to-end support identifying suitable partners, navigating rigorous due diligence and managing regulatory processes
        </p>

        <div className="w-full mb-10 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            {features.slice(0, 2).map((feature, idx) => (
              <div
                key={feature.title}
                className="bg-[#f7fafb] rounded-xl shadow flex flex-col items-center p-8 min-h-[260px] flex-1 transition-all duration-200 hover:shadow-lg hover:bg-[#eaf4fa]"
                data-aos={feature.aos}
                data-aos-delay={240 + idx * 120}
              >
                <Image src={feature.icon} alt={feature.title} className="mb-4" width={56} height={56} />
                <h4 className="text-lg font-semibold text-[#20505c] mb-2 text-center">{feature.title}</h4>
                <p className="text-[#357187] text-base text-center">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {features.slice(2).map((feature, idx) => (
              <div
                key={feature.title}
                className="bg-[#f7fafb] rounded-xl shadow flex flex-col items-center p-8 min-h-[260px] flex-1 max-w-xl transition-all duration-200 hover:shadow-lg hover:bg-[#eaf4fa]"
                data-aos={feature.aos}
                data-aos-delay={idx * 120}
              >
                <Image src={feature.icon} alt={feature.title} className="mb-4" width={56} height={56} />
                <h4 className="text-lg font-semibold text-[#20505c] mb-2 text-center">{feature.title}</h4>
                <p className="text-[#357187] text-base text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#357187] text-center mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          We understand regulatory requirements and arrangements vary significantly. Our expertise ensures your partnership structure meets local expectations.
        </p>
        <button
          className="px-8 py-3 rounded-full bg-[#06232c] text-white font-medium shadow hover:bg-[#357187] transition-all duration-200"
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

export default LicenseSponsorshipBridge;
