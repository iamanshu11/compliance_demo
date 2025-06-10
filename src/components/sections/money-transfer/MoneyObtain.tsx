'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const MoneyObtain = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="w-full bg-[#1177c3] py-16 px-4 font-Inter">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start text-white mb-10 lg:mb-0" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
            Obtain Your Money Transfer<br />Licence with Expert Support
          </h2>
          <p className="text-lg mb-4 max-w-xl">
            Navigate Money Transfer Licensing with Expert Support
          </p>
          <p className="mb-4 max-w-xl">
            Are you starting or expanding a money transfer business? Securing the correct <span className="font-semibold text-white">Money Transfer Licence</span> is essential to operating legally and building customer trust.
          </p>
          <p className="max-w-xl">
            <span className="font-bold text-white">At RemitSo</span>, we offer practical, experience-based support to help you meet all licensing and compliance requirements—ensuring your business runs smoothly and lawfully.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center" data-aos="fade-down">
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-md lg:max-w-lg h-[400px]">
            <Image
              src="/money-transfer/obtain-img.png"
              alt="Obtain Money Transfer License"
              className="rounded-2xl object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div
              className="absolute inset-0 rounded-2xl border-2 border-white pointer-events-none"
              style={{ borderTopRightRadius: '32px', borderBottomLeftRadius: '32px' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyObtain;

