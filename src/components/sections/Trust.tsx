'use client';

import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const Trust = () => {
  const { openPopup } = usePopupTalkToExpert();

  return (
    <section className="w-full bg-[#06232c] min-h-[60vh] flex items-center justify-center py-20 px-4 font-Inter">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: Content */}
        <div
          className="flex-1 flex flex-col items-start justify-center text-left order-2 lg:order-1"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-8">
            Trusted insights.<br />Comprehensive solutions.
          </h2>
          <p className="text-lg text-[#e6f6fa] mb-8 max-w-lg">
            Benefit from over 20+ years of combined experience, handling compliance with confidence
          </p>
          <button
            onClick={openPopup}
            className="px-8 py-3 rounded-full bg-white text-[#06232c] font-medium shadow hover:bg-[#e6f6fa] transition-all duration-200 hover:scale-105"
          >
            Talk to an Expert
          </button>
        </div>

        {/* Right: Image */}
        <div
          className="flex-1 flex items-center justify-center relative w-full max-w-xl mb-10 lg:mb-0 order-1 lg:order-2"
          data-aos="fade-down"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[340px] lg:h-[420px]">
            <Image
              src="/trust.png"
              alt="Trusted Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
