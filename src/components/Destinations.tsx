import React from 'react';
import { DESTINATIONS } from '../data/travelData';
import { Destination } from '../types/travel';

interface DestinationsProps {
  onSelectDestination: (destination: Destination) => void;
  onQuickBook: (destinationName: string) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({
  onSelectDestination,
  onQuickBook: _onQuickBook,
}) => {
  return (
    <section
      id="destinos"
      className="w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-2xl scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
        <div className="flex flex-col gap-2">
          <span className="font-label-sm uppercase tracking-widest text-[#904d00] font-bold text-[11px]">
            Rotas Mais Procuradas de Luanda
          </span>
          <h2 className="font-headline-lg text-[#0b1c30] font-medium">
            Para onde você quer ir?
          </h2>
        </div>
        <p className="font-body-md text-[#44474e] max-w-md">
          Descubra destinos internacionais e encontre a solução ideal para a sua próxima viagem.
        </p>
      </div>

      {/* 4 Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
        {DESTINATIONS.map((dest) => (
          <article
            key={dest.id}
            onClick={() => onSelectDestination(dest)}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer border border-[#e5eeff]/60 hover:-translate-y-1"
          >
            {/* Image Container with Scrim & Badges */}
            <div className="relative h-60 w-full overflow-hidden bg-[#e5eeff]">
              <img
                src={dest.imageUrl}
                alt={`${dest.name} - ${dest.cities}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3d]/85 via-transparent to-transparent pointer-events-none" />

              {/* Tag / Badge Top-Left */}
              <span className="absolute top-3 left-3 bg-[#0b1e3d]/90 backdrop-blur-md text-[#ffdcc3] px-2.5 py-1 rounded font-label-sm text-[11px] uppercase tracking-wider font-semibold shadow-xs">
                {dest.badge}
              </span>

              {/* Title Bottom-Left */}
              <div className="absolute bottom-3 left-3 text-white pointer-events-none">
                <h3 className="font-title-lg text-white font-bold leading-tight">
                  {dest.name}
                </h3>
                <p className="text-body-sm text-[#eaf1ff]/90 text-xs">
                  {dest.cities}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <p className="font-body-sm text-[#44474e] leading-relaxed line-clamp-3">
                {dest.description}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-[#e5eeff]/60">
                <span className="text-label-sm uppercase text-[#904d00] font-bold text-[11px]">
                  {dest.airlineTag}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDestination(dest);
                  }}
                  className="inline-flex items-center gap-1 text-[#0b1e3d] group-hover:text-[#904d00] font-title-md transition-colors text-xs font-bold cursor-pointer"
                >
                  <span>Ver opções</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
