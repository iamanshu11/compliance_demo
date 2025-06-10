'use client';

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { FiRefreshCw, FiFileText, FiFolder, FiRepeat } from 'react-icons/fi';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const features = [
  {
    icon: <FiRefreshCw size={28} className="text-[#1177c3]" />,
    title: 'Renewal Management',
    desc: 'Proactive planning, preparation, and timely submission of renewal applications across all required jurisdictions globally.',
    aos: 'fade-up',
  },
  {
    icon: <FiFileText size={28} className="text-[#1177c3]" />,
    title: 'Compliance Report Drafting',
    desc: 'Assistance with preparing and submitting periodic reports, compliance policies and others mandated by regulators.',
    aos: 'fade-down',
  },
  {
    icon: <FiFolder size={28} className="text-[#1177c3]" />,
    title: 'Documentation & Records Management',
    desc: 'Ensuring ongoing accuracy, completeness, and availability of required documentation and records to meet regulatory standards.',
    aos: 'fade-up',
  },
  {
    icon: <FiRepeat size={28} className="text-[#1177c3]" />,
    title: 'Change Management Support',
    desc: 'Guidance on required notifications and processes when significant business changes occur such as structure, control, services, systems.',
    aos: 'fade-down',
  },
];

const LicenseMaintenancePartner = () => {
  const { openPopup } = usePopupTalkToExpert();
  const lineRef = useRef<HTMLDivElement>(null);
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
        percent = Math.min(
          1,
          Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight))
        );
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
        <h2
          className="text-4xl md:text-5xl font-medium text-[#06323c] text-center mb-4"
          data-aos="fade-down"
        >
          Your Partner for License Maintenance
        </h2>
        <p
          className="text-lg text-[#20505c] text-center mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Comprehensive support handling renewals, reporting, supporting regulatory communications, and compliance updates
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-12 mb-10">
          {/* Left: Image */}
          <div
            className="flex-1 flex items-center justify-center mb-10 lg:mb-0"
            data-aos="fade-up"
          >
            <div className="w-full max-w-md rounded-lg shadow-lg overflow-hidden relative h-[300px]">
              <Image
                src="/licensemaintenance/partner.png"
                alt="License Maintenance Partner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Center: Animated Vertical Line */}
          <div className="hidden lg:flex flex-col items-center justify-center h-full px-4 relative">
            <div
              className="w-1 bg-[#d1e6f7] rounded-full relative cursor-pointer transition-all duration-300"
              style={{ height: '320px', minHeight: '200px', maxHeight: '400px' }}
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
              ></div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex-1 flex flex-col gap-8">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="flex items-start gap-4"
                data-aos={feature.aos}
                data-aos-delay={idx * 120}
              >
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-[#06323c] mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-[#20505c] text-base">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          className="text-[#20505c] text-center mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          License maintenance often brings unique requests or evolving requirements from regulators. Our comprehensive support covers all aspects of maintaining your license status ensuring you remain compliant whatever arises.
        </p>

        <button
          className="px-8 py-3 rounded-full bg-[#06232c] text-white font-medium shadow hover:bg-[#164d60] transition-all duration-200"
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

export default LicenseMaintenancePartner;
