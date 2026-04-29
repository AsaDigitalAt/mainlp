import { FileText, Calculator, ImageIcon, Rocket } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';

const EcosystemSection = () => {
  return (
    <section className="py-24 px-6 bg-[#2e4c8c] text-[#fff4e2] relative overflow-hidden rounded-[3rem] mx-2 lg:mx-6 my-6">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-accent text-xs font-bold tracking-widest mb-6 uppercase">
                ECOSSISTEMA ASAFOOD
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Seu centro de inteligência para operar e escalar no iFood.
              </h2>
              <p className="text-[#fff4e2]/80 text-lg leading-relaxed mb-8">
                A Asa Food não é apenas uma ferramenta de diagnóstico. É uma plataforma criada para quem precisa tomar decisões melhores, mais rápidas e com mais profundidade — seja analisando o próprio restaurante, gerenciando várias operações ou prestando consultoria para clientes.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Diagnóstico de Performance</h4>
                    <p className="text-sm text-white/60">Analise o funil do iFood, identifique perdas por etapa e descubra onde o restaurante está deixando vendas escaparem.</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10 ml-6"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-white/10 flex items-center justify-center text-accent">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Diagnóstico Geral por Link</h4>
                    <p className="text-sm text-white/60">Cole o link de um restaurante no iFood e receba uma análise estratégica sobre posicionamento, cardápio, preços, avaliações e percepção comercial.</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10 ml-6"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-white/10 flex items-center justify-center text-accent">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Calculadora de Precificação</h4>
                    <p className="text-sm text-white/60">Simule preços com base em custos, margem, impostos, taxas e modelo de entrega para evitar produtos que vendem muito e lucram pouco.</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="group relative h-full [perspective:1000px]">
              {/* Backglow */}
              <div className="absolute -inset-1 bg-white/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
              
              <div className="relative bg-white/10 border border-white/20 rounded-[3rem] p-12 backdrop-blur-2xl shadow-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(5deg)_rotateY(5deg)_translateZ(40px)] flex flex-col justify-between h-full min-h-[450px] overflow-hidden">
                <div className="absolute -top-6 -right-6 bg-primary p-5 rounded-3xl shadow-2xl transform rotate-12 group-hover:scale-110 group-hover:rotate-[20deg] transition-all duration-500 relative z-20">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-4xl font-black text-white mb-8 leading-tight tracking-tighter">
                    Escala para quem <br />
                    <span className="text-accent drop-shadow-[0_0_15px_rgba(122,206,216,0.3)]">analisa restaurantes</span>
                  </h3>
                  <div className="w-16 h-1.5 bg-primary mb-8 rounded-full"></div>
                  <p className="text-white/80 text-xl leading-relaxed font-medium max-w-md">
                    A Asa Food permite que gestores, consultores e especialistas aumentem sua capacidade de análise sem perder profundidade. Em vez de gastar horas avaliando cada operação manualmente, você ganha velocidade para diagnosticar mais restaurantes.
                  </p>
                </div>
                
                <div className="mt-12 group/btn relative overflow-hidden bg-white text-[#2e4c8c] p-8 rounded-[2rem] font-black text-xl text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-b-8 border-primary transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(234,29,44,0.4)]">
                  <span className="relative z-10">Analise mais. Decida melhor. <br /> Escale com dados.</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EA1D2C]/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
