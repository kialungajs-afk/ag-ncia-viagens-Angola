import React, { useState } from 'react';
import { AGENCY_CONTACTS } from '../data/travelData';

interface HeaderProps {
  onOpenBookingModal: (initialDestination?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${AGENCY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(AGENCY_CONTACTS.whatsappDefaultMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Destinos', id: 'destinos' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Pacotes', id: 'pacotes' },
    { label: 'Sobre nós', id: 'sobre-nos' },
    { label: 'Contactos', id: 'contactos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9ff]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,30,61,0.06)] transition-all">
      {/* Top micro bar */}
      <div className="bg-[#0b1e3d] text-white py-1.5 px-margin sm:px-margin-tablet lg:px-margin-desktop border-b border-white/10">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between text-[11px] font-semibold tracking-wider">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-[#ffdcc3]">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              <span>Luanda, Angola</span>
            </span>
            <span className="opacity-40 hidden sm:inline">•</span>
            <a
              href={`tel:${AGENCY_CONTACTS.phoneHref}`}
              className="flex items-center gap-1 hover:text-[#ffb77d] transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-[#ffb77d]">call</span>
              <span>Atendimento: {AGENCY_CONTACTS.phoneDisplay}</span>
            </a>
            <span className="opacity-40 hidden md:inline">•</span>
            <span className="hidden md:inline text-white/80">Segunda a Sábado</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffb77d] animate-pulse"></span>
            <span className="tracking-wide text-[#ffdcc3] font-bold text-[10px] sm:text-[11px]">
              APOIO AO VIAJANTE 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="h-20 max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('inicio');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Logo Icon matching Stitch */}
            <div className="w-10 h-10 rounded-lg bg-[#0b1e3d] flex items-center justify-center text-[#ffdcc3] shadow-md group-hover:scale-105 transition-transform shrink-0">
              <span className="material-symbols-outlined text-[22px]">travel_explore</span>
            </div>

            <div className="flex flex-col">
              <span className="font-title-md text-[13px] sm:text-[15px] font-extrabold tracking-tight text-[#000516] leading-tight uppercase">
                DEMONSTRAÇÃO — AGÊNCIA DE VIAGENS ANGOLA
              </span>
              <span className="font-label-sm text-[10px] tracking-widest uppercase text-[#904d00] font-bold">
                Consultoria & Mobilidade Internacional
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3.5 py-2 text-[12px] font-bold uppercase tracking-wider transition-all rounded-lg cursor-pointer ${
                  isActive
                    ? 'bg-[#e5eeff] text-[#000516]'
                    : 'text-[#44474e] hover:text-[#0b1c30] hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Area */}
        <div className="flex items-center gap-3">
          {/* Phone call CTA */}
          <a
            href={`tel:${AGENCY_CONTACTS.phoneHref}`}
            className="hidden lg:flex items-center gap-1.5 text-[#0b1c30] text-[12px] font-bold hover:text-[#904d00] transition-colors whitespace-nowrap"
            title="Ligar para o nosso atendimento em Luanda"
          >
            <span className="material-symbols-outlined text-[18px] text-[#904d00]">headset_mic</span>
            <span>{AGENCY_CONTACTS.phoneDisplay}</span>
          </a>

          {/* WhatsApp CTA Button */}
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-1.5 bg-[#904d00] hover:bg-[#703b00] active:scale-95 text-white px-3.5 sm:px-4 py-2.5 rounded-lg shadow-sm font-semibold text-[11px] sm:text-[12px] tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden xs:inline">Falar no WhatsApp</span>
            <span className="xs:hidden">WhatsApp</span>
          </button>

          {/* Customer / Traveler quick access button */}
          <button
            onClick={() => onOpenBookingModal()}
            className="w-9 h-9 rounded-full bg-[#000516] hover:bg-[#0b1e3d] flex items-center justify-center shrink-0 transition-transform hover:scale-105 cursor-pointer shadow-sm"
            title="Abrir formulário de solicitação de viagem"
            aria-label="Abrir solicitação de viagem"
          >
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg bg-[#eff4ff] hover:bg-[#e5eeff] flex items-center justify-center text-[#0b1c30] cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 border-t border-[#e5eeff] shadow-xl px-margin sm:px-margin-tablet py-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1 pb-4 border-b border-[#eff4ff]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold text-[#0b1c30] hover:bg-[#eff4ff] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#0b1e3d] text-white py-3 rounded-lg font-semibold text-[13px] shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-[#ffdcc3]">send</span>
              <span>Solicitar Cotação de Viagem</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#904d00] text-white py-3 rounded-lg font-semibold text-[13px] shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Atendimento via WhatsApp</span>
            </button>

            <a
              href={`tel:${AGENCY_CONTACTS.phoneHref}`}
              className="flex items-center justify-center gap-2 py-2 text-[13px] text-[#44474e] font-medium"
            >
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">call</span>
              <span>Ligar: {AGENCY_CONTACTS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
