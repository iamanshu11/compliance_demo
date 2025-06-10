'use client'; // Add this if you're using Next.js App Router and this is a client component

import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const features = [
  {
    icon: '/expert-gap-analysis/comprehensive/ic-1.png',
    title: 'Program Design & Policy Review',
    desc: 'Assessing the adequacy and alignment of your documented AML/CFT policies, procedures, and risk assessment methodology with current regulations and your actual risk profile.',
    aos: 'fade-up',
  },
  {
    icon: '/expert-gap-analysis/comprehensive/ic-2.png',
    title: 'Operational Effectiveness Testing',
    desc: 'Evaluating how well your controls (e.g., KYC/CDD, monitoring, reporting) function in practice through targeted process walkthroughs, interviews, and sample testing',
    aos: 'fade-down',
  },
  {
    icon: '/expert-gap-analysis/comprehensive/ic-3.png',
    title: 'Governance, Training & Culture Assessment',
    desc: 'Reviewing the effectiveness of compliance oversight, reporting structures, employee understanding (training impact), and mechanisms like confidential reporting.',
    aos: 'fade-up',
  },
  {
    icon: '/expert-gap-analysis/comprehensive/ic-4.png',
    title: 'Thematic & High-Risk Area Reviews',
    desc: 'Conducting focused analyses on specific areas prone to gaps, such as third-party risk management frameworks, new product compliance readiness, or post-merger integration effectiveness.',
    aos: 'fade-down',
  },
  {
    icon: '/expert-gap-analysis/comprehensive/ic-5.png',
    title: 'Precise Gap Identification & Root Cause Analysis',
    desc: 'Clearly documenting specific deviations from regulatory expectations or best practices, and analyzing underlying causes to ensure effective remediation',
    aos: 'fade-up',
  },
];

const ExpertGapAnalysisComprehensive = () => {
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
          Comprehensive AML/CFT Gap Analysis
        </h2>
        <p className="text-lg text-[#357187] text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          In-depth diagnostic evaluation identifying discrepancies between your program&apos;s design, implementation,
          and current regulatory requirements or industry best practices worldwide.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 mb-10">
          {/* Left: Image */}
          <div className="flex-1 flex items-center justify-center mb-10 md:mb-0" data-aos="fade-up">
            <Image
              src="/expert-gap-analysis/comprehensive/img.png"
              alt="Expert Facilitation"
              width={400}
              height={400}
              className="w-full max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>
          {/* Center: Animated Vertical Line */}
          <div className="hidden md:flex flex-col items-center justify-center h-full px-4 relative">
            <div
              className="w-1 bg-[#d1e6f7] rounded-full relative cursor-pointer transition-all duration-300"
              style={{ height: '420px', minHeight: '200px', maxHeight: '500px' }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div
                ref={lineRef}
                className={`absolute left-0 top-0 w-1 rounded-full transition-all duration-500 ${hovered ? 'shadow-[0_0_16px_4px_#1177c3]' : ''}`}
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

export default ExpertGapAnalysisComprehensive;
