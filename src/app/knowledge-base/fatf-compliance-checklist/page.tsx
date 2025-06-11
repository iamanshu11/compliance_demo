'use client';

import FATFComplianceChecklist from '@/components/sections/knowledge-base/fatf-compliance-checklist';

export default function FATFComplianceChecklistPage() {
  return (
    <main className="min-h-screen bg-[#06232c] py-16 px-4">
      <div className="container mx-auto">
        <FATFComplianceChecklist />
      </div>
    </main>
  );
}