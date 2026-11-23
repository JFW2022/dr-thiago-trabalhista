import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const AboutLawyers: React.FC = () => {
  return (
    <section id="advogados" className="py-16 md:py-24 bg-gradient-to-b from-brand-navy via-brand-navyDark to-brand-navy text-white border-t border-brand-amber/20 overflow-hidden relative">
      <div id="sobre" className="absolute -top-24 left-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="text-brand-amberLight font-bold text-xs sm:text-sm uppercase tracking-widest block mb-2">Quem Cuidará do seu Caso</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Advocacia Especializada & Atendimento Individualizado
          </h2>
          <p className="text-slate-300 mt-4 text-sm sm:text-base leading-relaxed">
            Conheça os advogados dedicados a defender os seus direitos trabalhistas com rigor técnico, humanidade e transparência.
          </p>
        </div>

        <div className="space-y-16">

          {/* Dr. Thiago Andrade (Homem de Terno Preto - Foto à Esquerda, Texto à Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-brand-navyCard/60 p-6 sm:p-10 rounded-3xl border border-brand-amber/30 shadow-2xl reveal-left">
            <div className="lg:col-span-5 text-center">
              <div className="relative inline-block group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-amber via-brand-amberLight to-brand-navyLight rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-amber/40 shadow-2xl">
                  <img
                    src="/dr-thiago-andrade.jpg?v=2"
                    alt="Dr. Thiago Andrade - Advogado e Sócio OAB/RJ 260.276"
                    className="w-full h-[380px] sm:h-[420px] object-cover object-top transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 inset-x-3 bg-brand-navyDark/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-brand-amber/35 shadow-xl text-center">
                    <span className="text-brand-amberLight font-bold text-sm sm:text-base block tracking-tight">Dr. Thiago Andrade</span>
                    <span className="text-xs text-slate-300 font-medium block mt-0.5">Advogado e Sócio do Escritório</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-left">
              <div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Dr. Thiago Andrade
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/60 text-brand-amberLight text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="size-3.5 text-brand-amber shrink-0" />
                    Advogado & Sócio
                  </span>
                  <span className="inline-block bg-brand-amber/20 text-brand-amberLight text-xs font-bold px-3 py-1 rounded-full border border-brand-amber/40">
                    OAB/RJ 260.276
                  </span>
                </div>
              </div>

              <p className="text-slate-200 text-base leading-relaxed font-medium">
                Atuação em Direito Trabalhista e Previdenciário, com atendimento individualizado e compromisso ético irrestrito com o trabalhador.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                O escritório <strong>Marcelo Igreja & Thiago Andrade Advocacia</strong> conduz cada caso com rigor técnico e sensibilidade humana, analisando criteriosamente contratos, cartões de ponto, demonstrativos de pagamento e histórico funcional para estruturar pedidos sólidos perante a Justiça do Trabalho.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2 bg-brand-navyDark/60 p-2.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="size-4 text-brand-amber shrink-0" />
                  <span>Atendimento Individualizado e Direto</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-navyDark/60 p-2.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="size-4 text-brand-amber shrink-0" />
                  <span>Sede no RJ e Atuação em Todo o Brasil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Marcelo Igreja (Homem de Terno Azul - Texto à Esquerda, Foto à Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-brand-navyCard/60 p-6 sm:p-10 rounded-3xl border border-brand-amber/30 shadow-2xl reveal-right">
            
            {/* Texto à Esquerda */}
            <div className="lg:col-span-7 space-y-5 text-left order-2 lg:order-1">
              <div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Dr. Marcelo Igreja
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/60 text-brand-amberLight text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="size-3.5 text-brand-amber shrink-0" />
                    Advogado & Sócio
                  </span>
                  <span className="inline-block bg-brand-amber/20 text-brand-amberLight text-xs font-bold px-3 py-1 rounded-full border border-brand-amber/40">
                    OAB/CE 57.430
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  Dr. Marcelo Igreja é advogado, pós-graduado em Direito do Trabalho, pós-graduando em Direito Previdenciário e sócio do escritório Marcelo Igreja & Thiago Andrade Advocacia. Sua atuação tem como foco o Direito do Trabalho, com orientação e defesa de trabalhadores e empresas em questões decorrentes das relações de emprego.
                </p>
                <p>
                  Sua trajetória profissional em grandes corporações, exercendo funções executivas e de liderança, proporciona uma compreensão prática do ambiente empresarial, da gestão de pessoas e dos conflitos que podem surgir entre empregados e empregadores. Essa vivência complementa sua formação jurídica e contribui para uma análise mais ampla das situações apresentadas pelos clientes.
                </p>
                <p>
                  Na área trabalhista, atua em demandas relacionadas a contratos de trabalho, verbas rescisórias, horas extras, adicionais, reconhecimento de vínculo, acidentes e doenças ocupacionais, assédio, estabilidade, desligamentos e demais direitos decorrentes da relação de emprego.
                </p>
                <p>
                  Como sócio do escritório, Dr. Marcelo Igreja participa da análise individualizada de cada caso e da construção das estratégias jurídicas, com atendimento próximo, comunicação clara e atuação responsável na prevenção e na solução de conflitos trabalhistas.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-amber to-brand-amberDark text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-xl hover:brightness-110 transition-all text-xs sm:text-sm uppercase tracking-wide"
                >
                  <span>VERIFICAR MEU CASO COM A EQUIPE</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Foto à Direita */}
            <div className="lg:col-span-5 text-center order-1 lg:order-2">
              <div className="relative inline-block group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-amber via-brand-amberLight to-brand-navyLight rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-amber/40 shadow-2xl">
                  <img
                    src="/dr-marcelo-igreja.jpg"
                    alt="Dr. Marcelo Igreja - Advogado e Sócio OAB/CE 57.430"
                    className="w-full h-[380px] sm:h-[420px] object-cover object-top transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 inset-x-3 bg-brand-navyDark/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-brand-amber/35 shadow-xl text-center">
                    <span className="text-brand-amberLight font-bold text-sm sm:text-base block tracking-tight">Dr. Marcelo Igreja</span>
                    <span className="text-xs text-slate-300 font-medium block mt-0.5">Advogado e Sócio do Escritório</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
