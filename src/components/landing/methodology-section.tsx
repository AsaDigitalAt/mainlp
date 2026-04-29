import { Camera, Zap, FileText } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';

const methodologySteps = [
  {
    step: "01",
    title: "Envio Inteligente",
    desc: "Envie o print do funil, cadastre os dados do restaurante ou cole o link do iFood para iniciar uma análise estratégica em poucos minutos.",
    icon: <Camera className="w-6 h-6 text-primary" />
  },
  {
    step: "02",
    title: "Diagnóstico com IA",
    desc: "Nossa inteligência cruza indicadores de performance, cardápio, precificação, descontos, conversão e posicionamento comercial para encontrar gargalos reais.",
    icon: <Zap className="w-6 h-6 text-primary" />
  },
  {
    step: "03",
    title: "Plano de Ação Prático",
    desc: "Receba recomendações objetivas para corrigir erros, priorizar ajustes e transformar análise em melhoria operacional.",
    icon: <FileText className="w-6 h-6 text-primary" />
  }
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">SIMPLES, RÁPIDO E ESTRATÉGICO</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2e4c8c]">
              Do dado bruto ao plano de ação <br /> em 3 passos
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
          {methodologySteps.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 200}>
              <div className="group relative h-full [perspective:1000px]">
                {/* Backglow */}
                <div className="absolute -inset-0.5 bg-primary/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                <div className="relative bg-[#fff4e2]/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-[#2e4c8c]/5 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(5deg)_rotateY(-10deg)_translateZ(30px)] shadow-xl h-full flex flex-col text-center md:text-left">
                  <div className="w-16 h-16 bg-white rounded-2xl border border-primary/20 flex items-center justify-center mb-8 shadow-inner mx-auto md:mx-0 relative z-10 group-hover:scale-125 transition-all group-hover:shadow-[0_0_20px_rgba(234,29,44,0.2)]">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-[#2e4c8c] mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-foreground/80 leading-relaxed text-base font-medium flex-grow">{item.desc}</p>
                  
                  {/* Step indicator */}
                  <div className="absolute top-8 right-8 text-4xl font-black text-[#2e4c8c]/5 select-none">{item.step}</div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
