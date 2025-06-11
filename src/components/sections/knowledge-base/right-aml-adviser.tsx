'use client';

import React from 'react';
import Image from 'next/image';
import BlogPage from '../../../components/BlogPage';

const relatedBlogs = [
  {
    image: '/knowledge/img-1.png',
    title: '6 Steps to Building an Effective AML Compliance Program',
    path: '/knowledge-base/aml-compliance-program',
  },
  {
    image: '/knowledge/img-2.png',
    title: 'FATF Compliance Checklist for Money Transfer Companies (MVTS) – 2025 Complete Expert Guide',
    path: '/knowledge-base/fatf-compliance-checklist',
  },
];

const RightAMLAdviser = () => {
  const content = (
    <>
      <p>
        In Australia, businesses that deal with money like remittance services, fintech companies and money transfer providers must follow strict laws to prevent money laundering and terrorism financing. These laws are part of the Anti Money Laundering and Counter Terrorism Financing Act 2006.
      </p>
      <p>
        Choosing the wrong AML/CTF adviser, someone who doesn't understand the rules or your industry can lead to serious problems. That includes legal action, large fines and damage to your business reputation. This blog provides a step-by-step checklist based on AUSTRAC's official guidance to help you choose the right adviser for your business.
      </p>

      <h2 className="text-xl font-bold text-white">Step-by-Step Checklist for Choosing an AML/CTF Adviser</h2>
      <p>1. Check Relevant Qualifications and Industry Experience</p>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-transparent text-white text-center">
          <tr>
            <th className="border border-gray-300 px-6 py-3 text-sm font-semibold">What to Check</th>
            <th className="border border-gray-300 px-6 py-3 text-sm font-semibold">Why It Matters</th>
          </tr>
        </thead>
        <tbody className="bg-transparent text-white">
          <tr>
            <td className="border border-gray-300 px-2 py-4 text-sm">
              Adviser's AML/CTF certification and industry background
            </td>
            <td className="border border-gray-300 px-2 py-4 text-sm">
              Ensures your adviser understands both your regulatory obligations and business model
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-4 text-sm">
              References from similar clients
            </td>
            <td className="border border-gray-300 px-2 py-4 text-sm">
              Helps validate their track record in managing AML compliance
            </td>
          </tr>
        </tbody>
      </table>

      <p>Avoid advisers who do not have real-world experience in your specific sector, such as digital remittances or fintech operations.</p>

      <p>2. Ask if Their Risk Assessment is Customised</p>
      <p>AUSTRAC warns against using template-based programs that don't reflect your specific risk environment. Your adviser should provide:</p>
      <ul className="list-disc pl-5">
        <li>A business-specific ML/TF risk assessment</li>
        <li>An AML/CTF program that considers your services, customer base, countries of operation, and delivery channels</li>
      </ul>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-transparent text-white text-center">
          <tr>
            <th className="border border-gray-300 px-2 py-3 text-sm font-semibold">Good Practice</th>
            <th className="border border-gray-300 px-2 py-3 text-sm font-semibold">Poor Practice</th>
          </tr>
        </thead>
        <tbody className="bg-transparent text-white">
          <tr>
            <td className="border border-gray-300 px-2 py-4 text-sm">Customised compliance plans</td>
            <td className="border border-gray-300 px-2 py-4 text-sm">One-size-fits-all templates</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-4 text-sm">Inclusion of your input in the process</td>
            <td className="border border-gray-300 px-2 py-4 text-sm">No business-specific discussions</td>
          </tr>
        </tbody>
      </table>

      <p>Countries with higher ML/TF risks include parts of the Middle East, Africa, Eastern Europe, and some Pacific Islands, these must be factored in.</p>

      <p>3. Training Must Match Your Business</p>
      <p>AML/CTF training is a compliance requirement, not a formality. The adviser should deliver:</p>
      <ul className="list-disc pl-5">
        <li>Tailored training for your team</li>
        <li>Real examples of suspicious activity</li>
        <li>Clear responsibilities for reporting and handling financial compliance issues</li>
      </ul>

      <p>Avoid general or superficial training sessions that tick boxes but don't build internal knowledge.</p>

      <p>4. Independent Reviews Should Be Truly Independent</p>
      <p>AUSTRAC's AML/CTF Rules (Part 8.6 and 9.6) require regular independent reviews of your AML program. This review must not be done by the person who designed your program.</p>
      <p>Ensure your reviewer:</p>
      <ul className="list-disc pl-5">
        <li>Is not involved in creating your AML/CTF systems</li>
        <li>Tests your controls and interviews staff</li>
        <li>Delivers detailed findings and action points</li>
      </ul>

      <h2 className="text-xl font-bold text-white">Why This Matters: Pain Points Businesses Face</h2>

      <p>
        Source:{' '}
        <a
          href="https://www.austrac.gov.au/sites/default/files/2022-02/AUSTRAC_2022_EngagingAMLCTFAdvisers_web_2.pdf"
          className="text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          Based on AUSTRAC's "Checklist for Engagement of AML/CTF Adviser" (2022)
        </a>
      </p>

      <h2 className="text-xl font-bold text-white">Common Mistakes to Avoid</h2>
      <ul className="list-disc pl-5">
        <li>Choosing based on price alone (this increases compliance costs later)</li>
        <li>Failing to verify the adviser's legal compliance credentials</li>
        <li>Ignoring training quality</li>
        <li>Allowing conflicts of interest in reviews</li>
      </ul>

      <h2 className="text-xl font-bold text-white">Conclusion</h2>
      <p>
        Compliance is no longer optional, it's a must. But it doesn't have to be overwhelming. With the right AML/CTF adviser, you can confidently meet your compliance requirements, stay ahead of regulatory compliance expectations, and manage risks without inflating your compliance costs.
      </p>
      <p>
        At RemitSo, we believe in simplifying AML/CTF compliance for remittance businesses. Our consultancy ensures all your financial compliance needs from risk assessment to training and independent reviews are managed effectively.
      </p>
    </>
  );

  return (
    <BlogPage
      title="How to Choose the Right AML/CTF Adviser: A Step-by-Step Checklist Backed by AUSTRAC"
      image="/knowledge/img-5.png"
      content={content}
      relatedBlogs={relatedBlogs}
    />
  );
};

export default RightAMLAdviser;
