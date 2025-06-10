'use client'; // Required in Next.js App Router for client-side features

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const ExpertAMLPolicyMeeting = () => {
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
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left: Text */}
        <div
          className="flex-1 flex flex-col justify-center items-start text-[#00374A] mb-10 lg:mb-0"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
            Meeting Global <br /> Compliance Standards
          </h2>
          <p className="text-lg text-[#00374A] mb-4 max-w-xl">
            AML/CFT documentation specifics vary across jurisdictions. We develop documentation frameworks that satisfy stringent requirements globally, addressing nuances from authorities in the US, UK, EU, Canada, Australia, APAC, and other key markets.
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
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-md lg:max-w-lg">
            <Image
              src="/expert-aml-policy/meeting.png"
              alt="Obtain Money Transfer License"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertAMLPolicyMeeting;
