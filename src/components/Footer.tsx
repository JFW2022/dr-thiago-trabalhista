import React from 'react';
import { Scale, ShieldCheck, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navyDark text-slate-400 text-xs border-t border-brand-amber/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-xl bg-brand-amber/15 border border-brand-amber/40 flex items-center justify-center text-brand-amber font-heading font-black text-xl">
                TA
              </div>
              <div>
                <h3 className="text-white font-heading font-extrabold text-base tracking-wide">
                  THIAGO ANDRADE
                </h3>
                <span className="text-[11px] text-brand-amberLight tracking-wider uppercase block font-semibold">
                  Advocacia Trabalhista & Previdenciária
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Defesa ética, combativa e humanizada dos direitos dos trabalhadores em todo o território nacional.
            </p>

            <div className="space-y-1.5 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Scale className="size-4 text-brand-amber" />
                <span>Dr. Thiago Andrade – OAB/RJ 260.276</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-amber" />
                <span>Dr. Marcelo Igreja – OAB/CE 57430</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-brand-amber" />
                <span>Sede no Rio de Janeiro/RJ • Atendimento em Todo o Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-brand-amberLight transition-colors">Início</a></li>
              <li><a href="#atuacao" className="hover:text-brand-amberLight transition-colors">Áreas de Atuação</a></li>
              <li><a href="#advogados" className="hover:text-brand-amberLight transition-colors">Quem Cuidará do seu Caso</a></li>
              <li><a href="#como-funciona" className="hover:text-brand-amberLight transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-amberLight transition-colors">Depoimentos Reais</a></li>
              <li><a href="#duvidas" className="hover:text-brand-amberLight transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-brand-amberLight transition-colors">Solicitar Atendimento</a></li>
            </ul>
          </div>

          {/* Legal Notice */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Aviso Legal & Ética OAB
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Este site tem finalidade estritamente informativa e institucional, em total conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB).
            </p>
            <p className="text-[11px] leading-relaxed text-slate-400">
              O envio de dados por meio dos formulários deste site não estabelece vínculo contratual imediato nem garante resultados judiciais específicos.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Thiago Andrade Advocacia. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[11px] text-brand-amber hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="size-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
