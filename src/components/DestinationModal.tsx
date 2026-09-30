import React from 'react';
import { Destination } from '../types/travel';
import { AGENCY_CONTACTS } from '../data/travelData';

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (destinationName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  isOpen,
  onClose,
  onBook,
}) => {
  if (!isOpen || !destination) return null;

  const openWhatsApp = () => {
    const text = `Olá! Gostaria de receber mais informações e cotação para o destino *${destination.name} (${destination.cities})*.`;
    const url = `https://wa.me/${AGENCY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e5eeff] my-8">
        {/* Destination Image Banner with scrim */}
        <div className="relative h-64 w-full bg-[#0b1e3d]">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d] via-[#0b1e3d]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Top Badge */}
          <span className="absolute top-4 left-4 bg-[#0b1e3d]/90 backdrop-blur-md text-[#ffdcc3] px-3 py-1 rounded-md font-label-sm text-xs uppercase tracking-wider font-semibold border border-white/10">
            {destination.badge}
          </span>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-6 text-white">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#ffdcc3]">
              {destination.flightDuration || 'Partida de Luanda'}
            </span>
            <h3 className="font-headline-lg text-white font-bold leading-tight">
              {destination.name}
            </h3>
            <p className="text-sm text-[#eaf1ff]">{destination.cities}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col gap-5">
          <p className="font-body-md text-[#44474e] leading-relaxed text-sm">
            {destination.description}
          </p>

          {/* Key details cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Visa advice */}
            <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-[#e5eeff]">
              <div className="flex items-center gap-2 text-[#904d00] font-bold text-xs uppercase tracking-wider mb-1.5">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Vistos & Documentação</span>
              </div>
              <p className="text-xs text-[#0b1c30] leading-relaxed">
                {destination.visaInfo}
              </p>
            </div>

            {/* Airlines */}
            <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-[#e5eeff]">
              <div className="flex items-center gap-2 text-[#0b1e3d] font-bold text-xs uppercase tracking-wider mb-1.5">
                <span className="material-symbols-outlined text-[18px]">airlines</span>
                <span>Companhias Recomendadas</span>
              </div>
              <ul className="text-xs text-[#0b1c30] space-y-1">
                {destination.recommendedAirlines.map((airline, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fe932c]" />
                    <span>{airline}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Popular Activities */}
          <div>
            <h4 className="font-bold text-[#0b1c30] text-xs uppercase tracking-wider mb-2">
              Destaques do Roteiro
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.popularFor.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-[#44474e] bg-[#f8f9ff] p-2 rounded-lg border border-[#e5eeff]"
                >
                  <span className="material-symbols-outlined text-[#904d00] text-[16px] shrink-0">
                    check_circle
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-[#e5eeff]">
            <button
              onClick={() => {
                onClose();
                onBook(destination.name);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0b1e3d] hover:bg-[#011e44] text-white py-3 px-5 rounded-lg font-semibold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#ffdcc3]">
                flight_takeoff
              </span>
              <span>Solicitar Viagem para {destination.name}</span>
            </button>

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-[#904d00] hover:bg-[#783c00] text-white py-3 px-5 rounded-lg font-semibold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
