import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('global-aml-solution');

export default function GlobalAmlSolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 