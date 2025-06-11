import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
}

const baseMetadata: PageMetadata = {
  title: 'RemitSo - Your Trusted Partner in Compliance Consulting',
  description: 'Expert compliance consulting services for Banks, Fintechs, MSBs & regulated industries. Get comprehensive guidance on licensing, AML/CFT programs, and regulatory compliance.',
  keywords: 'compliance consulting, banking compliance, fintech compliance, MSB compliance, regulatory compliance, AML/CFT',
};

const pagesMetadata: Record<string, PageMetadata> = {
  home: {
    ...baseMetadata,
  },
  'money-transfer': {
    title: 'Money Transmitter Licensing - RemitSo',
    description: 'Expert guidance for obtaining and maintaining money transmitter licenses. Comprehensive support for license applications, compliance documentation, risk assessment, and regulatory reporting.',
    keywords: 'money transmitter license, MSB licensing, money transfer license, payment license, regulatory compliance, financial licensing',
  },
  'license-maintenance': {
    title: 'License Maintenance & Renewal Services - RemitSo',
    description: 'Professional license maintenance and renewal services to keep your licenses active and compliant. Comprehensive support for renewal applications, compliance monitoring, and regulatory reporting.',
    keywords: 'license maintenance, license renewal, compliance monitoring, regulatory reporting, license compliance, financial licensing',
  },
  'license-sponsorship': {
    title: 'License Sponsorship Services - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'existing-license': {
    title: 'Existing License Services - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'aml-program': {
    title: 'Aml Program - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'ml-risk-assessments': {
    title: 'ML/TF Risk Assessments - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'expert-gap-analysis': {
    title: 'Expert Gap Analysis & Remediation Roadmap - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'global-aml-solution': {
    title: 'Global AML/CFT Training Solutions - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'build-inhouse': {
    title: 'Build Inhouse Compliance Function - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'navigate-global': {
    title: 'Navigate Global Financial Crime Complexity - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'expert-aml-policy': {
    title: 'Expert AML/CFT Policy - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'third-party': {
    title: 'Third Party Independent Reviews - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'privacy-policy': {
    title: 'Privacy Policy - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'terms-and-conditions': {
    title: 'Terms and Conditions - RemitSo',
    description: 'Expert license sponsorship services to help you obtain and maintain financial licenses. Comprehensive support for license applications, compliance management, and regulatory requirements.',
    keywords: 'license sponsorship, financial licensing, regulatory compliance, license application, compliance management, financial services license',
  },
  'right-aml-adviser': {
    title: 'How to Choose the Right AML/CTF Adviser: A Step-by-Step Checklist Backed by AUSTRAC',
    description: 'Learn how to select the perfect AML/CTF adviser for your business with our comprehensive checklist, backed by AUSTRAC guidelines.',
    keywords: 'AML adviser, CTF adviser, AUSTRAC compliance, compliance checklist, AML/CFT guidance, regulatory compliance',
  },
  'aml-compliance-program': {
    title: '6 Steps to Building an Effective AML Compliance Program',
    description: 'Discover the essential steps to create a robust AML compliance program. Learn about risk assessment, KYC compliance, and regulatory requirements.',
    keywords: 'AML compliance program, risk assessment, KYC compliance, regulatory requirements, compliance framework, AML/CFT program',
  },
  'fatf-compliance-checklist': {
    title: 'FATF Compliance Checklist for Money Transfer Companies (MVTS) – 2025 Complete Expert Guide',
    description: 'Comprehensive FATF compliance checklist for Money Transfer Companies. Learn about risk assessment, CDD, transaction monitoring, and regulatory requirements.',
    keywords: 'FATF compliance, MVTS compliance, money transfer compliance, CDD requirements, transaction monitoring, regulatory compliance',
  },
};

export function generateMetadata(page: string): Metadata {
  const metadata = pagesMetadata[page] || baseMetadata;
  
  return {
    ...metadata,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
    },
  };
} 