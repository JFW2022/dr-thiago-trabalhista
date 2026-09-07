import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-brand-navy via-brand-navyDark to-brand-navy text-white pt-10 pb-20 md:py-24 overflow-hidden border-b border-brand-amber/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left reveal-left">
            
            {/* Stamp Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-navyCard border border-brand-amber/30 text-brand-amberLight text-xs sm:text-sm font-semibold shadow-md">
              <img
                src="/logo-thiago-andrade-stamp.jpg"
                alt="Selo Thiago Andrade"
                className="size-5 rounded-full object-cover"
              />
              <span>Advocacia trabalhista para quem precisa ser ouvido</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.18]">
              Seus direitos no trabalho merecem{' '}
              <span className="text-gradient-gold italic underline decoration-brand-amber decoration-4 underline-offset-8">
                atenção.
              </span>
            </h1>

            {/* Lead */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Orientação jurídica clara e atendimento próximo para trabalhadores que precisam entender, calcular e defender seus direitos contra demissões injustas, horas extras ou abusos.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contato"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 gold-btn font-extrabold text-base px-9 py-4 rounded-xl shadow-xl hover:scale-[1.03] transition-transform duration-300 uppercase tracking-wide"
              >
                <span>Quero analisar meu caso</span>
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#atuacao"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-slate-300 hover:text-brand-amberLight text-sm font-semibold px-6 py-4 transition-colors"
              >
                <span>Conheça nossa atuação</span>
                <ArrowRight className="size-4" />
              </a>
            </div>

            {/* Trust Row */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-400" />
                Atendimento online nacional
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-brand-amber" />
                Comunicação clara e acessível
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-brand-amber" />
                Sigilo profissional garantido
              </span>
            </div>

          </div>

          {/* Hero Right: Foto Oficial do Dr. Thiago Andrade */}
          <div className="lg:col-span-5 reveal-right delay-200">
            <div className="relative group max-w-md mx-auto">
              
              {/* Outer Golden Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-amber via-brand-amberLight to-brand-navyLight rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
              
              {/* Card Container com Foto */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-brand-amber/40 shadow-2xl bg-brand-navyCard">
                <img
                  src="/dr-thiago-andrade.jpg"
                  alt="Dr. Thiago Andrade - Advogado Trabalhista OAB/RJ 260.276"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top transform transition duration-700 group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/90 via-brand-navyDark/20 to-transparent pointer-events-none" />

                {/* Bottom Floating Info Card */}
                <div className="absolute bottom-4 inset-x-4 glass-navy p-4 rounded-xl border border-brand-amber/30 text-left shadow-lg">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-white font-heading font-extrabold text-base sm:text-lg">
                      Dr. Thiago Andrade
                    </h3>
                    <span className="text-[11px] font-bold bg-brand-amber/20 text-brand-amberLight px-2.5 py-0.5 rounded-full border border-brand-amber/40">
                      OAB/RJ 260.276
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    Defesa técnica, ética e acolhedora dos direitos dos trabalhadores perante a Justiça do Trabalho.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
