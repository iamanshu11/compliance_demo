import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('license-sponsorship');

export default function LicenseSponsorshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 