'use client';

import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const industries = [
  {
    img: '/industries-img/img-1.png',
    title: 'Money Transfer Businesses',
    desc: 'Regulatory guidance and licensing support for secure, cross-border money movement.',
  },
  {
    img: '/industries-img/img-2.png',
    title: 'Banks',
    desc: 'End-to-end compliance programs that address risk, reporting, and regulatory obligations.',
  },
  {
    img: '/industries-img/img-3.png',
    title: 'Credit Unions',
    desc: 'Customized frameworks to ensure member-focused institutions remain compliant and protected.',
  },
  {
    img: '/industries-img/img-4.png',
    title: 'Fintechs',
    desc: 'Agile compliance strategies that keep pace with innovation and changing regulations.',
  },
  {
    img: '/industries-img/img-5.png',
    title: 'Neo Banks',
    desc: 'Digital-first compliance models designed for branchless, mobile-led banking platforms.',
  },
  {
    img: '/industries-img/img-6.png',
    title: 'Currency Exchange Services',
    desc: 'Controls and procedures to manage AML risks and meet licensing requirements.',
  },
  {
    img: '/industries-img/img-7.png',
    title: 'Payment Service Provider',
    desc: 'Transaction monitoring and regulatory reporting tools built for high-volume environments.',
  },
  {
    img: '/industries-img/img-8.png',
    title: 'Precious Metal Dealers',
    desc: 'Compliance structures to mitigate risk in high-value, cash-intensive trade.',
  },
  {
    img: '/industries-img/img-9.png',
    title: 'Cryptocurrency & Blockchain Startups',
    desc: 'Policy design, KYC/AML processes, and advisory services tailored for the crypto ecosystem.',
  },
];

const Industries = () => {
  const { openPopup } = usePopupTalkToExpert();

  return (
    <section className="w-full bg-[#f7fafb] py-16 px-4 font-Inter">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-medium text-[#06323c] text-center mb-4">
          Industries Served
        </h2>
        <p className="text-lg text-[#20505c] text-center mb-12 max-w-2xl mx-auto">
          We work with a wide range of regulated businesses, offering practical, industry-specific
          compliance solutions that align with global standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-10">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white rounded-2xl shadow p-0 flex flex-col items-start min-h-[320px] overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-200"
            >
              <Image
                src={industry.img}
                alt={industry.title}
                width={500}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 flex flex-col flex-1 w-full">
                <h4 className="text-lg font-semibold text-[#00374A] mb-2">{industry.title}</h4>
                <p className="text-[#00374A] text-sm mb-6 flex-1">{industry.desc}</p>
                <button
                  onClick={openPopup}
                  className="text-xs px-4 py-2 rounded bg-[#e6f6fa] text-[#06323c] font-medium hover:bg-[#d0eef6] transition flex items-center gap-1 w-max"
                >
                  Talk to an Expert <span className="text-base">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="mt-4 px-8 py-3 rounded-full bg-[#06232c] text-white font-medium shadow hover:bg-[#164d60] transition-all duration-200 hover:scale-105"
          onClick={openPopup}
        >
          Talk to an Expert
        </button>
      </div>
    </section>
  );
};

export default Industries;
