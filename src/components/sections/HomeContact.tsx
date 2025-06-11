'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const HomeContact: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      className="w-full py-16 px-4 font-Inter"
      style={{
        background: 'linear-gradient(to bottom, #06232c 0%, #fff 100%)',
      }}
    >
      <div className="container mx-auto">
        {/* Top: Title, subtitle, map */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="flex-1" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
              Expert Guidance for Your Compliance & Licensing Needs
            </h2>
            <p className="text-lg text-[#e6f6fa] max-w-xl">
              Let our professionals guide you through the complexities of staying compliant and securing the necessary
              licenses.
            </p>
          </div>
          <div className="flex-1 flex justify-end mt-8 md:mt-0" data-aos="fade-up">
            <div className="relative w-72 h-40 md:w-96 md:h-56">
              <Image src="/contact/map.png" alt="Map" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
        {/* Main: Person image and form */}
        <div
          className="flex flex-col md:flex-row items-stretch justify-center bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto"
          data-aos="zoom-in-up"
        >
          {/* Left: Person image */}
          <div className="flex-1 min-w-[220px] flex items-center justify-center bg-[#f7fafb] relative">
            <Image src="/contact/person.png" alt="Person" fill style={{ objectFit: 'cover' }} />
          </div>
          {/* Right: Form */}
          <div className="flex-1 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-medium text-[#1a2a3a] mb-6 text-center md:text-left">Get A Free Quote Here</h3>
            <form
              action="https://forms.zohopublic.in/remitso263/form/ComplianceTalktoexpert/formperma/Wqm0tqeHeyRn9lFDm676G5RUesCsVF-TO-MeRBGPgsg/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-[#1a2a3a] text-sm mb-1 font-medium">
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    maxLength={255}
                    name="Name_First"
                    placeholder="First Name"
                    className="w-full border border-[#e0e7ef] text-[#1a2a3a] rounded px-4 py-2 focus:outline-none focus:border-[#4092fa] transition"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-[#1a2a3a] text-sm mb-1 font-medium">
                    Last Name*
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    maxLength={255}
                    name="Name_Last"
                    placeholder="Last Name"
                    className="w-full border border-[#e0e7ef] text-[#1a2a3a] rounded px-4 py-2 focus:outline-none focus:border-[#4092fa] transition"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-[#1a2a3a] text-sm mb-1 font-medium">
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  maxLength={255}
                  name="Email"
                  placeholder="Share your work email"
                  className="w-full border border-[#e0e7ef] text-[#1a2a3a] rounded px-4 py-2 focus:outline-none focus:border-[#4092fa] transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-[#1a2a3a] text-sm mb-1 font-medium">
                  Service of Interest*
                </label>
                <select
                  id="service"
                  name="Dropdown"
                  className="w-full border border-[#e0e7ef] text-[#1a2a3a] rounded px-4 py-2 focus:outline-none focus:border-[#4092fa] transition"
                  required
                  defaultValue="-Select-"
                >
                  <option value="-Select-" disabled>
                    -Select-
                  </option>
                  <option value="Consulting">Consulting</option>
                  <option value="Licensing">Licensing</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-4 px-8 py-3 rounded bg-[#06232c]  text-white font-medium shadow hover:bg-[#164d60] transition-all duration-200 hover:scale-105"
              >
                Talk to an Expert
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
