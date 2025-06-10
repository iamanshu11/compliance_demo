import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('aml-program');

export default function AmlProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 