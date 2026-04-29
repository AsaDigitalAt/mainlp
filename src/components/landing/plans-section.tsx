import { CheckCircle2, Crown } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';

const PlansSection = () => {
  return (
    <section id="planos" className="py-24 px-6 relative overflow-hidden bg-[#fff4e2]">
      {/* Background blobs for enhanced glass effect */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#2e4c8c] tracking-tight">
              Planos para quem opera, gerencia <br /> ou escala restaurantes no iFood.
            </h2>
            <p className="text-foreground/60 text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Para restaurantes que querem melhorar sua performance e para gestores ou consultores que precisam analisar mais negócios com velocidade e precisão.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {/* Plan 1: Essencial */}
          <RevealOnScroll delay={0}>
            <div className="group relative h-full transition-all duration-500 [perspective:1000px]">
              {/* Backglow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2e4c8c]/20 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative h-full bg-white/40 backdrop-blur-xl border border-white/40 p-10 rounded-[2.5rem] shadow-2xl transition-all duration-500 group-hover:[transform:rotateX(5deg)_rotateY(-5deg)] flex flex-col">
                <div className="mb-8">
                  <h3 className="text-xl font-black text-[#2e4c8c] uppercase tracking-widest">Essencial</h3>
                  <p className="text-foreground/60 text-sm mt-2">Para começar com inteligência.</p>
                </div>
                
                <div className="mb-10 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-[#2e4c8c]">R$ 99</span>
                  <span className="text-foreground/40 text-lg font-medium">/mês</span>
                </div>

                <ul className="space-y-5 mb-10 flex-grow">
                  {[
                    "2 Diagnósticos de Performance",
                    "10 Diagnósticos Gerais",
                    "25 Precificações"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium">
                      <div className="bg-[#2e4c8c]/10 p-1.5 rounded-full ring-1 ring-[#2e4c8c]/20">
                        <CheckCircle2 className="w-4 h-4 text-[#2e4c8c]" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-foreground/50 text-xs leading-relaxed mb-8 italic border-l-2 border-[#2e4c8c]/10 pl-4">
                  Ideal para restaurantes em fase de melhoria, gestores que acompanham poucas operações ou consultores que desejam testar a metodologia Asa Food com seus primeiros clientes.
                </p>

                <a href="https://checkout4.xgrow.com/pt/727d6c86-f33e-406e-9154-77efc7829088/MTAxNzE1" target="_blank" rel="noopener noreferrer" 
                   className="relative overflow-hidden group/btn block text-center w-full py-5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase border-2 border-[#2e4c8c]/20 text-[#2e4c8c] transition-all hover:bg-[#2e4c8c] hover:text-white hover:border-[#2e4c8c] hover:shadow-[0_0_30px_rgba(46,76,140,0.4)]">
                  <span className="relative z-10">COMEÇAR COM O ESSENCIAL</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]"></div>
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Plan 2: Performance */}
          <RevealOnScroll delay={100}>
            <div className="group relative h-full transition-all duration-500 [perspective:1000px]">
              {/* Backglow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative h-full bg-white/60 backdrop-blur-xl border border-white/50 p-10 rounded-[2.5rem] shadow-2xl transition-all duration-500 group-hover:[transform:translateZ(20px)_rotateX(5deg)] flex flex-col">
                <div className="mb-8">
                  <h3 className="text-xl font-black text-accent uppercase tracking-widest">Performance</h3>
                  <p className="text-accent/70 text-sm mt-2 font-bold">Mais análises, mais consistência.</p>
                </div>

                <div className="mb-10 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-[#2e4c8c]">R$ 149</span>
                  <span className="text-foreground/40 text-lg font-medium">/mês</span>
                </div>

                <ul className="space-y-5 mb-10 flex-grow">
                  {[
                    "4 Diagnósticos de Performance",
                    "25 Diagnósticos Gerais",
                    "100 Precificações"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium">
                      <div className="bg-accent/10 p-1.5 rounded-full ring-1 ring-accent/30">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-foreground/50 text-xs leading-relaxed mb-8 italic border-l-2 border-accent/20 pl-4">
                  Ideal para quem precisa acompanhar restaurantes com mais frequência, comparar cenários, revisar cardápios e gerar recomendações com mais volume ao longo do mês.
                </p>

                <a href="https://checkout4.xgrow.com/pt/727d6c86-f33e-406e-9154-77efc7829088/MTAxNzE3" target="_blank" rel="noopener noreferrer" 
                   className="relative overflow-hidden group/btn block text-center w-full py-5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase bg-accent text-white transition-all hover:bg-[#65b8c3] hover:shadow-[0_0_40px_rgba(122,206,216,0.6)] animate-[pulse-glow_3s_infinite]">
                  <span className="relative z-10">ESCALAR MINHAS ANÁLISES</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]"></div>
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Plan 3: Acelerador */}
          <RevealOnScroll delay={200}>
            <div className="group relative h-full transition-all duration-500 [perspective:1000px]">
              {/* Backglow - Intense Red */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/20 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

              <div className="relative h-full bg-white/80 backdrop-blur-2xl border-2 border-primary/30 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(234,29,44,0.1)] transition-all duration-500 group-hover:[transform:rotateX(5deg)_rotateY(5deg)_translateZ(30px)] flex flex-col overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white px-6 py-3 rounded-bl-3xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg">
                  <Crown className="w-4 h-4 fill-white" /> MAIS COMPLETO
                </div>
                
                <div className="mb-8 pt-4">
                  <h3 className="text-2xl font-black text-primary uppercase tracking-widest">Acelerador</h3>
                  <p className="text-foreground/60 text-sm mt-2 font-bold uppercase tracking-tighter">Gestão e consultoria em escala</p>
                </div>

                <div className="mb-10 flex items-baseline gap-1">
                  <span className="text-6xl font-black text-foreground">R$ 247</span>
                  <span className="text-foreground/40 text-lg font-medium">/mês</span>
                </div>

                <ul className="space-y-6 mb-10 flex-grow">
                  {[
                    "10 Diagnósticos de Performance",
                    "50 Diagnósticos Gerais",
                    "200 Precificações"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-foreground/90 font-bold">
                      <div className="bg-primary/10 p-1.5 rounded-full ring-1 ring-primary/40">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-foreground/50 text-xs leading-relaxed mb-8 italic border-l-2 border-primary/20 pl-4">
                  Ideal para consultores, assessorias, gestores de múltiplas operações e profissionais que precisam transformar análise de restaurantes em rotina estratégica de crescimento.
                </p>

                <a href="https://checkout4.xgrow.com/pt/727d6c86-f33e-406e-9154-77efc7829088/MTAxNzE5" target="_blank" rel="noopener noreferrer" 
                   className="relative overflow-hidden group/btn block text-center w-full py-6 bg-primary text-white rounded-2xl font-black text-[12px] tracking-[0.3em] uppercase transition-all hover:bg-[#c41522] hover:scale-105 hover:shadow-[0_0_50px_rgba(234,29,44,0.7)] animate-[intense-pulse_2s_infinite]">
                  <span className="relative z-10">QUERO ACELERAR</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(122, 206, 216, 0.4); }
          50% { box-shadow: 0 0 40px rgba(122, 206, 216, 0.8); }
        }
        @keyframes intense-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.95; }
        }
      `}</style>
    </section>
  );
};

export default PlansSection;
