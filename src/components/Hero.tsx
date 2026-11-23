import React, { useState, useRef } from 'react';
import { CheckCircle2, ArrowRight, Play, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-brand-navy via-brand-navyDark to-brand-navy text-white pt-10 pb-20 md:py-24 overflow-hidden border-b border-brand-amber/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left reveal-left">
            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.18]">
              Seus direitos no trabalho merecem{' '}
              <span className="text-gradient-gold underline decoration-brand-amber decoration-4 underline-offset-8">
                ATENÇÃO.
              </span>
            </h1>

            {/* Lead */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Orientação jurídica clara e atendimento próximo para trabalhadores que precisam entender, calcular e defender seus direitos contra demissões injustas, horas extras ou abusos.
            </p>

            {/* Benefit Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-slate-200 text-left">
              <div className="flex items-center gap-2.5 bg-brand-navyCard/60 p-2.5 rounded-lg border border-brand-amber/15">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0" />
                <span>Análise de Verbas e Horas Extras</span>
              </div>
              <div className="flex items-center gap-2.5 bg-brand-navyCard/60 p-2.5 rounded-lg border border-brand-amber/15">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0" />
                <span>Rescisão Indireta e Assédio no Trabalho</span>
              </div>
              <div className="flex items-center gap-2.5 bg-brand-navyCard/60 p-2.5 rounded-lg border border-brand-amber/15">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0" />
                <span>Defesa Técnica Contra Demissão Injusta</span>
              </div>
              <div className="flex items-center gap-2.5 bg-brand-navyCard/60 p-2.5 rounded-lg border border-brand-amber/15">
                <CheckCircle2 className="size-5 text-brand-amber shrink-0" />
                <span>Atendimento 100% Online em Todo o Brasil</span>
              </div>
            </div>

          </div>

          {/* Hero Right: Vídeo Explicativo de Caso Real + Botão de Ação */}
          <div className="lg:col-span-5 reveal-right delay-200">
            <div className="w-full max-w-[340px] sm:max-w-[360px] mx-auto space-y-4">
              
              {/* Main Video Container com Borda Dourada e Aspect Ratio 9:16 */}
              <div 
                className="relative rounded-2xl overflow-hidden border-2 border-brand-amber/40 shadow-2xl bg-brand-navyCard aspect-[9/16] cursor-pointer group"
                onClick={togglePlay}
              >
                <video
                  ref={videoRef}
                  src="/trabalhista-video.mp4"
                  poster="/trabalhista-poster.jpg"
                  preload="metadata"
                  playsInline
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                />

                {/* Custom Overlay when Paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/90 via-brand-navyDark/20 to-transparent flex flex-col justify-between p-4 sm:p-5 transition-opacity duration-300">
                    
                    {/* Top Badge */}
                    <div className="flex justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-brand-amber/40 text-brand-amberLight text-[11px] font-bold uppercase tracking-wider shadow">
                        Caso Real • Direito do Trabalho
                      </span>
                    </div>

                    {/* Center Animated Play Button */}
                    <div className="self-center my-auto">
                      <div className="size-16 sm:size-20 rounded-full bg-gradient-to-tr from-brand-amber to-brand-amberLight text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(206,170,123,0.5)] transform transition-transform duration-300 group-hover:scale-110">
                        <Play className="size-8 sm:size-10 fill-slate-950 text-slate-950 ml-1" />
                      </div>
                    </div>

                    {/* Bottom Floating Info Banner */}
                    <div className="glass-navy px-4 py-3 rounded-xl border border-brand-amber/30 text-center shadow-lg">
                      <span className="text-xs sm:text-sm font-extrabold text-white block tracking-wide">
                        Clique e veja como protegemos seus direitos trabalhistas
                      </span>
                    </div>

                  </div>
                )}

              </div>

              {/* Botão Quero Analisar Meu Caso Abaixo do Vídeo */}
              <div>
                <a
                  href="#contato"
                  className="w-full inline-flex items-center justify-center gap-3 gold-btn font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide border border-brand-amberLight/40"
                >
                  <FileText className="size-5 shrink-0 text-brand-navy" />
                  <span className="text-brand-navy font-black">QUERO ANALISAR MEU CASO</span>
                  <ArrowRight className="size-5 shrink-0 text-brand-navy" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
