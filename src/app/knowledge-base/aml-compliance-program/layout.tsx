import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('aml-compliance-program');

export default function AMLComplianceProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 