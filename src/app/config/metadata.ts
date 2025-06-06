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
  // Add more pages here as needed
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