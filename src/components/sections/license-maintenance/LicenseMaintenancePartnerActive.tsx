'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const LicenseMaintenancePartnerActive = () => {
  const { openPopup } = usePopupTalkToExpert();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="w-full bg-[#2D907A] py-16 px-4 font-Inter">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left: Text */}
        <div
          className="flex-1 flex flex-col justify-center items-start text-white mb-10 lg:mb-0"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
            Keep your licenses active and <br />
            compliant effortlessly
          </h2>

          <button
            onClick={openPopup}
            className="px-8 py-3 rounded-full bg-[#06232c] text-white font-medium shadow hover:bg-[#164d60] transition-all duration-200"
          >
            Talk to an Expert
          </button>
        </div>

        {/* Right: Image */}
        <div
          className="flex-1 flex items-center justify-center"
          data-aos="fade-down"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-md lg:max-w-lg aspect-[4/3]">
            <Image
              src="/licensemaintenance/active.png"
              alt="Obtain Money Transfer License"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseMaintenancePartnerActive;
