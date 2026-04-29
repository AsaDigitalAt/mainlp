"use client";

import { InteractiveBackground } from '@/components/ui/interactive-background';
import Header from '@/components/landing/header';
import ProblemSection from '@/components/landing/problem-section';
import MethodologySection from '@/components/landing/methodology-section';
import EcosystemSection from '@/components/landing/ecosystem-section';
import AuthoritySection from '@/components/landing/authority-section';
import PlansSection from '@/components/landing/plans-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff4e2] text-[#141415] font-body relative overflow-x-hidden antialiased">
      <InteractiveBackground />
      <Header />
      <main>
        <ProblemSection />
        <MethodologySection />
        <EcosystemSection />
        <AuthoritySection />
        <PlansSection />
      </main>
      <Footer />
    </div>
  );
}
