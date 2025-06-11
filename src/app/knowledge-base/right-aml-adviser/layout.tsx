import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('right-aml-adviser');

export default function RightAMLAdviserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 