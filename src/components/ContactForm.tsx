import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Lock, 
  AlertCircle, 
  Loader2,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { useUtmCapture } from '../hooks/useUtmCapture';

export const ContactForm: React.FC = () => {
  const tracking = useUtmCapture();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    situation: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Phone mask helper: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setErrorMessage('Por favor, informe um WhatsApp válido com DDD.');
      return;
    }

    if (!formData.situation) {
      setErrorMessage('Por favor, selecione a sua situação atual.');
      return;
    }

    setLoading(true);

    try {
      // 1. Send to serverless API
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          city: formData.city.trim(),
          situation: formData.situation,
          message: formData.message.trim(),
          tracking
        })
      });

      // 2. Fire Meta Pixel Lead Event if available
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: formData.situation,
          content_category: 'Direito Trabalhista',
          value: 0,
          currency: 'BRL'
        });
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-b from-brand-navy via-brand-navyDark to-brand-navy text-white relative overflow-hidden border-t border-brand-amber/20">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,131,43,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,131,43,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left reveal-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-amber/20 text-brand-amberLight text-xs font-bold uppercase tracking-wider">
              <Sparkles className="size-4 text-brand-amber" />
              <span>Análise Inicial Sem Custos</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Conte o que aconteceu no seu trabalho.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Preencha o formulário para que nossos advogados avaliem os detalhes do seu contrato e das verbas a receber. Retornamos diretamente pelo WhatsApp informado.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="size-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Sigilo Absoluto</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Suas informações são confidenciais e protegidas pelo sigilo profissional da OAB.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-8 rounded-lg bg-brand-amber/10 text-brand-amberLight flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="size-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Retorno Rápido</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Nossa equipe prioriza sua mensagem para evitar a perda de prazos trabalhistas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="size-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Atendimento em Todo o Brasil</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Processos 100% eletrônicos na Justiça do Trabalho com orientação contínua.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="relative">
              
              {/* Glow Accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-amber/40 via-brand-amberLight/30 to-brand-amber/40 rounded-3xl blur-md opacity-50" />

              <div className="relative bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-brand-amber/30">
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="border-b border-slate-100 pb-4 mb-2">
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-brand-navy">
                        Solicitar Análise Trabalhista
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Preencha os campos abaixo com atenção. Leva menos de 1 minuto.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="size-4 shrink-0 text-red-500" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Field 1: NOME COMPLETO */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        NOME COMPLETO <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Digite seu nome"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-amber/60 focus:border-brand-amber text-slate-900 placeholder:text-slate-400 text-sm bg-slate-50/50 transition-all"
                      />
                    </div>

                    {/* 2-Column Row: WHATSAPP + CIDADE */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                          WHATSAPP <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="(00) 00000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-amber/60 focus:border-brand-amber text-slate-900 placeholder:text-slate-400 text-sm bg-slate-50/50 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                          CIDADE
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Sua cidade"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-amber/60 focus:border-brand-amber text-slate-900 placeholder:text-slate-400 text-sm bg-slate-50/50 transition-all"
                        />
                      </div>
                    </div>

                    {/* Field 3: QUAL É A SUA SITUAÇÃO? */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        QUAL É A SUA SITUAÇÃO? <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={formData.situation}
                          onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-amber/60 focus:border-brand-amber text-slate-900 text-sm bg-slate-50/50 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Selecione uma opção</option>
                          <option value="Fui demitido">Fui demitido</option>
                          <option value="Não recebi corretamente">Não recebi corretamente</option>
                          <option value="Horas extras ou jornada">Horas extras ou jornada</option>
                          <option value="Insalubridade ou periculosidade">Insalubridade ou periculosidade</option>
                          <option value="Trabalhei sem registro">Trabalhei sem registro</option>
                          <option value="FGTS ou salários atrasados">FGTS ou salários atrasados</option>
                          <option value="Assédio no trabalho">Assédio no trabalho</option>
                          <option value="Acidente ou doença">Acidente ou doença</option>
                          <option value="Desvio ou equiparação de função">Desvio ou equiparação de função</option>
                          <option value="Outra situação">Outra situação</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Field 4: CONTE BREVEMENTE O QUE ACONTECEU */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        CONTE BREVEMENTE O QUE ACONTECEU
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Escreva aqui..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-amber/60 focus:border-brand-amber text-slate-900 placeholder:text-slate-400 text-sm bg-slate-50/50 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 gold-btn text-slate-950 font-extrabold text-base py-4 px-6 rounded-xl shadow-xl hover:scale-[1.01] transition-transform duration-300 uppercase tracking-wider cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="size-5 animate-spin" />
                            <span>Enviando informações...</span>
                          </>
                        ) : (
                          <>
                            <span>Solicitar contato</span>
                            <ArrowRight className="size-5" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Legal note */}
                    <p className="text-center text-[10.5px] text-slate-500 pt-2 leading-relaxed">
                      * O envio das informações não gera honorários imediatos e é tratado com estrito sigilo ético da OAB.
                    </p>

                  </form>
                ) : (
                  /* Success Confirmation Screen ("Verifique seu WhatsApp") */
                  <div className="py-8 px-4 text-center space-y-6 animate-fadeIn">
                    
                    <div className="size-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg border-2 border-emerald-300">
                      <CheckCircle2 className="size-12" />
                    </div>

                    <div className="space-y-3 max-w-md mx-auto">
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                        Informações Recebidas com Sucesso
                      </span>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy">
                        Verifique seu WhatsApp!
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Olá, <strong>{formData.name}</strong>! Recebemos sua solicitação a respeito de <strong>{formData.situation}</strong>.
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Nossa equipe jurídica entrará em contato em breve pelo número <strong>{formData.phone}</strong> para orientar você sobre os seus direitos trabalhistas e os próximos passos.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-brand-cream/80 border border-brand-amber/30 text-xs text-slate-700 max-w-md mx-auto flex items-center gap-3 text-left">
                      <PhoneCall className="size-6 text-brand-amber shrink-0" />
                      <span>
                        Fique atento(a) às mensagens no seu aplicativo WhatsApp. Se preferir salvar nosso contato antecipadamente, o retorno será feito pela nossa equipe oficial.
                      </span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', phone: '', city: '', situation: '', message: '' });
                        }}
                        className="text-xs font-bold text-brand-navy hover:text-brand-amber transition-colors underline underline-offset-4"
                      >
                        Enviar outro relato ou atualizar dados
                      </button>
                    </div>

                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
