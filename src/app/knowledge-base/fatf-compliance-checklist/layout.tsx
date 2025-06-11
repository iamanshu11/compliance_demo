import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('fatf-compliance-checklist');

export default function FATFComplianceChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 