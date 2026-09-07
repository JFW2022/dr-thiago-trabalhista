import React, { useState, useEffect, useRef } from 'react';
import { Star, MessageSquareQuote, ShieldCheck, FileSearch, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  context: string;
  image?: string;
  fullText?: string[];
}

const testimonials: Testimonial[] = [
  {
    name: 'Lívia & Bernardo',
    context: 'Condução e Atendimento Dedicado',
    image: '/depoimento-2.jpg'
  },
  {
    name: 'Karem Vasconcelos',
    context: 'Atendimento Atencioso e Confiança no Processo',
    image: '/depoimento-8.jpg'
  },
  {
    name: 'Rapha',
    context: 'Clareza, Presteza e Condução Eficaz',
    image: '/depoimento-7.jpg'
  },
  {
    name: 'Marcio Lisboa',
    context: 'Apoio Incansável e Dedicação Integral',
    fullText: [
      'Existem momentos na vida em que descobrimos quem realmente está ao nosso lado. E, para mim, o Dr. Thiago foi uma dessas pessoas.',
      'Em um dos momentos mais difíceis e delicados da minha vida, quando me vi diante de uma situação que jamais imaginei enfrentar, o Dr. Thiago não foi apenas o advogado que me representou. Ele foi a pessoa que esteve mais próxima de mim durante todo esse período, transmitindo segurança, tranquilidade e confiança quando eu mais precisava.',
      'Sua atuação profissional foi simplesmente excepcional. Mesmo com o processo ainda em curso, posso afirmar que sua dedicação e seu trabalho foram fundamentais para resolver aquilo que, naquele momento, representava o maior problema da minha vida.',
      'O Dr. Thiago esteve presente de forma incansável. Foi ao Ministério Público, ao cartório, ao fórum e esteve onde fosse necessário, acompanhando cada detalhe, buscando soluções e trabalhando de maneira intensa para que tudo fosse conduzido da melhor forma possível.',
      'Mais do que competência jurídica, encontrei nele comprometimento, humanidade e lealdade.',
      'Em nenhum momento senti que estava enfrentando aquela situação sozinho. Eu sabia que havia alguém trabalhando por mim, defendendo meus interesses e, principalmente, acreditando que eu merecia ter minha história analisada com justiça.',
      'Sua dedicação foi em tempo integral. Não mediu esforços, não se limitou ao horário de trabalho e esteve disponível nos momentos em que mais precisei. Isso, para alguém que está passando por uma situação tão difícil, tem um valor que vai muito além de qualquer contrato profissional.',
      'Por isso, minha gratidão ao Dr. Thiago é enorme. Posso dizer, com absoluta tranquilidade, que tive ao meu lado um profissional extremamente competente, dedicado e incansável, mas também um ser humano que soube estar presente quando eu mais precisava.',
      'Dr. Thiago, muito obrigado por tudo o que fez por mim, pela sua dedicação, pela sua disponibilidade e por nunca medir esforços para me ajudar.',
      'Algumas pessoas simplesmente exercem uma profissão. Outras deixam uma marca na vida daqueles que ajudam. O senhor, sem dúvida alguma, deixou uma marca muito positiva na minha.',
      'Minha eterna gratidão, respeito e admiração.'
    ]
  },
  {
    name: 'Anna',
    context: 'Atendimento Rápido e Resolução Eficaz',
    image: '/depoimento-4.jpg'
  },
  {
    name: 'Roberto',
    context: 'Dedicação e Competência no Processo',
    image: '/depoimento-6.jpg'
  },
  {
    name: 'Marcio Ribeiro',
    context: 'Profissionalismo e Humanidade',
    image: '/depoimento-3.jpg'
  },
  {
    name: 'Cliente Atendido',
    context: 'Atendimento de Excelência e Esclarecimento de Dúvidas',
    image: '/depoimento-1.jpg'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive cards per view (1 on mobile, 2 on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-amber/15 text-brand-amberDark text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="size-4 text-brand-amber" />
            Depoimentos Reais
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
            O Reconhecimento de Quem Já Foi Atendido
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Veja as mensagens e avaliações enviadas diretamente pelas pessoas que confiaram na atuação do <strong>Dr. Thiago Andrade</strong>.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative px-2 sm:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Depoimento Anterior"
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 bg-brand-navy/90 hover:bg-brand-amber text-white hover:text-slate-950 p-2.5 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-brand-amber/30"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo Depoimento"
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 bg-brand-navy/90 hover:bg-brand-amber text-white hover:text-slate-950 p-2.5 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-brand-amber/30"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden py-2 sm:py-4">
            <div
              className="flex transition-transform duration-500 ease-out items-stretch"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 flex-shrink-0 px-1.5 sm:px-4 flex"
                >
                  <div className="bg-brand-warmBg rounded-2xl sm:rounded-3xl border border-slate-200 p-3 sm:p-6 shadow-md flex flex-col justify-between w-full hover:border-brand-amber/50 transition-all duration-300">
                    
                    {/* Stars Header */}
                    <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3 flex-none">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-3.5 sm:size-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Avaliação 5.0
                      </span>
                    </div>

                    {/* Content Display: Full Text for Marcio Lisboa OR Full WhatsApp Screenshot */}
                    <div className="flex-1 flex flex-col my-0 sm:my-1">
                      {item.fullText ? (
                        <div className="h-full flex-1 flex flex-col justify-between rounded-xl sm:rounded-2xl border border-brand-amber/30 bg-white p-3 sm:p-5 shadow-sm text-slate-800 font-sans">
                          
                          {/* Header of the letter */}
                          <div className="flex items-center justify-between gap-2 pb-1.5 mb-1.5 border-b border-slate-200 text-brand-amberDark font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                            <span className="flex items-center gap-1.5">
                              <Quote className="size-3 sm:size-3.5" />
                              DEPOIMENTO AO DR. THIAGO
                            </span>
                            <span className="text-[9px] sm:text-[10px] text-slate-400 font-normal">
                              Carta Aberta
                            </span>
                          </div>

                          {/* Body Paragraphs filling the space without scroll */}
                          <div className="flex-1 flex flex-col justify-between space-y-1.5 text-[10.5px] sm:text-[11.5px] leading-snug sm:leading-relaxed text-slate-700">
                            {item.fullText.map((paragraph, pIdx) => (
                              <p
                                key={pIdx}
                                className={
                                  pIdx === item.fullText!.length - 1
                                    ? 'font-semibold text-slate-900 pt-1 border-t border-slate-100 text-[11px] sm:text-xs'
                                    : ''
                                }
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>

                        </div>
                      ) : (
                        <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-sm bg-white flex items-center justify-center p-0">
                          <img
                            src={item.image}
                            alt={`Depoimento WhatsApp - ${item.name}`}
                            className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01] block"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>

                    {/* Footer Info */}
                    <div className="mt-2 sm:mt-3 flex items-center justify-between text-xs text-slate-500 pt-2 sm:pt-3 border-t border-slate-200/80 flex-none">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">{item.name}</span>
                      <span className="flex items-center gap-1 text-slate-600 font-medium text-[10px] sm:text-xs">
                        <ShieldCheck className="size-3.5 text-brand-amber shrink-0" /> {item.context}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-brand-amber'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Trust Bottom Banner inside Testimonials */}
        <div className="mt-12 bg-gradient-to-r from-brand-navy via-brand-navyDark to-brand-navy p-8 rounded-3xl border border-brand-amber/30 text-white text-center reveal-up">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Você também merece um atendimento dedicado, técnico e acolhedor
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Faça uma análise inicial do seu caso com sigilo e descubra se a empresa deixou de cumprir a lei.
            </p>
            <div className="pt-2">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-3 shimmer-btn text-slate-950 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 uppercase tracking-wide"
              >
                <FileSearch className="size-4" />
                <span>AVALIAR MEUS DIREITOS TRABALHISTAS</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
