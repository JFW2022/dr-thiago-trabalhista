import React from 'react';
import { 
  DollarSign, 
  Clock, 
  FileCheck2, 
  Wallet, 
  AlertTriangle, 
  HeartPulse, 
  ArrowRight, 
  Users,
  ShieldCheck 
} from 'lucide-react';

interface ServiceItem {
  icon: React.ElementType;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
}

const services: ServiceItem[] = [
  {
    icon: DollarSign,
    tag: "Rescisão Contratual",
    title: "Verbas Rescisórias Incompletas",
    desc: "Demissão sem justa causa, pedido de demissão ou acordo. Garantimos que nenhum centavo fique para trás.",
    bullets: [
      "Aviso-prévio trabalhado ou indenizado",
      "Saldo de salário e férias vencidas/proporcionais + 1/3",
      "13º salário proporcional e multa rescisória de 40% do FGTS"
    ]
  },
  {
    icon: Clock,
    tag: "Jornada Excessiva",
    title: "Horas Extras & Intervalos",
    desc: "Trabalhou além da jornada contratada ou teve seu horário de almoço e descanso suprimido?",
    bullets: [
      "Horas extras com adicional de 50% ou 100%",
      "Intervalo intrajornada (almoço) não concedido integralmente",
      "Adicional noturno e descanso semanal remunerado (DSR)"
    ]
  },
  {
    icon: FileCheck2,
    tag: "Carteira Assinada",
    title: "Trabalho Sem Registro (CLT)",
    desc: "Prestou serviços com subordinação, habitualidade e salário sem assinatura na CTPS? Seus direitos existem.",
    bullets: [
      "Reconhecimento de vínculo empregatício formal",
      "Anotação retroativa na Carteira de Trabalho",
      "Cobrança de todos os direitos do período trabalhado"
    ]
  },
  {
    icon: Wallet,
    tag: "Inadimplência Patronal",
    title: "FGTS e Salários Atrasados",
    desc: "Empresas que atrasam pagamentos reiteradamente ou deixam de depositar o FGTS violam gravemente o contrato.",
    bullets: [
      "Cobrança de FGTS não depositado mês a mês",
      "Diferenças salariais e comissões pagas 'por fora'",
      "Desvio ou acúmulo de função não remunerado"
    ]
  },
  {
    icon: AlertTriangle,
    tag: "Dignidade no Trabalho",
    title: "Assédio Moral & Rescisão Indireta",
    desc: "Cobranças humilhantes, metas inatingíveis, isolamento ou perseguições não devem ser toleradas.",
    bullets: [
      "Rescisão Indireta ('demissão do patrão por justa causa')",
      "Recebimento de todas as verbas como se demitido fosse",
      "Indenização por danos morais e abalo psicológico"
    ]
  },
  {
    icon: HeartPulse,
    tag: "Saúde & Segurança",
    title: "Acidentes & Doenças Ocupacionais",
    desc: "Lesões no trabalho, LER/DORT, problemas na coluna ou adoecimento mental decorrentes da rotina profissional.",
    bullets: [
      "Estabilidade provisória de 12 meses no emprego",
      "Emissão de CAT e encaminhamento ao INSS",
      "Indenização por danos materiais, morais e pensão vitalícia"
    ]
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="atuacao" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-amber/15 text-brand-amberDark text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="size-4 text-brand-amber" />
            Áreas de Atuação Trabalhista
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
            Em quais situações podemos defender você?
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Identificamos com rigor técnico os direitos sonegados durante a sua jornada de trabalho ou no momento da sua rescisão.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-brand-warmBg rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-brand-amber/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group reveal-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="space-y-4">
                  
                  {/* Top tag & icon */}
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-xl bg-brand-navy text-brand-amber flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-amber group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-navy group-hover:text-brand-amberDark transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-2 border-t border-slate-200/80 text-xs text-slate-700">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="size-1.5 rounded-full bg-brand-amber mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Card Footer Action */}
                <div className="pt-6 mt-4 border-t border-slate-200/60">
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-amber transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Avaliar esta situação</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Audience Banner */}
        <div className="mt-12 bg-brand-navy text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-brand-amber/30 flex flex-col md:flex-row items-center justify-between gap-6 reveal-up">
          <div className="flex items-center gap-4 text-left">
            <div className="size-12 rounded-xl bg-brand-amber/20 text-brand-amberLight flex items-center justify-center shrink-0">
              <Users className="size-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                Atendimento a trabalhadores de todos os setores
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Comércio, transporte, saúde, tecnologia, restaurantes, serviços domésticos, indústria, vigilância e construção civil.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#contato"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 gold-btn font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl uppercase tracking-wider"
            >
              <span>Consultar Meus Direitos</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
