"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';
import { LOGO_URL } from '@/lib/constants';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="pt-16 pb-32 lg:pt-24 lg:pb-40 px-6 relative z-10 bg-gradient-to-br from-[#EA1D2C] via-[#EA1D2C] to-[#b0121d] text-white rounded-b-[4rem] lg:rounded-b-[6rem] shadow-[0_30px_100px_rgba(234,29,44,0.3)] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-[#2e4c8c]/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative">
        <div className="flex justify-center mb-12 transform hover:scale-105 transition-transform duration-500">
          <Image
            src={LOGO_URL}
            alt="AsaFood Logo"
            width={200}
            height={50}
            className="h-10 md:h-12 w-auto object-contain filter brightness-0 invert"
            priority
          />
        </div>

        <RevealOnScroll>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-[#fff4e2] text-[10px] md:text-xs font-black tracking-[0.3em] mb-12 backdrop-blur-xl uppercase shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#7aced8] animate-ping"></span>
            INTELIGÊNCIA PARA DELIVERY
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-white tracking-tighter mb-10 leading-[0.95] flex flex-col items-center">
            <span className="block md:whitespace-nowrap">Transforme dados do iFood em</span>
            <span className="relative inline-block mt-4 text-[#fff4e2] font-serif italic font-light drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] lowercase lg:text-[6rem] md:whitespace-nowrap px-4 md:px-0">
              decisões que aumentam vendas
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#fff4e2] rounded-full opacity-20 blur-[2px]"></div>
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#fff4e2] rounded-full animate-pulse opacity-40"></div>
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="text-xl md:text-2xl text-[#fff4e2]/90 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            A Asa Food ajuda restaurantes, gestores e consultores a identificarem gargalos, precificarem melhor e criarem planos de ação com base em dados reais.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className="flex flex-col items-center gap-10">
            {/* Primary Button with 3D and Backglow */}
            <div className="group relative [perspective:1000px]">
              {/* Permanent Backglow */}
              <div className="absolute -inset-1 bg-white/40 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <button
                onClick={() => scrollToSection('planos')}
                className="relative px-12 py-6 bg-white text-[#EA1D2C] rounded-2xl font-black text-sm md:text-base tracking-[0.2em] uppercase shadow-[0_10px_40px_rgba(255,255,255,0.3)] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(10deg)_rotateY(10deg)_translateZ(20px)] flex items-center gap-4 group/btn"
              >
                <span className="relative z-10">QUERO ANALISAR AGORA →</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                
                {/* Internal Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EA1D2C]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
              </button>
            </div>

            <button
              onClick={() => scrollToSection('metodologia')}
              className="text-[#fff4e2]/70 font-black text-xs tracking-[0.3em] uppercase border-b-2 border-white/20 pb-2 hover:text-white hover:border-white transition-all transform hover:scale-110"
            >
              Entenda como funciona
            </button>
          </div>
        </RevealOnScroll>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </header>
  );
};

export default Header;
