import React from 'react';
import { ArrowRight, Shield, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';

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

          {/* Hero Right Visual Card */}
          <div className="lg:col-span-5 reveal-right delay-200">
            <div className="relative group max-w-md mx-auto">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-amber via-brand-amberLight to-brand-navyCard rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-brand-amber/30 shadow-2xl bg-brand-navyCard/90 p-6 sm:p-8 space-y-6">
                
                {/* Monogram Badge */}
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                  <div className="size-14 rounded-2xl bg-brand-amber/15 border border-brand-amber/40 flex items-center justify-center text-brand-amberLight font-heading font-black text-2xl tracking-wider">
                    TA
                  </div>
                  <div className="text-right">
                    <span className="block text-[11px] font-bold text-brand-amberLight uppercase tracking-wider">
                      Dr. Thiago Andrade
                    </span>
                    <span className="text-[11px] text-slate-400">
                      OAB/RJ 260.276
                    </span>
                  </div>
                </div>

                {/* Card Quote / Statement */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-brand-amber uppercase tracking-wider block">
                    Seu caso começa com
                  </span>
                  <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    Escuta atenta, análise individualizada e orientação responsável.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Examinamos cada detalhe do seu contrato, recibos e jornada para que você compreenda com transparência todas as alternativas jurídicas viáveis.
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-2.5 pt-2 border-t border-slate-700/80 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <FileText className="size-4 text-brand-amber shrink-0" />
                    <span>Cálculo prévio das verbas não quitadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="size-4 text-emerald-400 shrink-0" />
                    <span>Defesa rigorosa perante a Justiça do Trabalho</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="size-4 text-brand-amber shrink-0" />
                    <span>Acompanhamento direto pelo WhatsApp</span>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="h-1 bg-gradient-to-r from-brand-amber via-brand-amberLight to-brand-amber rounded-full" />

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
