import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('existing-license');

export default function ExistingLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 