import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-navy/95 backdrop-blur-md border-b border-brand-amber/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <img
              src="/logo-thiago-andrade-horizontal.jpg"
              alt="Thiago Andrade Advocacia Trabalhista"
              className="h-11 sm:h-12 w-auto object-contain rounded border border-brand-amber/20"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
            <a href="#atuacao" className="hover:text-brand-amberLight transition-colors">
              Atuação
            </a>
            <a href="#advogados" className="hover:text-brand-amberLight transition-colors">
              Advogados
            </a>
            <a href="#processo" className="hover:text-brand-amberLight transition-colors">
              Como Funciona
            </a>
            <a href="#depoimentos" className="hover:text-brand-amberLight transition-colors">
              Depoimentos
            </a>
            <a href="#duvidas" className="hover:text-brand-amberLight transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#contato"
              className="gold-btn font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg uppercase tracking-wider flex items-center gap-2 whitespace-nowrap"
            >
              <span>Falar com Advogado</span>
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-brand-navyCard focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-navyDark border-b border-brand-amber/20 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#atuacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-brand-amberLight hover:bg-brand-navyCard"
          >
            Atuação Trabalhista
          </a>
          <a
            href="#advogados"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-brand-amberLight hover:bg-brand-navyCard"
          >
            Quem Cuidará do seu Caso
          </a>
          <a
            href="#processo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-brand-amberLight hover:bg-brand-navyCard"
          >
            Como Funciona
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-brand-amberLight hover:bg-brand-navyCard"
          >
            Depoimentos
          </a>
          <a
            href="#duvidas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-brand-amberLight hover:bg-brand-navyCard"
          >
            Dúvidas Frequentes
          </a>
          <div className="pt-2">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full gold-btn font-extrabold text-sm px-5 py-3.5 rounded-xl shadow-lg uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Falar com Advogado</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
