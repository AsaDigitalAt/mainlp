import { Users, Award, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';

const AuthoritySection = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">EXPERTISE E RESULTADOS</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2e4c8c]">
              Tecnologia criada para o <br /> campo de batalha do delivery.
            </h2>
          </div>
        </RevealOnScroll>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll delay={0}>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-[#fff4e2] w-14 h-14 rounded-2xl flex items-center justify-center border border-[#2e4c8c]/10">
                  <Users className="w-7 h-7 text-[#2e4c8c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2e4c8c] mb-2">Desenvolvido com Especialistas</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Nossos agentes de IA foram estruturados com base em diagnósticos reais, feedbacks de consultores, gestores de delivery e profissionais que lidam todos os dias com operação, cardápio, margem e conversão.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-[#fff4e2] w-14 h-14 rounded-2xl flex items-center justify-center border border-[#2e4c8c]/10">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2e4c8c] mb-2">Análises para Decisões Reais</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    A metodologia da Asa Food não existe para gerar relatórios bonitos. Ela existe para revelar problemas, priorizar correções e mostrar com clareza onde o restaurante precisa agir para melhorar performance.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="group relative h-full [perspective:1000px]">
              {/* Backglow */}
              <div className="absolute -inset-0.5 bg-primary/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative bg-[#fff4e2]/80 backdrop-blur-xl border-2 border-primary/20 rounded-[2.5rem] p-10 md:p-12 shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(5deg)_rotateY(10deg)_translateZ(40px)] flex flex-col h-full overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary/10 w-40 h-40 rounded-bl-full group-hover:bg-primary/20 transition-all duration-500"></div>
                
                <div className="flex items-center gap-4 mb-10 relative z-10">
                  <div className="bg-primary p-3 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform">
                    <ClipboardCheck className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">O DIFERENCIAL</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-[#2e4c8c] mb-8 leading-tight tracking-tighter relative z-10">
                  Análise prática para restaurantes, gestores e consultores
                </h3>
                
                <p className="text-foreground/80 text-xl leading-relaxed mb-10 font-medium relative z-10">
                  A Asa Food entrega diagnósticos objetivos para quem precisa enxergar o negócio com frieza. É uma leitura estratégica dos dados para identificar perdas e transformar informação em ação.
                </p>
                
                <div className="space-y-4 bg-white/40 p-8 rounded-3xl border border-white/50 shadow-inner relative z-10">
                  {[
                    "Diagnóstico de funil e conversão",
                    "Análise geral pelo link do iFood",
                    "Correções de precificação",
                    "Estratégia de cardápio, taxas e descontos",
                    "Plano de ação para execução imediata"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className="bg-accent/20 p-1.5 rounded-full ring-1 ring-accent/30 group-hover/item:bg-accent group-hover/item:text-white transition-all">
                        <CheckCircle2 className="w-4 h-4 text-[#2e4c8c]" />
                      </div>
                      <span className="text-base font-bold text-[#2e4c8c]/80 group-hover/item:text-[#2e4c8c] transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
