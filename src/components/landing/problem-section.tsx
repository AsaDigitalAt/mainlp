import React from 'react';
import { AlertCircle, PieChart, XCircle } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';

const problemItems = [
  {
    title: "Lucro Invisível",
    desc: "O restaurante vende, mas a margem desaparece entre taxas, descontos, CMV e preços mal calculados.",
    icon: <AlertCircle />
  },
  {
    title: "Gestão Sem Escala",
    desc: "Consultores e gestores perdem tempo analisando manualmente dados que poderiam ser processados em minutos.",
    icon: <PieChart />
  },
  {
    title: "Cardápio Desalinhado",
    desc: "Produtos com preço errado, pouca atratividade ou baixa conversão comprometem o resultado antes mesmo do pedido acontecer.",
    icon: <XCircle />
  }
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#2e4c8c] leading-[1.1]">
                No iFood, <span className="italic text-primary font-serif">vender mais</span><br />
                não significa <span className="italic text-primary border-b-4 border-primary pb-1 font-serif">performar melhor</span>.
              </h2>
              <div className="w-20 h-1.5 bg-[#2e4c8c]/10 mb-8 rounded-full"></div>
              <p className="text-foreground/80 text-xl leading-relaxed mb-6 font-light">
                Muitos restaurantes aparecem, recebem visitas, fazem promoções e até vendem bem — mas continuam perdendo dinheiro por falhas invisíveis no cardápio, na precificação, na conversão e na estratégia comercial.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Para gestores e consultores, o desafio é ainda maior: analisar vários restaurantes com profundidade, velocidade e clareza, sem depender apenas de planilhas, achismos ou horas de diagnóstico manual.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {problemItems.map((item, i) => (
                <div key={i} className="group relative [perspective:1000px]">
                  {/* Backglow */}
                  <div className="absolute -inset-0.5 bg-primary/40 rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
                  
                  <div className="relative bg-primary p-8 rounded-3xl shadow-xl border border-primary/20 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(5deg)_rotateY(10deg)_translateZ(20px)] cursor-default overflow-hidden">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                    
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="bg-white/20 p-5 rounded-2xl border border-white/20 group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-inner text-white group-hover:scale-110">
                        {React.cloneElement(item.icon, { className: "w-8 h-8 transition-transform duration-300" })}
                      </div>
                      <div>
                        <h3 className="font-black text-white text-2xl group-hover:text-white transition-colors duration-300 tracking-tight">{item.title}</h3>
                        <p className="text-white/80 text-base mt-3 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ProblemSection;
