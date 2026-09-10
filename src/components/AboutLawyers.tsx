import React from 'react';
import { CheckCircle2, Scale, ShieldCheck, ArrowRight } from 'lucide-react';

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
                    src="/dr-thiago-andrade.jpg"
                    alt="Dr. Thiago Andrade - Advogado Fundador OAB/RJ 260.276"
                    className="w-full h-[380px] sm:h-[420px] object-cover object-top transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-navyDark/90 via-brand-navyDark/40 to-transparent p-4 text-center">
                    <span className="text-brand-amberLight font-bold text-sm block">Dr. Thiago Andrade</span>
                    <span className="text-xs text-slate-300">Advogado Fundador</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-amber/20 text-brand-amberLight text-xs font-bold uppercase tracking-wider">
                <Scale className="size-3.5" />
                Advogado Titular
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Dr. Thiago Andrade
                </h3>
                <div className="inline-block mt-1 bg-brand-amber/20 text-brand-amberLight text-xs font-bold px-3 py-1 rounded-full border border-brand-amber/40">
                  Advogado – OAB/RJ 260.276
                </div>
              </div>

              <p className="text-slate-200 text-base leading-relaxed font-medium">
                Atuação em Direito Trabalhista e Previdenciário, com atendimento individualizado e compromisso ético irrestrito com o trabalhador.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                O escritório <strong>Thiago Andrade Advocacia</strong> conduz cada caso com rigor técnico e sensibilidade humana, analisando criteriosamente contratos, cartões de ponto, demonstrativos de pagamento e histórico funcional para estruturar pedidos sólidos perante a Justiça do Trabalho.
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-amber/20 text-brand-amberLight text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="size-3.5" />
                Consultoria Especializada
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Dr. Marcelo Igreja
                </h3>
                <p className="text-brand-amberLight font-semibold text-sm sm:text-base mt-1">
                  Consultor Jurídico e Executivo Comercial
                </p>
                <div className="inline-block mt-2 bg-brand-amber/20 text-brand-amberLight text-xs font-bold px-3 py-1 rounded-full border border-brand-amber/40">
                  OAB/CE 57.430
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  Dr. Marcelo Igreja possui sólida trajetória em funções executivas e de liderança em grandes corporações nacionais, com ampla experiência em gestão comercial, desenvolvimento de negócios, condução de equipes e operações de alta complexidade.
                </p>
                <p>
                  É formado em Administração de Empresas, Gestão de Negócios e Direito, possui MBA em Marketing e pós-graduação em Direito do Trabalho. Atualmente, é pós-graduando em Direito Previdenciário, ampliando sua atuação em temas relacionados às relações trabalhistas, à proteção social e aos direitos previdenciários.
                </p>
                <p>
                  Como consultor jurídico do Thiago Andrade Advocacia, alia conhecimento jurídico à experiência empresarial para contribuir com a análise de cenários, identificação de riscos e construção de estratégias adequadas à realidade de cada cliente. Sua atuação é pautada pela visão prática, atendimento próximo e busca por soluções seguras, responsáveis e juridicamente fundamentadas.
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
                    alt="Dr. Marcelo Igreja - Consultor Jurídico e Executivo Comercial OAB/CE 57.430"
                    className="w-full h-[380px] sm:h-[420px] object-cover object-top transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-navyDark/90 via-brand-navyDark/40 to-transparent p-4 text-center">
                    <span className="text-brand-amberLight font-bold text-sm block">Dr. Marcelo Igreja</span>
                    <span className="text-xs text-slate-300">Consultor Jurídico e Executivo Comercial</span>
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
