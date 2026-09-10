import React from 'react';
import { MessageSquare, FileSearch, Scale, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Conte o Seu Caso',
    desc: 'Preencha o formulário confidencial informando sua situação e o que aconteceu durante o contrato de trabalho.',
    icon: MessageSquare
  },
  {
    step: '02',
    title: 'Análise Preliminar',
    desc: 'Nossa equipe jurídica realiza uma avaliação cuidadosa dos fatos narrados e dos documentos disponíveis.',
    icon: FileSearch
  },
  {
    step: '03',
    title: 'Orientação Clara',
    desc: 'Você recebe um diagnóstico transparente sobre seus direitos, eventuais valores devidos e as melhores opções cabíveis.',
    icon: Scale
  },
  {
    step: '04',
    title: 'Defesa Responsável',
    desc: 'Havendo viabilidade e sua autorização, damos início às medidas judiciais ou extrajudiciais com acompanhamento próximo.',
    icon: CheckCircle2
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-brand-cream/50 border-t border-b border-brand-creamDark relative">
      <div id="processo" className="absolute -top-24 left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-amber/15 text-brand-amberDark text-xs font-bold uppercase tracking-wider mb-3">
            Passo a Passo
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
            Como funciona o atendimento com nossos advogados?
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Um processo simples, ágil e sem burocracia para você entender seus direitos antes de qualquer decisão.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-brand-amber/50 transition-all duration-300 relative flex flex-col justify-between reveal-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-brand-amber/30">
                      {item.step}
                    </span>
                    <div className="size-12 rounded-2xl bg-brand-navy text-brand-amber flex items-center justify-center shadow-md">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-amberDark">
                  <CheckCircle2 className="size-4 text-brand-amber" />
                  <span>Atendimento Humanizado</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action */}
        <div className="mt-14 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-3 gold-btn font-extrabold text-sm sm:text-base px-9 py-4 rounded-xl shadow-xl hover:scale-105 transition-all uppercase tracking-wide"
          >
            <span>Iniciar o Passo 01: Enviar Meu Caso</span>
            <ArrowRight className="size-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
