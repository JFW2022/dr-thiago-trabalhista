import React from 'react';
import { MapPin, Scale, ShieldCheck } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <aside aria-label="Informações Institucionais" className="bg-brand-navyDark text-slate-300 text-[11px] sm:text-xs py-2 border-b border-brand-amber/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
        
        <div className="flex items-center gap-2 text-brand-amberLight font-medium">
          <MapPin className="size-3.5 text-brand-amber shrink-0" />
          <span>Rio de Janeiro - RJ (Atendimento Nacional Online e Presencial)</span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5">
            <Scale className="size-3.5 text-brand-amber shrink-0" />
            OAB/RJ 260.276
          </span>
          <span className="hidden sm:inline-block text-slate-600">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-emerald-400 shrink-0" />
            Análise Prévia e Sigilosa
          </span>
        </div>

      </div>
    </aside>
  );
};
