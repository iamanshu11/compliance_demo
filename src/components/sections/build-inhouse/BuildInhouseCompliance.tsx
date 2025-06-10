'use client'; // required if you're using the App Router

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const features = [
  {
    icon: '/build-inhouse/compliance/ic-1.png',
    title: 'Optimal Function Design & Mandate',
    desc: 'Designing a compliance function structure—including the critical Compliance Officer role—tailored to your business size, complexity, risk profile, and regulatory environment',
    aos: 'fade-up',
  },
  {
    icon: '/build-inhouse/compliance/ic-2.png',
    title: 'Role Definition & Competency Mapping',
    desc: 'Clearly defining roles, responsibilities, necessary skills, and reporting lines within the compliance team to ensure effective coverage and accountability',
    aos: 'fade-down',
  },
  {
    icon: '/build-inhouse/compliance/ic-3.png',
    title: 'Process & Workflow Engineering',
    desc: 'Developing and documenting efficient, effective internal processes and workflows for key compliance activities like enhanced due diligence, alert management, investigations, SAR/STR filing, and internal/external reporting.',
    aos: 'fade-up',
  },
  {
    icon: '/build-inhouse/compliance/ic-4.png',
    title: 'Compliance Technology Advisory',
    desc: 'Assisting in defining functional requirements and selecting appropriate technology tools for case management, transaction monitoring, customer/sanctions screening, and compliance reporting',
    aos: 'fade-down',
  },
  {
    icon: '/build-inhouse/compliance/ic-5.png',
    title: 'Governance & Oversight Frameworks',
    desc: 'Establish practical governance structures, escalation protocols, and meaningful management information (MI) for board and senior management oversight',
    aos: 'fade-up',
  },
  {
    icon: '/build-inhouse/compliance/ic-6.png',
    title: 'Resource Planning & Integration',
    desc: 'Providing data-driven guidance on appropriate staffing levels, skill mixes, budget allocation, and strategies for effectively integrating the compliance function within broader business operations.',
    aos: 'fade-down',
  },
];

const BuildInhouseCompliance = () => {
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
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-medium text-[#00374A] text-center mb-4" data-aos="fade-down">
          Compliance Function Design & Implementation
        </h2>
        <p className="text-lg text-[#00374A] text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          Comprehensive support defining the optimal structure, roles, responsibilities, processes, technology requirements, and governance for an effective and efficient in-house AML/CFT function.
        </p>

        <div className="flex flex-col md:flex-row items-start justify-center w-full gap-8 mb-10">
          {/* Left: Main Image and first two cards */}
          <div className="flex-1 flex flex-col items-center md:items-start mb-10 md:mb-0 gap-6" data-aos="fade-up">
            <Image
              src="/build-inhouse/compliance/img.png"
              alt="ML/TF Risk Assessment"
              width={600}
              height={400}
              className="w-full max-w-xl rounded-lg shadow-lg object-cover mb-6"
            />
            <div className="flex-1 flex flex-col gap-6 w-full justify-center md:justify-start">
              {features.slice(0, 2).map((feature, idx) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow transition-all duration-200 hover:shadow-lg hover:bg-[#eaf4fa] w-full"
                  data-aos={feature.aos}
                  data-aos-delay={idx * 120}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-[#f7fafb] rounded-full mr-2">
                    <Image src={feature.icon} alt={`${feature.title} icon`} width={32} height={32} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#00374A] mb-1">{feature.title}</h4>
                    <p className="text-[#00374A] text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Features 3-6 */}
          <div className="flex-1 flex flex-col gap-6">
            {features.slice(2).map((feature, idx) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow transition-all duration-200 hover:shadow-lg hover:bg-[#eaf4fa]"
                data-aos={feature.aos}
                data-aos-delay={idx * 120}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#f7fafb] rounded-full mr-2">
                  <Image src={feature.icon} alt={`${feature.title} icon`} width={32} height={32} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#00374A] mb-1">{feature.title}</h4>
                  <p className="text-[#00374A] text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="px-8 py-3 rounded-full bg-[#021F29] text-white font-medium shadow hover:bg-[#357187] transition-all duration-200"
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

export default BuildInhouseCompliance;
