import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('money-transfer');

export default function MoneyTransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 