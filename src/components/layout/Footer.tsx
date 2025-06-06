'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiChevronRight, FiMail, FiMapPin } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#06232c] py-12 px-4 font-Inter">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Logo and Brand */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="RemitSo Logo" 
                width={120}
                height={32} 
                className="mr-2" 
              />
            </div>
            <p className="text-white text-sm max-w-xs mb-4">
              RemitSo is a brand owned by Prymera Consulting Pvt Ltd.
            </p>
            <p className="text-white text-sm max-w-xs">DUNS Number: 853171738</p>
          </div>

          {/* Ecosystem */}
          <div className="flex-1">
            <h4 className="text-white font-semibold text-xl mb-4">Licensing</h4>
            <ul className="text-white text-sm space-y-2">
              <li>
                <Link href="/money-transfer" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> Money Transmitter Licensing
                </Link>
              </li>
              <li>
                <Link href="/license-maintenance" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> License Maintenance
                </Link>
              </li>
              <li>
                <Link href="/license-sponsorships" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> License Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/existing-license" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> Existing License Acquisition
                </Link>
              </li>
            </ul>
          </div>

          {/* Software */}
          <div className="flex-1">
            <h4 className="text-white font-semibold text-xl mb-4">Consulting</h4>
            <ul className="text-white text-sm space-y-2">
              <li>
                <Link href="/aml-program" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> AML/CFT Program
                </Link>
              </li>
              <li>
                <Link href="/ml-risk-assessments" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> ML/TF Risk Assessment
                </Link>
              </li>
              <li>
                <Link href="/expert-gap-analysis" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> Gap Analysis
                </Link>
              </li>
              <li>
                <Link href="/global-aml-solution" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> AML/CFT Training
                </Link>
              </li>
              <li>
                <Link href="/build-inhouse" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> Inhouse Compliance Function
                </Link>
              </li>
              <li>
                <Link href="/navigate-global" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> Financial Crime Consulting
                </Link>
              </li>
              <li>
                <Link href="/expert-aml-policy" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> AML/CFT Policy, Procedure & Control Documentation
                </Link>
              </li>
              <li>
                <Link href="/third-party" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> Independent Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h4 className="text-white font-semibold text-xl mb-4">Quick Links</h4>
            <ul className="text-white text-sm space-y-2">
              <li>
                <Link href="/privacy-policy" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="flex items-center gap-2 hover:text-[#1ecbe1] transition-colors">
                  <FiChevronRight className="text-lg mt-1 flex-shrink-0" /> Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-1">
            <h4 className="text-white font-semibold text-xl mb-4">Contact Us</h4>
            <ul className="text-white text-sm space-y-3">
              <li className="flex items-start gap-2">
                <FiMail className="text-lg mt-1 flex-shrink-0" />
                <span>Connect@remitso.com</span>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="text-lg mt-1 flex-shrink-0" />
                <span>65 Chulia St, #46-00 OCBC Centre, Singapore 049513</span>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="text-lg mt-1 flex-shrink-0" />
                <span>Bizzhub Aspire, 100 Feet Rd, Koramangala, Bengaluru, Karnataka 560095 India</span>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="text-lg mt-1 flex-shrink-0" />
                <span>GN34/1, Aurora Water Front, Unit 10, Floor 16th, Sector V, Salt Lake, Kolkata 700091 India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white text-sm text-center mt-5">
          <hr className="border-t border-white border-opacity-20 mb-4" />
          <p>© 2025 RemitSo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
