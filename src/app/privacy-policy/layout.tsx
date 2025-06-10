import { Metadata } from 'next';
import { generateMetadata } from '@/app/config/metadata';

export const metadata: Metadata = generateMetadata('privacy-policy');

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
} 