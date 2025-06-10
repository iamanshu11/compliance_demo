'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const BuildInhouseWhy = () => {
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
        <h2
          className="text-4xl md:text-5xl font-medium text-[#00374A] text-center mb-12"
          data-aos="fade-down"
        >
          Why Us
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg">
          {/* Top left card */}
          <div
            className="bg-[#0B3C49] flex flex-col justify-center p-10 min-h-[280px]"
            data-aos="fade-right"
          >
            <h3 className="text-white text-xl font-semibold mb-3">
              Designing for Global Regulatory Expectations
            </h3>
            <p className="text-white text-base opacity-80">
              Expectations regarding the structure, independence, expertise, and authority of compliance functions vary globally. We design frameworks that meet specific jurisdictional requirements (e.g., FCA's SMCR, US regulatory expectations, EU directives) while embedding international best practices.
            </p>
          </div>

          {/* Top right image */}
          <div className="h-full w-full" data-aos="fade-left">
            <Image
              src="/build-inhouse/why/img-1.png"
              alt="Global Regulatory Expectations"
              width={800}
              height={600}
              className="object-cover w-full h-full min-h-[280px]"
            />
          </div>

          {/* Bottom left image */}
          <div className="h-full w-full order-2 md:order-3" data-aos="fade-right">
            <Image
              src="/build-inhouse/why/img-2.png"
              alt="Building Compliance Functions"
              width={800}
              height={600}
              className="object-cover w-full h-full min-h-[280px]"
            />
          </div>

          {/* Bottom right card */}
          <div
            className="bg-[#EBEBEB] flex flex-col justify-center p-10 min-h-[280px] order-3 md:order-4"
            data-aos="fade-left"
          >
            <h3 className="text-[#00374A] text-xl font-semibold mb-3">
              Expertise in Building Compliance Functions
            </h3>
            <p className="text-[#00374A] text-base opacity-80">
              Our team includes former senior compliance officers and consultants with extensive, practical experience in designing, building, managing, and transforming AML/CFT compliance departments within diverse, complex global financial services environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildInhouseWhy;
