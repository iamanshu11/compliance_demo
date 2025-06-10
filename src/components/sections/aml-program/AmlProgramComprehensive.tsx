'use client'; // Only needed if this component is used in app directory (Next.js 13+ with app dir)

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { usePopupTalkToExpert } from '@/context/PopupTalkToExpertContext';

const features = [
  {
    icon: '/aml/ic/ic-1.png',
    title: 'ML/TF Risk Assessment',
    desc: 'Conducting thorough, documented assessments of your specific money laundering and terrorism financing risks based on your business model, clients, services, and jurisdictions.',
    aos: 'fade-up',
  },
  {
    icon: '/aml/ic/ic-2.png',
    title: 'Policy & Procedure Development',
    desc: 'Crafting customized, compliant AML/CFT program documentation (covering governance, KYC/CDD, transaction monitoring, reporting, PEPs, beneficial ownership, etc.) tailored to your risk profile and applicable global regulations.',
    aos: 'fade-down',
  },
  {
    icon: '/aml/ic/ic-3.png',
    title: 'Implementation & Controls Setup',
    desc: 'Providing practical support for implementing your AML program effectively, including guidance on system configuration (e.g., monitoring/screening tools) and embedding controls within your operations.',
    aos: 'fade-up',
  },
  {
    icon: '/aml/ic/ic-4.png',
    title: 'Independent Program Reviews & Audits',
    desc: "Performing objective, independent reviews or audits of your AML/CFT program's design, effectiveness, and adherence to regulatory standards, helping you prepare for regulatory examinations.",
    aos: 'fade-down',
  },
  {
    icon: '/aml/ic/ic-5.png',
    title: 'Compliance Officer Support',
    desc: 'Offering expert guidance, resources, interim support, or outsourced service to assist your designated AML Compliance Officer in fulfilling their responsibilities.',
    aos: 'fade-up',
  },
  {
    icon: '/aml/ic/ic-6.png',
    title: 'Customized AML/CFT Training',
    desc: 'Developing and delivering tailored risk-awareness and procedural training programs for your board, management, and employees to foster a strong compliance culture.',
    aos: 'fade-down',
  },
];

const AmlProgramComprehensive = () => {
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
          Comprehensive AML/CFT Program Solutions
        </h2>
        <p className="text-lg text-[#00374A] text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          Expert assistance across the entire program lifecycle: from risk assessment and policy development
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 mb-10">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="gap-4 bg-[#EBEBEB] rounded-xl px-6 py-6 shadow transition-all duration-200 hover:shadow-lg hover:bg-[#eaf4fa]"
                data-aos={feature.aos}
                data-aos-delay={idx * 120}
              >
                <div className="flex items-center justify-center w-14 h-14 bg-[#f7fafb] rounded-full mr-2">
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
        <p className="text-[#357187] text-center mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          We understand AML/CFT regulations differ significantly worldwide, we design and adapt programs that meet your specific jurisdictional obligations while incorporating global best practices.
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

export default AmlProgramComprehensive;
