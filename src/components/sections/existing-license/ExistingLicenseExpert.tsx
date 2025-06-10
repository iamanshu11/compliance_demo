'use client';

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const features = [
  {
    icon: '/existing-license/expert/ic-1.png',
    title: 'Opportunity Sourcing & Matching',
    desc: 'Identifying and discreetly connecting potential buyers with sellers of suitable, licensed money service businesses across target jurisdictions.',
    aos: 'fade-up',
  },
  {
    icon: '/existing-license/expert/ic-2.png',
    title: 'Regulatory Due Diligence',
    desc: "Conducting in-depth due diligence on the target company's license validity, compliance history, operational standing, and buyer suitability as required by regulators.",
    aos: 'fade-down',
  },
  {
    icon: '/existing-license/expert/ic-3.png',
    title: 'Change of Control Process Management',
    desc: 'Support with managing application, notification, and approval processes with relevant regulatory bodies for the change in ownership or control.',
    aos: 'fade-up',
  },
  {
    icon: '/existing-license/expert/ic-4.png',
    title: 'Documentation Support',
    desc: 'Assisting in the preparation, review, and submission of regulatory filings, disclosures, and other critical documentation related to the acquisition approval.',
    aos: 'fade-down',
  },
  {
    icon: '/existing-license/expert/ic-5.png',
    title: 'Valuation & Negotiation Advisory',
    desc: 'Providing insights on the impact of regulatory standing and license scope during valuation and negotiation phases.',
    aos: 'fade-up',
  },
];

const ExistingLicenseExpert = () => {
  const { openPopup } = usePopupTalkToExpert();
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });

    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      let percent = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        percent = Math.min(1, Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight)));
      }
      lineRef.current.style.height = `${Math.max(20, percent * 100)}%`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#f7fafb] py-16 px-4 font-Inter">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-medium text-[#20505c] text-center mb-4" data-aos="fade-down">
          Expert Facilitation for Licensed Entity Acquisitions
        </h2>
        <p className="text-lg text-[#357187] text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          End-to-end support identifying opportunities, support with rigorous due diligence ensuring successful, compliant acquisition.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 mb-10">
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-center mb-10 md:mb-0" data-aos="fade-up">
            <div className="relative w-full max-w-md h-[400px]">
              <Image
                src="/existing-license/expert/img.png"
                alt="Expert Facilitation"
                fill
                className="rounded-lg object-cover shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Center: Vertical Animated Line */}
          <div className="hidden md:flex flex-col items-center justify-center h-full px-4 relative">
            <div
              className="w-1 bg-[#d1e6f7] rounded-full relative cursor-pointer transition-all duration-300"
              style={{ height: '420px', minHeight: '200px', maxHeight: '500px' }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div
                ref={lineRef}
                className={`absolute left-0 top-0 w-1 rounded-full transition-all duration-500 ${
                  hovered ? 'shadow-[0_0_16px_4px_#1177c3]' : ''
                }`}
                style={{
                  height: '20%',
                  backgroundImage: hovered
                    ? 'linear-gradient(to bottom, #1177c3, #4fc3f7, #1177c3)'
                    : 'none',
                  backgroundColor: hovered ? undefined : '#1177c3',
                  width: hovered ? '8px' : '4px',
                  boxShadow: hovered ? '0 0 24px 6px #1177c3' : 'none',
                }}
              />
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex-1 flex flex-col gap-6">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow"
                data-aos={feature.aos}
                data-aos-delay={idx * 120}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-[#fff] rounded-full mr-2">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#20505c] mb-1">{feature.title}</h4>
                  <p className="text-[#357187] text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#357187] text-center mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          Change of Control requirements vary significantly worldwide. We tailor our support based on the specific rules of relevant jurisdictions.
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

export default ExistingLicenseExpert;
