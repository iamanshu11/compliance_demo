'use client'; // If using in Next.js app directory (for client-side AOS usage)

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FiFileText, FiRefreshCw, FiUsers, FiDatabase,
  FiShield, FiSearch, FiBarChart2, FiBookOpen,
  FiSettings, FiUserCheck
} from 'react-icons/fi';
import Link from 'next/link';

const services = [
  {
    icon: <FiFileText size={32} />, title: 'Money Transmitter Licensing', desc: 'In-depth, practical support shaped by years of experience to meet all licensing and compliance requirements', link: '/money-transfer', aos: 'fade-up',
  },
  {
    icon: <FiRefreshCw size={32} />, title: 'License Maintenance', desc: 'Expert oversight of renewals, reporting and regulatory requirements to prevent costly compliance lapses.', link: '/license-maintenance', aos: 'fade-down',
  },
  {
    icon: <FiUsers size={32} />, title: 'License Sponsorship', desc: 'Facilitating compliant partnerships between licensed Principal firms and Agents/Appointed Representatives worldwide', link: '/license-sponsorship', aos: 'fade-up',
  },
  {
    icon: <FiDatabase size={32} />, title: 'Existing License Acquisition', desc: 'Navigating the complexities of due diligence, regulatory approvals, and transaction support for acquiring licensed entities worldwide.', link: '/existing-license', aos: 'fade-down',
  },
  {
    icon: <FiShield size={32} />, title: 'AML/CFT Program', desc: 'Expert assistance in drafting and implementing your tailored, risk-based AML/CFT program to meet stringent global regulatory requirements.', link: '/aml-program', aos: 'fade-up',
  },
  {
    icon: <FiSearch size={32} />, title: 'Third Party Independent Review', desc: 'Expert assessment of your AML/CFT program\'s design and operational effectiveness against your local regulatory standards.', link: '/third-party', aos: 'fade-down',
  },
  {
    icon: <FiBarChart2 size={32} />, title: 'Risk Assessment', desc: 'Expert identification, analysis, and documentation of your specific Money Laundering & Terrorist Financing (ML/TF) risks using sophisticated, globally informed methodologies.', link: '/ml-risk-assessments', aos: 'fade-up',
  },
  {
    icon: <FiBookOpen size={32} />, title: 'Gap Analysis', desc: 'Gain objective insights into your AML/CFT program\'s effectiveness and identify critical gaps against global regulatory standards, providing a clear, actionable path to enhancement.', link: '/expert-gap-analysis', aos: 'fade-down',
  },
  {
    icon: <FiSettings size={32} />, title: 'Policies, Procedures, and Controls', desc: 'Gain objective insights into your AML/CFT program\'s effectiveness and identify critical gaps against global regulatory standards, providing a clear, actionable path to enhancement.', link: '/expert-aml-policy', aos: 'fade-up',
  },
  {
    icon: <FiUserCheck size={32} />, title: 'AML Training', desc: 'Develop clear, comprehensive, and regulator-ready documentation that translates your AML/CFT strategy and risk assessment into actionable, compliant guidance for your global operations.', link: '/global-aml-solution', aos: 'fade-down',
  },
  {
    icon: <FiSettings size={32} />, title: 'Compliance Function Setup', desc: 'Role-specific training programs designed to meet global regulatory mandates, enhance risk awareness, and embed compliant behaviour across your organization.', link: '/build-inhouse', aos: 'fade-up',
  },
  {
    icon: <FiShield size={32} />, title: 'Financial Crime Consulting', desc: 'Expert advisory helping your organization design, implement, and optimize integrated strategies and innovative solutions to combat financial crime effectively and efficiently across global operations.', link: '/navigate-global', aos: 'fade-down',
  },
];

const ExploreService = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="w-full bg-[#06323c] py-16 px-4 font-Inter">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-medium text-white text-center mb-16" data-aos="fade-down">
          Explore Our Other Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-[#08475a] rounded-2xl shadow flex flex-col items-start p-8 min-h-[220px] transition-all duration-200 group hover:bg-[#0b5c75] hover:shadow-xl"
              data-aos={service.aos}
              data-aos-delay={idx * 80}
            >
              <div className="mb-4 text-blue-200 group-hover:text-blue-100 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-blue-100 text-base mb-6 flex-1">{service.desc}</p>
              <Link
                href={service.link}
                className="text-sm px-5 py-2 rounded bg-blue-100 text-[#06323c] font-semibold shadow hover:bg-white transition flex items-center gap-2 group-hover:scale-105 group-hover:bg-white"
              >
                Expand <span className="text-lg">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreService;
