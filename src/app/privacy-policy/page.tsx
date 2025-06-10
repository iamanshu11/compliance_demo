'use client';

import React from 'react';


const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="privacy-policy">
          <div className="min-h-screen flex flex-col">
      <main className="flex-grow w-full bg-[#021F29]">
        <div className="container mx-auto px-4 py-12 mt-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center">Privacy Policy</h1>
          <div className="mt-6 space-y-6">
            <p>We are committed to safeguarding the privacy of our website visitors and service users.</p>
            <p>This policy applies where we are acting as a data controller with respect to personal data; in other words, where we determine the purposes and means of the processing of that personal data.</p>
            <p>We use cookies on our website. For non-essential cookies, consent will be sought when you first visit our site.</p>
            <p>Our website includes privacy controls for managing marketing communications and information disclosure.</p>
            <p>In this policy, "we", "us" and "our" refer to RemitSo.</p>

            <h2 className="text-2xl font-bold">What Personal Information We Collect</h2>
            <h4 className="text-xl font-bold">Contact Information</h4>
            <p>We might collect your name, email, phone, address, family and education details, medical records, bank information, etc.</p>

            <h4 className="text-xl font-bold">Information You Post</h4>
            <p>We collect any information you post on our website.</p>

            <h4 className="text-xl font-bold">Other Information</h4>
            <p>We may collect browser, IP address, visit duration, pages accessed, device and OS information.</p>

            <h4 className="text-xl font-bold">Tools</h4>
            <ul className="list-disc list-inside">
              <li>Factors.ai</li>
              <li>Apollo</li>
              <li>Microsoft Clarity</li>
              <li>Zoho Pagesense</li>
              <li>Zoho Salesiq</li>
              <li>Zoho One</li>
            </ul>

            <h4 className="text-xl font-bold">How We Collect Personal Information</h4>
            <ul className="list-disc list-inside">
              <li>Direct input by you.</li>
              <li>Forms on our website.</li>
              <li>Third-party sources like recruitment agencies and partners.</li>
            </ul>

            <h4 className="text-xl font-bold">How We Use Your Personal Data</h4>
            <p>We process usage, profile, enquiry, correspondence, and legal data for legitimate interests, legal compliance, or consent-based services.</p>

            <h4 className="text-xl font-bold">Sharing of Your Information to Third Parties</h4>
            <p>We share data with service vendors, business partners, legal authorities, or successors. We may also share for other lawful purposes.</p>

            <h4 className="text-xl font-bold">Retaining and Deleting Personal Data</h4>
            <p>We retain personal data for 2 to 5 years or as required by legal/business needs.</p>

            <h4 className="text-xl font-bold">About Cookies</h4>
            <p>Cookies help identify users and track website usage. They can be session or persistent cookies.</p>

            <h4 className="text-xl font-bold">Cookies We Use</h4>
            <ul className="list-disc list-inside">
              <li>Authentication</li>
              <li>Status checks</li>
              <li>Personalisation</li>
              <li>Security</li>
              <li>Advertising</li>
              <li>Analysis</li>
              <li>Cookie Consent</li>
            </ul>

            <h4 className="text-xl font-bold">Cookies Used by Our Service Providers</h4>
            <p>We use Google Analytics. Refer to their privacy policy: <a href="https://www.google.com/policies/privacy/" className="underline text-blue-400" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>

            <h4 className="text-xl font-bold">Our Details</h4>
            <p>RemitSo is owned by Prymera Consulting Pvt Ltd. Offices in Kolkata and Bengaluru, India.</p>
            <p>Contact via post, form, or email (as published on our site).</p>

            <h4 className="text-xl font-bold">Our Data Privacy Officer</h4>
            <p>Name: Mr. Vivek Sharma</p>
            <p>Email: vivek@remitso.com</p>

            <h4 className="text-xl font-bold">Amendments</h4>
            <p>This policy may change. Please review this page occasionally for updates.</p>

            <h4 className="text-xl font-bold">Jurisdiction</h4>
            <p>Use of this website is governed by Indian law. Disputes are subject to these terms.</p>
          </div>
        </div>
      </main>
    </div>
    </main>
  );
};

export default PrivacyPolicyPage; 