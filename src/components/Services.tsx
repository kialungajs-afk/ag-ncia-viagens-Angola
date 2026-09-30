import React from 'react';
import { SERVICES } from '../data/travelData';
import { ServiceItem } from '../types/travel';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="servicos"
      className="w-full bg-[#eff4ff] py-space-2xl scroll-mt-20 border-y border-[#e5eeff]"
    >
      <div className="max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-label-sm uppercase tracking-widest text-[#904d00] font-bold text-[11px]">
            Serviços Especializados
          </span>
          <h2 className="font-headline-lg text-[#0b1c30] font-medium mt-2">
            Tudo para a sua viagem num só lugar
          </h2>
          <p className="font-body-md text-[#44474e] mt-3">
            Da emissão de passagens ao regresso seguro, cuidamos de cada etapa do seu roteiro com
            agilidade e total transparência.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-white p-space-xl rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md group cursor-pointer border border-[#e5eeff]/70 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#0b1e3d] group-hover:bg-[#0b1e3d] group-hover:text-white transition-colors duration-300 shadow-xs">
                <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-title-lg text-[#0b1c30] font-bold group-hover:text-[#904d00] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body-sm text-[#44474e] leading-relaxed">
                {service.description}
              </p>

              {/* Subtle visual affordance */}
              <div className="pt-2 flex items-center gap-1.5 text-[12px] font-bold text-[#904d00] opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Saber mais & requisitos</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
