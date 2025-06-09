'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ConsultingCard {
  title: string;
  img: string;
  hoverText: string;
  link: string;
}

const consultingData: ConsultingCard[] = [
  {
    title: "Develop & Maintain a Robust Global AML/CFT Program",
    img: "/consulting-img/img-1.png",
    hoverText: "We help you build and maintain a world-class AML/CFT program tailored to your business needs.",
    link: "/aml-program",
  },
  {
    title: "Third Party Independent Reviews",
    img: "/consulting-img/img-2.png",
    hoverText: "Get unbiased, expert reviews of your compliance framework and controls.",
    link: "/third-party",
  },
  {
    title: "ML/TF Risk Assessments",
    img: "/consulting-img/img-3.png",
    hoverText: "Comprehensive risk assessments to identify and mitigate ML/TF threats.",
    link: "/ml-risk-assessments",
  },
  {
    title: "Expert Gap Analysis & Remediation Roadmap",
    img: "/consulting-img/img-4.png",
    hoverText: "Pinpoint compliance gaps and receive a clear, actionable remediation plan.",
    link: "/expert-gap-analysis",
  },
  {
    title: "Expert AML/CFT Policy, Procedure & Control Documentation",
    img: "/consulting-img/img-5.png",
    hoverText: "Get expertly crafted documentation to meet regulatory standards.",
    link: "/expert-aml-policy",
  },
  {
    title: "Build Inhouse Compliance Function",
    img: "/consulting-img/img-6.png",
    hoverText: "We help you establish and scale your internal compliance team.",
    link: "/build-inhouse",
  },
  {
    title: "Global AML/CFT Training Solutions",
    img: "/consulting-img/img-7.png",
    hoverText: "Engaging, up-to-date training for your global workforce.",
    link: "/global-aml-solution",
  },
  {
    title: "Navigate Global Financial Crime Complexity",
    img: "/consulting-img/img-8.png",
    hoverText: "Expert guidance to help you stay ahead of evolving financial crime risks.",
    link: "/navigate-global",
  },
];

const HomeConsulting = () => {
  return (
    <section className="w-full bg-[#f7fafb] py-16 px-4 font-Inter">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl font-normal text-[#06323c]">Consulting</h3>
          <div className="flex-1 border-t border-[#20505c] opacity-40"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultingData.map((data, i) => {
            const CardType = i === 3 || i === 4 || i === 5 ? CardBg : i === 2 ? Card3 : Card1;
            return <CardType key={data.title} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};

// Card 1
const Card1 = ({ title, img, hoverText, link }: ConsultingCard) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={link} className={`bg-white rounded-2xl shadow-sm flex flex-col items-start relative overflow-hidden cursor-pointer min-h-[320px] transition-all duration-300 ${hovered ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full p-4 z-10">
        <h3 className="text-lg font-semibold text-center text-[#00374A] mb-2">{title}</h3>
      </div>
      <div className="w-full mt-auto h-full relative">
        <Image
          src={img}
          alt={title}
          fill
          className={`object-cover rounded-b-2xl transition-all duration-500 absolute ${hovered ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
        />
      </div>
      <div className={`absolute inset-0 flex flex-col justify-center items-center bg-transparent p-6 transition-all duration-500 z-20 ${hovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <p className="text-[#00374A] text-sm mb-6 text-center flex-1 flex items-center">{hoverText}</p>
        <div className="absolute right-6 bottom-6">
          <span className="flex items-center gap-1 text-[#00374A] font-semibold text-base group">
            <span className="group-hover:underline">Expand</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

const Card3 = ({ title, img, hoverText, link }: ConsultingCard) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={link} className={`rounded-2xl shadow-sm flex flex-col items-start relative overflow-hidden cursor-pointer min-h-[320px] transition-all duration-300 bg-gray-200 ${hovered ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 z-0 transition-all duration-500">
        <Image src={img} alt={title} fill className={`object-cover rounded-2xl ${hovered ? "scale-110 blur-md" : "scale-100 blur-0"}`} />
        <div className="absolute inset-0 bg-black/30 rounded-2xl" />
      </div>
      <div className="w-full p-4 z-20 relative">
        <h3 className="text-lg font-semibold text-center text-white mb-2">{title}</h3>
      </div>
      <div className={`absolute left-0 right-0 bottom-0 p-6 transition-all duration-500 z-30 ${hovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`} style={{ top: "56px" }}>
        <p className="text-white text-sm mb-6 text-center font-semibold">{hoverText}</p>
        <div className="absolute right-6 bottom-6">
          <span className="flex items-center gap-1 text-white font-semibold text-base group">
            <span className="group-hover:underline">Expand</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

const CardBg = Card3;

export default HomeConsulting;
