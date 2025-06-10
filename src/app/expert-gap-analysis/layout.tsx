import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('expert-gap-analysis');

export default function ExpertGapAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 