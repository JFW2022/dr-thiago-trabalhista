import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Qual é o prazo limite para entrar com uma ação trabalhista?",
    answer: "A legislação estabelece que você tem até 2 anos após o término do vínculo de emprego (data da demissão ou saída) para ingressar com a ação. Dentro desse período de 2 anos, você poderá cobrar as verbas e direitos dos últimos 5 anos trabalhados retroativamente."
  },
  {
    question: "Trabalhei sem carteira assinada (sem registro). Ainda tenho direitos?",
    answer: "Sim, com certeza. Na Justiça do Trabalho vigora o princípio da 'primazia da realidade', o que significa que o que aconteceu no dia a dia vale mais do que a falta de papel. Mensagens de WhatsApp, fotos no trabalho, comprovantes de PIX ou depósitos bancários e testemunhas servem para comprovar o vínculo e cobrar todos os direitos retroativos (FGTS, férias, 13º e aviso)."
  },
  {
    question: "Quais documentos são necessários para a primeira análise do caso?",
    answer: "Para a análise inicial, quanto mais informações você tiver, melhor. Em geral solicitamos: RG/CPF, Carteira de Trabalho (física ou digital), extrato analítico do FGTS (emitido no app FGTS), comprovantes de salário/holerites, termo de rescisão (se já foi demitido) e eventuais mensagens ou fotos que comprovem horas extras ou situações abusivas."
  },
  {
    question: "O atendimento e a contratação podem ser feitos 100% online?",
    answer: "Sim. Atendemos trabalhadores de todo o Brasil de forma segura e prática. Todas as orientações, envio de documentos e assinaturas de procuração e contrato são realizados digitalmente pelo celular com total validade jurídica e sigilo garantido pela OAB."
  },
  {
    question: "Sofri humilhações ou cobranças abusivas. Posso pedir rescisão indireta?",
    answer: "Sim. A rescisão indireta é o que chamamos popularmente de 'demissão do patrão por justa causa'. Quando a empresa comete faltas graves (como atrasar salários, assediar moralmente, não depositar FGTS ou exigir trabalho com risco à saúde), você pode rescindir o contrato e receber todas as indenizações como se tivesse sido demitido sem justa causa."
  },
  {
    question: "Como funcionam os custos para a atuação do escritório?",
    answer: "Trabalhamos com total transparência e de acordo com o Código de Ética e Disciplina da OAB. Na maioria das ações trabalhistas para empregados, os honorários são combinados no formato de êxito (você só paga uma porcentagem sobre o que receber ao final do processo)."
  }
];

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-16 md:py-24 bg-brand-cream/60 border-t border-slate-200 relative">
      <div id="faq" className="absolute -top-24 left-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 reveal-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-amber/15 text-brand-amberDark text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="size-4 text-brand-amber" />
            Tire Suas Dúvidas
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
            Perguntas Frequentes sobre Direitos Trabalhistas
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Respostas diretas para as dúvidas mais comuns dos nossos clientes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all duration-300 reveal-up"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-brand-navy hover:text-brand-amberDark transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className={`size-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-amber/20 text-brand-amberDark' : 'text-slate-500'}`}>
                    <ChevronDown className="size-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-brand-amber/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-brand-navy text-sm sm:text-base">Ainda tem alguma dúvida específica sobre o seu caso?</h4>
            <p className="text-xs text-slate-500">Envie suas informações pelo formulário abaixo e receba atendimento direto.</p>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 gold-btn font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl uppercase tracking-wider whitespace-nowrap"
          >
            <MessageCircle className="size-4" />
            <span>Falar com Advogado</span>
          </a>
        </div>

      </div>
    </section>
  );
};
