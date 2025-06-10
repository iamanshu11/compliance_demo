'use client';

import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="privacy-policy">
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow w-full bg-[#021F29]">
          <div className="container mx-auto px-4 py-12 mt-12 text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Privacy Policy</h1>
            <div className="mt-6 space-y-8 max-w-4xl mx-auto">
              <p className="text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">RemitSo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                <p className="mb-4">Please read this privacy policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this privacy policy.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
                <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Register for an account</li>
                  <li>Request information about our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                  <li>Apply for a job</li>
                </ul>
                <p className="mb-4">This information may include:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Name and contact information</li>
                  <li>Company details</li>
                  <li>Professional credentials</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                <p className="mb-4">We may share your information with:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Service providers and business partners</li>
                  <li>Legal authorities when required by law</li>
                  <li>Third parties in connection with a business transaction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="mb-4">We use cookies and similar tracking technologies to:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic</li>
                  <li>Improve user experience</li>
                  <li>Provide personalized content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
                <p className="mb-4">Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Children&apos;s Privacy</h2>
                <p className="mb-4">Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
                <p className="mb-4">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                <p className="mb-4">If you have questions about this privacy policy, please contact us at:</p>
                <p className="mb-2">Email: privacy@remitso.com</p>
                <p className="mb-2">Address: Bizzhub Aspire, 100 Feet Rd, Koramangala, Bengaluru, Karnataka 560095 India</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
