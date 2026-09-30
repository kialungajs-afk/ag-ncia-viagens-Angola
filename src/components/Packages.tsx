import React from 'react';
import { PACKAGES } from '../data/travelData';
import { TravelPackage } from '../types/travel';

interface PackagesProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onRequestQuote: (pkg: TravelPackage) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage, onRequestQuote }) => {
  return (
    <section
      id="pacotes"
      className="w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-2xl scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
        <div className="flex flex-col gap-2">
          <span className="font-label-sm uppercase tracking-widest text-[#904d00] font-bold text-[11px]">
            Pacotes Demonstrativos
          </span>
          <h2 className="font-headline-lg text-[#0b1c30] font-medium">
            Explore as nossas opções
          </h2>
        </div>
        <p className="font-body-md text-[#44474e] max-w-md">
          Roteiros combinados com voos, hospedagem e suporte dedicado com partidas regulares a partir de Luanda.
        </p>
      </div>

      {/* 3 Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => onSelectPackage(pkg)}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-[#e5eeff]/80 cursor-pointer hover:-translate-y-1"
          >
            {/* Image Header with Scrim */}
            <div className="relative h-56 bg-[#e5eeff] overflow-hidden">
              <img
                src={pkg.imageUrl}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d]/90 via-transparent to-transparent pointer-events-none" />

              {/* Duration Badge Top Right */}
              <span className="absolute top-3 right-3 bg-[#904d00] text-white px-3 py-1 rounded-full font-label-sm text-[11px] uppercase tracking-wider font-semibold shadow-xs">
                {pkg.duration}
              </span>

              {/* Title & Departure Bottom Left */}
              <div className="absolute bottom-3 left-4 text-white pointer-events-none">
                <span className="font-label-sm text-[#ffdcc3] uppercase text-[10px] tracking-wider font-semibold block">
                  {pkg.departure}
                </span>
                <h3 className="font-title-lg text-white font-bold leading-tight">
                  {pkg.title}
                </h3>
              </div>
            </div>

            {/* Package Description Body */}
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <p className="font-body-sm text-[#44474e] leading-relaxed">
                {pkg.description}
              </p>

              {/* Bottom Price and CTA Bar */}
              <div className="pt-4 bg-[#eff4ff] -mx-space-lg -mb-space-lg p-space-lg flex items-center justify-between border-t border-[#e5eeff]">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-[#44474e] tracking-wider">
                    Valor estimado
                  </span>
                  <span className="font-body-sm text-[#0b1c30] font-bold">
                    {pkg.priceNote}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRequestQuote(pkg);
                  }}
                  className="inline-flex items-center gap-1.5 bg-[#904d00] hover:bg-[#783c00] active:scale-95 text-white px-4 py-2.5 rounded-lg font-label-md text-[12px] uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-xs"
                >
                  <span>Solicitar cotação</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
