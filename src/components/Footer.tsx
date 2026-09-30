import React from 'react';
import { AGENCY_CONTACTS } from '../data/travelData';

interface FooterProps {
  onOpenBookingModal: () => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBookingModal,
  onOpenTerms,
  onOpenPrivacy,
}) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${AGENCY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(
      AGENCY_CONTACTS.whatsappDefaultMsg
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="w-full bg-[#eff4ff] text-[#0b1c30] mt-space-2xl border-t border-[#e5eeff] shadow-[0_-1px_12px_rgba(11,30,61,0.03)]">
      <div className="max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          {/* Column 1: Brand & Presentation */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0b1e3d] flex items-center justify-center text-[#ffdcc3] shadow-xs">
                <span className="material-symbols-outlined text-[18px]">travel_explore</span>
              </div>
              <span className="font-title-md text-[13px] font-bold tracking-tight text-[#000516] leading-tight uppercase">
                DEMONSTRAÇÃO — AGÊNCIA DE VIAGENS ANGOLA
              </span>
            </div>

            <p className="text-body-sm text-[#44474e] leading-relaxed text-xs sm:text-sm">
              Plataforma demonstrativa de mobilidade internacional, consultoria de vistos e turismo
              executivo em Luanda, Angola.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 bg-white rounded-lg border border-[#e5eeff] shadow-[0_1px_3px_0_rgba(11,30,61,0.04)]">
              <span className="material-symbols-outlined text-[#904d00] text-[20px] shrink-0">
                verified
              </span>
              <span className="text-[11px] font-semibold text-[#0b1c30]">
                Demonstração Comercial para Apresentação Institucional
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-[#0b1c30] font-semibold text-sm">Links Rápidos</h4>
            <ul className="flex flex-col gap-2 text-body-sm text-[#44474e] text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollTo('inicio')}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('destinos')}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  Destinos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('servicos')}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pacotes')}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  Pacotes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contactos')}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  Contactos
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Main Services */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-[#0b1c30] font-semibold text-sm">Serviços Principais</h4>
            <ul className="flex flex-col gap-2 text-body-sm text-[#44474e] text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenBookingModal}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  Passagens aéreas
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBookingModal}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  Vistos e documentação
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pacotes')}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  Pacotes turísticos
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBookingModal}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  Reservas de hotéis
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBookingModal}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  Consultoria de viagem
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacts & Attendance */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-[#0b1c30] font-semibold text-sm">
              Contactos & Atendimento
            </h4>
            <div className="flex flex-col gap-2 text-body-sm text-[#44474e] text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#904d00] shrink-0 mt-0.5">
                  pin_drop
                </span>
                <span>{AGENCY_CONTACTS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#904d00] shrink-0">
                  chat
                </span>
                <button
                  onClick={openWhatsApp}
                  className="hover:text-[#904d00] transition-colors cursor-pointer text-left"
                >
                  WhatsApp: {AGENCY_CONTACTS.phoneDisplay}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#904d00] shrink-0">
                  call
                </span>
                <a
                  href={`tel:${AGENCY_CONTACTS.phoneHref}`}
                  className="hover:text-[#904d00] transition-colors"
                >
                  Telefone: {AGENCY_CONTACTS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#904d00] shrink-0">
                  mail
                </span>
                <a
                  href={`mailto:${AGENCY_CONTACTS.email}`}
                  className="hover:text-[#904d00] transition-colors"
                >
                  {AGENCY_CONTACTS.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer bottom bar */}
      <div className="bg-[#e5eeff] py-space-md text-[#44474e] text-xs border-t border-[#dce9ff]">
        <div className="max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-sm text-center md:text-left">
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-[#0b1c30]">
              © 2026 Demonstração — Agência de Viagens Angola
            </span>
            <span className="text-[11px] text-[#44474e]/80">
              Projeto demonstrativo desenvolvido pela Elevora
            </span>
          </div>

          <div className="flex items-center gap-space-md text-xs">
            <button
              onClick={onOpenTerms}
              className="hover:text-[#904d00] transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#904d00] transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
