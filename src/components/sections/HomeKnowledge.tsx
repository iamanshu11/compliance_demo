'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const knowledgeCards = [
  {
    img: '/knowledge/img-5.png',
    title: 'How to Choose the Right AML/CTF Adviser: A Step-by-Step Checklist Backed by AUSTRAC',
    path: '/right-aml-adviser',
  },
  {
    img: '/knowledge/img-1.png',
    title: '6 Steps to Building an Effective AML Compliance Program',
    path: '/aml-compliance-program',
  },
  {
    img: '/knowledge/img-2.png',
    title: 'FATF Compliance Checklist for Money Transfer Companies (MVTS) – 2025 Complete Expert Guide',
    path: '/fatf-compliance-checklist',
  },
  {
    img: '/knowledge/img-3.png',
    title: 'Step-by-Step Guide to Getting a Money Transfer License in the UAE',
    path: '', // Coming soon
  },
  {
    img: '/img/knowledge/img-4.png',
    title: 'How to Apply for a Money Transfer License in Canada',
    path: '', // Coming soon
  },
];

const HomeKnowledge = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector('div');
    const cardWidth = card ? (card as HTMLDivElement).offsetWidth + 24 : 0;
    slider.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#f7fafb] py-16 px-4 font-Inter overflow-x-hidden">
      <div className="container mx-auto">
        {/* Header & buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-[#06323c] mb-2">Knowledge Base</h2>
            <p className="text-lg text-[#20505c] max-w-xl">Explore our resources to learn more about compliance practices.</p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded border border-[#06323c] flex items-center justify-center text-[#06323c] hover:bg-[#e6f6fa] transition"
              aria-label="Previous"
            >
              &lt;
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded border border-[#06323c] flex items-center justify-center text-[#06323c] hover:bg-[#e6f6fa] transition"
              aria-label="Next"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="relative">
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <span key={j} className="w-1 h-1 bg-[#06323c] rounded-full inline-block opacity-30" />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <span key={j} className="w-1 h-1 bg-[#06323c] rounded-full inline-block opacity-30" />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Card slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {knowledgeCards.map((card, idx) => (
              <div
                key={idx}
                className="min-w-[340px] max-w-[380px] bg-white rounded-3xl overflow-hidden shadow-lg flex-shrink-0 scroll-snap-align-start transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05] hover:-translate-y-2 group"
                data-aos="fade-up"
                data-aos-delay={idx * 120}
              >
                <div className="w-full h-40 relative">
                  <Image src={card.img} alt={card.title} fill className="object-cover rounded-t-3xl" />
                </div>
                <div className="bg-[#06232c] p-6 flex flex-col justify-between h-[200px]">
                  <h4 className="text-lg font-semibold text-white mb-2">{card.title}</h4>
                  {card.path ? (
                    <Link
                      href={card.path}
                      className="text-xs px-4 py-2 rounded bg-white text-[#4092fa] font-medium transition-all duration-300 flex items-center gap-1 w-max group-hover:scale-105 group-hover:underline group-hover:bg-[#e6f6fa] group-hover:text-[#2563eb]"
                    >
                      LEARN MORE <span className="text-base">→</span>
                    </Link>
                  ) : (
                    <span className="text-xs px-4 py-2 rounded bg-gray-300 text-gray-500 font-medium w-max cursor-not-allowed opacity-70">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeKnowledge;
