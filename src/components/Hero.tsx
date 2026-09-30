import React from 'react';
import { AGENCY_CONTACTS } from '../data/travelData';

interface HeroProps {
  onPlanTrip: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlanTrip }) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${AGENCY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(
      'Olá! Gostaria de falar com um consultor da Agência de Viagens Angola para planejar a minha viagem.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('solicitar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onPlanTrip();
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[680px] lg:min-h-[780px] flex items-center bg-[#0b1e3d] overflow-hidden pt-24"
    >
      {/* Cinematic Photographic Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida/AEtjO1UyNeWmY9fM38TEi8JOgPapdwy_tBietV4GtF78frMY0OkHhwNRyRcH7mTYZjNu9Mc1P28bKkVfWO6lgN4omD_o-j1dZYzUc4Ab5U9WrtYv0_hz-kn_vWYOO30KG8C954vQfUTykPb22-gyAL35oiTAsfk_wsCsLp4xLFa1hVxKk6oXIBXwAplstZ3s9kgYbQa4Hbwxp7fxPXjj-9Oa3JT3PZl17awIMb5PRILfJATUpCAmuQmIYmsPIA')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e3d] via-[#0b1e3d]/85 to-[#0b1e3d]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d] via-transparent to-[#0b1e3d]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop pt-16 pb-28 lg:pb-36 z-10 flex flex-col justify-center">
        <div className="max-w-3xl flex flex-col gap-4">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#fe932c] animate-pulse" />
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#ffdcc3] font-semibold">
              Demonstração — Agência de Viagens Angola
            </span>
          </div>

          {/* Headline with Newsreader display serif */}
          <h1 className="font-display-hero text-white font-medium tracking-tight leading-tight">
            Viaje com confiança.
            <br className="hidden sm:inline" />{' '}
            <span className="italic font-normal text-[#ffdcc3]">Nós cuidamos do resto.</span>
          </h1>

          {/* Subtitle description */}
          <p className="font-body-lg text-white/90 max-w-2xl leading-relaxed text-[16px] sm:text-[18px]">
            Passagens, viagens, vistos e reservas num só lugar. Conte com uma equipa preparada para
            acompanhar a sua viagem do início ao fim.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#solicitar"
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center gap-2 bg-[#904d00] hover:bg-[#783c00] active:scale-95 text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Planejar minha viagem</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 active:scale-95 text-white border border-white/20 backdrop-blur-sm px-6 py-3.5 rounded-lg font-semibold text-[15px] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#ffb77d]">chat</span>
              <span>Falar no WhatsApp</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="flex items-center gap-3 pt-3 text-white/75 text-body-sm font-body-sm flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#ffdcc3]">verified</span>
              <span>Atendimento personalizado</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#ffdcc3]">location_on</span>
              <span>Luanda, Angola</span>
            </div>
            <span className="opacity-40 hidden sm:inline">•</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#ffdcc3]">payments</span>
              <span>Emissão em Kwanzas (AOA)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
