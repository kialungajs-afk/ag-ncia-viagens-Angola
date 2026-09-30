import React from 'react';
import { AGENCY_CONTACTS } from '../data/travelData';

interface FinalCtaProps {
  onOpenBookingModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBookingModal }) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${AGENCY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(
      'Olá! Gostaria de falar com um consultor da Agência de Viagens Angola para obter uma proposta para a minha viagem.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contactos"
      className="w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-2xl scroll-mt-20"
    >
      <div className="relative bg-[#0b1e3d] text-white rounded-2xl overflow-hidden p-space-xl lg:p-space-2xl shadow-2xl flex flex-col items-center text-center border border-white/10">
        {/* Ambient Blur Lights */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#904d00]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#ffb77d]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl flex flex-col items-center gap-space-md">
          {/* Badge */}
          <span className="font-label-sm uppercase tracking-widest text-[#ffdcc3] bg-white/10 px-4 py-1.5 rounded-full text-[11px] font-semibold border border-white/10">
            Demonstração — Agência de Viagens Angola
          </span>

          {/* Headline */}
          <h2 className="font-headline-lg text-white font-medium tracking-tight">
            Pronto para começar a sua próxima viagem?
          </h2>

          {/* Description */}
          <p className="font-body-lg text-[#eaf1ff]/90 leading-relaxed text-sm sm:text-base">
            Conte-nos para onde pretende ir e a nossa equipa ajudará a encontrar uma solução
            adequada para a sua viagem.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-[#904d00] hover:bg-[#783c00] active:scale-95 text-white px-8 py-3.5 rounded-lg font-title-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm font-semibold"
            >
              <span className="material-symbols-outlined text-[20px]">person_pin</span>
              <span>Falar com um consultor</span>
            </button>

            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 active:scale-95 text-white border border-white/20 backdrop-blur-sm px-7 py-3.5 rounded-lg font-title-md transition-all cursor-pointer text-sm font-semibold"
            >
              <span className="material-symbols-outlined text-[20px] text-[#ffdcc3]">send</span>
              <span>Solicitar cotação</span>
            </button>
          </div>

          {/* Contact Details Footer Line */}
          <div className="pt-space-md flex flex-wrap items-center justify-center gap-3 sm:gap-space-md text-body-sm text-[#eaf1ff]/75 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#ffdcc3]">pin_drop</span>
              <span>Avenida 4 de Fevereiro (Marginal), Luanda</span>
            </div>
            <span className="opacity-40">•</span>
            <span>Atendimento presencial e digital</span>
            <span className="opacity-40">•</span>
            <a
              href={`tel:${AGENCY_CONTACTS.phoneHref}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-[#ffdcc3]">call</span>
              <span>{AGENCY_CONTACTS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
