import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('license-maintenance');

export default function LicenseMaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 