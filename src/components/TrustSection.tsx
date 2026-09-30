import React from 'react';
import { AGENCY_CONTACTS } from '../data/travelData';

export const TrustSection: React.FC = () => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${AGENCY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(
      'Olá! Gostaria de falar com a vossa equipa para tirar dúvidas sobre vistos e pacotes de viagem.'
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="sobre-nos"
      className="w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-2xl scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        {/* Left Column - Commitments */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <div>
            <span className="font-label-sm uppercase tracking-widest text-[#904d00] font-bold text-[11px]">
              Compromisso & Rigor
            </span>
            <h2 className="font-headline-lg text-[#0b1c30] font-medium mt-2">
              Mais do que uma viagem, acompanhamento em cada etapa.
            </h2>
            <p className="font-body-md text-[#44474e] mt-3 leading-relaxed">
              Trabalhamos para garantir que a sua experiência internacional ocorra com comodidade,
              transparência e assistência direta do planeamento ao regresso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
            {/* Feature 1 */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#904d00] shrink-0">
                <span className="material-symbols-outlined text-[22px]">person_check</span>
              </div>
              <div>
                <h4 className="font-title-md text-[#0b1c30] font-bold">Atendimento personalizado</h4>
                <p className="font-body-sm text-[#44474e] mt-1 text-xs leading-relaxed">
                  Consultores atentos às necessidades individuais de cada cliente e itinerário.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#904d00] shrink-0">
                <span className="material-symbols-outlined text-[22px]">published_with_changes</span>
              </div>
              <div>
                <h4 className="font-title-md text-[#0b1c30] font-bold">Acompanhamento</h4>
                <p className="font-body-sm text-[#44474e] mt-1 text-xs leading-relaxed">
                  Suporte durante todo o trajeto para resolução de dúvidas e assistência em viagem.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#904d00] shrink-0">
                <span className="material-symbols-outlined text-[22px]">hub</span>
              </div>
              <div>
                <h4 className="font-title-md text-[#0b1c30] font-bold">Soluções completas</h4>
                <p className="font-body-sm text-[#44474e] mt-1 text-xs leading-relaxed">
                  Integração prática de passagens aéreas, alojamentos, seguros e documentação.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div
              onClick={openWhatsApp}
              className="flex items-start gap-3 cursor-pointer group p-1 -m-1 rounded-lg hover:bg-[#eff4ff] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#e5eeff] group-hover:bg-[#904d00] flex items-center justify-center text-[#904d00] group-hover:text-white transition-colors shrink-0">
                <span className="material-symbols-outlined text-[22px]">chat</span>
              </div>
              <div>
                <h4 className="font-title-md text-[#0b1c30] group-hover:text-[#904d00] font-bold transition-colors">
                  Contacto rápido pelo WhatsApp
                </h4>
                <p className="font-body-sm text-[#44474e] mt-1 text-xs leading-relaxed">
                  Canal ágil para tirar dúvidas, receber orçamentos e obter apoio direto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Dark Structure Card */}
        <div className="lg:col-span-5 bg-[#0b1e3d] text-white p-space-xl rounded-xl relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 flex flex-col gap-space-lg">
            <div>
              <span className="font-label-sm uppercase tracking-widest text-[#ffdcc3] font-bold text-[11px]">
                Estrutura de Apoio
              </span>
              <h3 className="font-headline-md text-white font-medium mt-1">
                Segurança e rigor em cada itinerário
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-2">
              <div className="bg-white/10 p-space-md rounded-lg backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-[#ffdcc3] text-[28px] mb-1">
                  flight
                </span>
                <span className="font-title-md font-bold text-white block">Emissões Ágeis</span>
                <span className="font-body-sm text-[#eaf1ff]/80 text-xs">
                  Rotas e tarifas internacionais
                </span>
              </div>

              <div className="bg-white/10 p-space-md rounded-lg backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-[#ffdcc3] text-[28px] mb-1">
                  task_alt
                </span>
                <span className="font-title-md font-bold text-white block">Apoio Consular</span>
                <span className="font-body-sm text-[#eaf1ff]/80 text-xs">
                  Checklist e organização prévia
                </span>
              </div>

              <div className="bg-white/10 p-space-md rounded-lg backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-[#ffdcc3] text-[28px] mb-1">
                  hotel
                </span>
                <span className="font-title-md font-bold text-white block">Rede Hoteleira</span>
                <span className="font-body-sm text-[#eaf1ff]/80 text-xs">
                  Estadias credenciadas
                </span>
              </div>

              <div className="bg-white/10 p-space-md rounded-lg backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-[#ffdcc3] text-[28px] mb-1">
                  headset_mic
                </span>
                <span className="font-title-md font-bold text-white block">Suporte Directo</span>
                <span className="font-body-sm text-[#eaf1ff]/80 text-xs">
                  Atendimento ao passageiro
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-body-sm text-[#eaf1ff]/75 text-xs">
              <span className="material-symbols-outlined text-[20px] text-[#ffdcc3] shrink-0">
                verified
              </span>
              <span>Demonstração de apresentação comercial para clientes e parceiros.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
