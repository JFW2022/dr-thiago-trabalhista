import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

export const IntroBand: React.FC = () => {
  return (
    <section className="bg-brand-cream py-10 sm:py-14 border-b border-brand-creamDark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-brand-amber/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 reveal-up">
          <div className="space-y-2 text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 text-brand-amberDark font-bold text-xs uppercase tracking-wider">
              <AlertCircle className="size-4 text-brand-amber" />
              <span>Dúvidas Trabalhistas Frequentes</span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-brand-navy leading-snug">
              Demissão, valores não pagos, jornada excessiva ou ambiente de trabalho abusivo?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Você não precisa enfrentar essa dúvida sozinho. Conte com a análise técnica e o apoio de advogados experientes na Justiça do Trabalho.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 gold-btn font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all uppercase tracking-wide whitespace-nowrap"
            >
              <span>Explicar meu caso</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
