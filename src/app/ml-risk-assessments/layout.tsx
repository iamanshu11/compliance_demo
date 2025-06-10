import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('ml-risk-assessments');

export default function MlRiskAssessmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 