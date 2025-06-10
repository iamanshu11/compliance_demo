'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';


const features = [
  {
    icon: '/licensesponsorships/ic/ic-1.png',
    title: 'Principal Firms',
    desc: 'Expand your reach and revenue streams safely by appointing vetted Agents/Appointed Representatives. We help you establish robust oversight frameworks, manage regulatory risk, and conduct thorough due diligence to ensure compliant partnerships.',
    aos: 'fade-up',
  },
  {
    icon: '/licensesponsorships/ic/ic-2.png',
    title: 'Agents/Appointed Representatives',
    desc: "Enter regulated markets faster and more cost-effectively by operating under an established Principle Firm's license. We connect you with potential Principals and guide you through the entire onboarding and approval process.",
    aos: 'fade-up',
  },
];

const LicenseSponsorshipEmpowering = () => {
  const { openPopup } = usePopupTalkToExpert();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="w-full bg-[#1177c3] py-16 px-4 font-Inter">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start justify-center mb-10 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-8" data-aos="fade-down">
            Empowering Principals,<br />Enabling Agents/ARs
          </h2>

          <div className="flex flex-col gap-6 w-full mb-8">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow flex items-start gap-4 p-6 w-full max-w-2xl"
                data-aos={feature.aos}
                data-aos-delay={idx * 120}
              >
                <Image src={feature.icon} alt={`${feature.title} icon`} className="mr-2" width={40} height={40} />
                <div>
                  <h4 className="text-lg font-semibold text-[#20505c] mb-1">{feature.title}</h4>
                  <p className="text-[#357187] text-base">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="mt-2 px-8 py-3 rounded-full bg-[#021F29] text-white font-medium shadow hover:bg-[#357187] transition-all duration-200"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={openPopup}
          >
            Talk to an Expert
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center" data-aos="fade-down">
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-md lg:max-w-lg h-[500px]">
            <Image
              src="/licensesponsorships/empowering.png"
              alt="Obtain Money Transfer License"
              className="rounded-2xl object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseSponsorshipEmpowering;
