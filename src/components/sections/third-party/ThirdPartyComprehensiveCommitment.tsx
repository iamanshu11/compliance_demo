'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const ThirdPartyComprehensiveCommitment = () => {
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
          <h2 className="text-4xl md:text-5xl font-medium text-[#00374A] mb-6">
            Our Commitment
          </h2>
          <p className="text-lg text-[#00374A] mb-4 max-w-xl">
            We work collaboratively to help you understand review findings and are committed to delivering high-quality, insightful reports within agreed timelines, including regulatory or banking deadlines.
          </p>
          <p className="text-lg text-[#00374A] font-semibold mb-8 max-w-xl">
            Satisfy regulatory requirements as per your regulatory requirements
          </p>
          <button
            onClick={openPopup}
            className="px-8 py-3 rounded-full bg-[#021F29] text-white font-medium shadow hover:bg-[#164d60] transition-all duration-200"
          >
            Talk to an Expert
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center" data-aos="fade-down">
          <Image
            src="/third-party/commitment.png"
            alt="Regulators Map"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdPartyComprehensiveCommitment;
