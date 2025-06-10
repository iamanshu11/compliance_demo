'use client'; // if used inside app directory

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const GlobalAmlSolutionTailored = () => {
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
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start mb-10 lg:mb-0" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-medium text-[#06323c] mb-6">
            Tailored for Global & Local Requirements
          </h2>
          <p className="text-lg text-[#20505c] mb-8 max-w-xl">
            AML/CFT & compliance training mandates vary globally. We design and adapt programs that fulfill specific jurisdictional requirements (US, UK, EU, Canada, Australia, APAC, etc.) while reinforcing universal best practices in financial crime prevention.
          </p>
          <button
            onClick={openPopup}
            className="px-8 py-3 rounded-full bg-[#06232c] text-white font-medium shadow hover:bg-[#164d60] transition-all duration-200"
          >
            Talk to an Expert
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center" data-aos="fade-down">
          <Image
            src="/global-aml/tailored.png" 
            alt="Regulators Map"
            width={600}
            height={400}
            className="w-full max-w-xl rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalAmlSolutionTailored;
