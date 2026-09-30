/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DESTINATIONS, SERVICES, PACKAGES, AGENCY_CONTACTS } from './data/travelData';
import { Destination, ServiceItem, TravelPackage, BookingFormData } from './types/travel';
import { BookingModal } from './components/BookingModal';
import { DestinationModal } from './components/DestinationModal';
import { ServiceModal } from './components/ServiceModal';
import { PackageModal } from './components/PackageModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModals';

export default function App() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search booking form state
  const [origin, setOrigin] = useState('Luanda - 4 de Fevereiro');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().split('T')[0];
  });
  const [returnDate, setReturnDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 24);
    return d.toISOString().split('T')[0];
  });
  const [passengers, setPassengers] = useState('1');

  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialBookingData, setInitialBookingData] = useState<Partial<BookingFormData>>({});
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  // Navigation scroll helper
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // WhatsApp launcher
  const openWhatsApp = (msg?: string) => {
    const text = msg || AGENCY_CONTACTS.whatsappDefaultMsg;
    const url = `https://wa.me/${AGENCY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) {
      alert('Por favor, informe o seu destino pretendido.');
      return;
    }
    setInitialBookingData({
      origin,
      destination: destination.trim(),
      departureDate,
      returnDate,
      passengers: `${passengers} Adulto${passengers === '1' ? '' : 's'}`,
    });
    setBookingModalOpen(true);
  };

  const handleOpenBookingForDestination = (destName: string) => {
    setDestination(destName);
    setInitialBookingData({
      origin,
      destination: destName,
      departureDate,
      returnDate,
      passengers: `${passengers} Adulto${passengers === '1' ? '' : 's'}`,
    });
    setBookingModalOpen(true);
  };

  const handleOpenBookingForPackage = (pkg: TravelPackage) => {
    setInitialBookingData({
      origin: 'Luanda - 4 de Fevereiro',
      destination: pkg.destination,
      notes: `Solicitação de cotação para o pacote: ${pkg.title} (${pkg.duration}).`,
    });
    setBookingModalOpen(true);
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,30,61,0.06)]">
        {/* Top Info Bar */}
        <div className="bg-primary-container text-on-primary py-1 px-margin sm:px-margin-tablet lg:px-margin-desktop">
          <div className="max-w-[1360px] mx-auto flex items-center justify-between text-label-sm font-label-sm">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">
                location_on
              </span>
              <span>Luanda, Angola</span>
              <span className="opacity-40">•</span>
              <span className="material-symbols-outlined text-[14px] text-secondary-fixed-dim">
                call
              </span>
              <a
                href={`tel:${AGENCY_CONTACTS.phoneHref}`}
                className="hover:text-secondary-fixed transition-colors"
              >
                Atendimento: {AGENCY_CONTACTS.phoneDisplay}
              </a>
              <span className="hidden md:inline opacity-40">•</span>
              <span className="hidden md:inline">Segunda a Sábado</span>
            </div>

            <div className="flex items-center gap-space-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
              <span className="tracking-wide text-secondary-fixed">APOIO AO VIAJANTE 24/7</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="h-20 max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <a
              className="flex items-center gap-3 cursor-pointer"
              data-path="inicio"
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('inicio');
              }}
            >
              <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-secondary-fixed shadow-sm">
                <span className="material-symbols-outlined text-[20px]">travel_explore</span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-[14px] sm:text-[15px] font-bold tracking-tight text-primary leading-tight uppercase">
                  DEMONSTRAÇÃO — AGÊNCIA DE VIAGENS ANGOLA
                </span>
                <span className="font-label-sm text-[10px] tracking-widest uppercase text-secondary font-semibold">
                  Consultoria &amp; Mobilidade Internacional
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden xl:flex items-center gap-space-md"
            data-active-classes="bg-surface-container text-primary font-semibold rounded-lg"
          >
            <a
              className="px-3 py-2 text-label-md font-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              data-path="inicio"
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('inicio');
              }}
            >
              Início
            </a>
            <a
              className="px-3 py-2 text-label-md font-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              data-path="destinos"
              href="#destinos"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('destinos');
              }}
            >
              Destinos
            </a>
            <a
              className="px-3 py-2 text-label-md font-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              data-path="servicos"
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('servicos');
              }}
            >
              Serviços
            </a>
            <a
              className="px-3 py-2 text-label-md font-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              data-path="pacotes"
              href="#pacotes"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('pacotes');
              }}
            >
              Pacotes
            </a>
            <a
              className="px-3 py-2 text-label-md font-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              data-path="sobre-nos"
              href="#sobre-nos"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('sobre-nos');
              }}
            >
              Sobre nós
            </a>
            <a
              className="px-3 py-2 text-label-md font-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              data-path="contactos"
              href="#contactos"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contactos');
              }}
            >
              Contactos
            </a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-space-md">
            <a
              className="hidden lg:flex items-center gap-1.5 text-on-surface text-label-md font-label-md hover:text-secondary transition-colors"
              href={`tel:${AGENCY_CONTACTS.phoneHref}`}
            >
              <span className="material-symbols-outlined text-[18px]">headset_mic</span>
              <span>{AGENCY_CONTACTS.phoneDisplay}</span>
            </a>

            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-space-xs bg-secondary hover:bg-on-secondary-container text-on-secondary px-space-md py-2.5 rounded-lg shadow-sm font-label-md text-label-md tracking-wider uppercase transition-all cursor-pointer"
              data-path="contactos"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Falar no WhatsApp</span>
            </button>

            <button
              onClick={() => setBookingModalOpen(true)}
              className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container flex items-center justify-center shrink-0 cursor-pointer transition-colors"
              title="Solicitar viagem"
              aria-label="Abrir formulário de solicitação de viagem"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>

            {/* Hamburger for mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface cursor-pointer"
              aria-label="Menu"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container-lowest border-t border-surface-container px-margin py-4 shadow-xl">
            <div className="flex flex-col gap-2">
              <a
                onClick={() => scrollTo('inicio')}
                className="py-2 text-label-md uppercase font-semibold text-on-surface cursor-pointer"
              >
                Início
              </a>
              <a
                onClick={() => scrollTo('destinos')}
                className="py-2 text-label-md uppercase font-semibold text-on-surface cursor-pointer"
              >
                Destinos
              </a>
              <a
                onClick={() => scrollTo('servicos')}
                className="py-2 text-label-md uppercase font-semibold text-on-surface cursor-pointer"
              >
                Serviços
              </a>
              <a
                onClick={() => scrollTo('pacotes')}
                className="py-2 text-label-md uppercase font-semibold text-on-surface cursor-pointer"
              >
                Pacotes
              </a>
              <a
                onClick={() => scrollTo('sobre-nos')}
                className="py-2 text-label-md uppercase font-semibold text-on-surface cursor-pointer"
              >
                Sobre nós
              </a>
              <a
                onClick={() => scrollTo('contactos')}
                className="py-2 text-label-md uppercase font-semibold text-on-surface cursor-pointer"
              >
                Contactos
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="w-full pt-28 bg-background flex-1">
        <div className="flex flex-col w-full">
          {/* 1. HERO SECTION */}
          <section
            id="inicio"
            className="relative w-full -mt-28 min-h-[720px] lg:min-h-[820px] flex items-center bg-primary-container overflow-hidden"
          >
            {/* Cinematic Photographic Background */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida/AEtjO1UyNeWmY9fM38TEi8JOgPapdwy_tBietV4GtF78frMY0OkHhwNRyRcH7mTYZjNu9Mc1P28bKkVfWO6lgN4omD_o-j1dZYzUc4Ab5U9WrtYv0_hz-kn_vWYOO30KG8C954vQfUTykPb22-gyAL35oiTAsfk_wsCsLp4xLFa1hVxKk6oXIBXwAplstZ3s9kgYbQa4Hbwxp7fxPXjj-9Oa3JT3PZl17awIMb5PRILfJATUpCAmuQmIYmsPIA')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/85 to-primary-container/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-primary-container/40"></div>
            </div>

            {/* Hero Content Container */}
            <div className="relative w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop pt-36 pb-28 lg:pb-36 z-10 flex flex-col justify-center">
              <div className="max-w-3xl flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                    Demonstração — Agência de Viagens Angola
                  </span>
                </div>

                <h1 className="font-display-hero text-display-hero text-on-primary font-medium tracking-tight leading-tight">
                  Viaje com confiança.
                  <br className="hidden sm:inline" />
                  <span className="italic font-normal text-secondary-fixed">
                    Nós cuidamos do resto.
                  </span>
                </h1>

                <p className="font-body-lg text-body-lg text-inverse-on-surface/90 max-w-2xl leading-relaxed">
                  Passagens, viagens, vistos e reservas num só lugar. Conte com uma equipa
                  preparada para acompanhar a sua viagem do início ao fim.
                </p>

                <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                  <a
                    className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-on-secondary-container text-on-secondary px-7 py-3.5 rounded-lg font-title-md text-title-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    href="#solicitar"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('solicitar');
                    }}
                  >
                    <span>Planejar minha viagem</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </a>

                  <button
                    onClick={() => openWhatsApp()}
                    className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary backdrop-blur-sm px-6 py-3.5 rounded-lg font-title-md text-title-md transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed-dim">
                      chat
                    </span>
                    <span>Falar no WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center gap-3 pt-2 text-inverse-on-surface/75 text-body-sm font-body-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      verified
                    </span>
                    <span>Atendimento personalizado</span>
                  </div>
                  <span className="opacity-40">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      location_on
                    </span>
                    <span>Luanda, Angola</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. SOLICITAÇÃO DE VIAGEM (SOBREPOSTO À HERO) */}
          <section
            className="relative z-20 w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop -mt-14 lg:-mt-20 scroll-mt-28"
            id="solicitar"
          >
            <div className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden p-space-md sm:p-space-lg lg:p-space-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-surface-container">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    flight_takeoff
                  </span>
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface">
                    Comece a planejar a sua viagem
                  </h3>
                </div>
                <span className="text-body-sm font-body-sm text-on-surface-variant">
                  Atendimento ágil para voos, estadias e documentação
                </span>
              </div>

              <form
                className="mt-space-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md items-end"
                onSubmit={handleSearchSubmit}
              >
                {/* Origem */}
                <div className="lg:col-span-3 flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      flight_takeoff
                    </span>
                    Origem
                  </label>
                  <div className="relative bg-surface-container-low rounded-lg p-3">
                    <input
                      className="w-full bg-transparent font-title-md text-title-md text-on-surface font-semibold focus:outline-none"
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      Angola (LAD)
                    </span>
                  </div>
                </div>

                {/* Destino */}
                <div className="lg:col-span-3 flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      flight_land
                    </span>
                    Destino
                  </label>
                  <div className="relative bg-surface-container-low rounded-lg p-3 focus-within:bg-surface-container transition-colors">
                    <input
                      className="w-full bg-transparent font-title-md text-title-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none"
                      placeholder="Lisboa, Dubai, São Paulo..."
                      required
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      Destino pretendido
                    </span>
                  </div>
                </div>

                {/* Data de Ida */}
                <div className="lg:col-span-2 flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      calendar_today
                    </span>
                    Data de Ida
                  </label>
                  <div className="relative bg-surface-container-low rounded-lg p-3">
                    <input
                      className="w-full bg-transparent font-title-md text-title-md text-on-surface focus:outline-none"
                      required
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      Data de partida
                    </span>
                  </div>
                </div>

                {/* Data de Volta */}
                <div className="lg:col-span-2 flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      event_repeat
                    </span>
                    Data de Volta
                  </label>
                  <div className="relative bg-surface-container-low rounded-lg p-3">
                    <input
                      className="w-full bg-transparent font-title-md text-title-md text-on-surface focus:outline-none"
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      Opcional para só ida
                    </span>
                  </div>
                </div>

                {/* Passageiros */}
                <div className="lg:col-span-2 flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      group
                    </span>
                    Passageiros
                  </label>
                  <div className="relative bg-surface-container-low rounded-lg p-3">
                    <select
                      className="w-full bg-transparent font-title-md text-title-md text-on-surface focus:outline-none cursor-pointer"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                    >
                      <option value="1">1 Adulto</option>
                      <option value="2">2 Adultos</option>
                      <option value="fam">Família (3+ passageiros)</option>
                      <option value="corp">Grupo Corporativo</option>
                    </select>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      Classe flexível
                    </span>
                  </div>
                </div>

                {/* Botão de Ação */}
                <div className="lg:col-span-12 flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
                  <div className="flex items-center gap-3 text-body-sm font-body-sm text-on-surface-variant">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>
                      Consultoria especializada com emissão em Kwanzas (AOA) e moeda externa.
                    </span>
                  </div>
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-tertiary-container text-on-primary px-8 py-3.5 rounded-lg font-title-md text-title-md shadow-md transition-all cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      send
                    </span>
                    <span>Solicitar viagem</span>
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* 3. DESTINOS EM DESTAQUE */}
          <section
            id="destinos"
            className="w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-2xl scroll-mt-20"
          >
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Rotas Mais Procuradas de Luanda
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium">
                  Para onde você quer ir?
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Descubra destinos internacionais e encontre a solução ideal para a sua próxima
                viagem.
              </p>
            </div>

            {/* 4 Destination Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
              {DESTINATIONS.map((dest) => (
                <article
                  key={dest.id}
                  onClick={() => setSelectedDestination(dest)}
                  className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={dest.imageUrl}
                      alt={dest.name}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-primary-container/90 backdrop-blur-md text-secondary-fixed px-2.5 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider">
                      {dest.badge}
                    </span>
                    <div className="absolute bottom-3 left-3 text-on-primary">
                      <h3 className="font-title-lg text-title-lg text-on-primary font-bold">
                        {dest.name}
                      </h3>
                      <p className="text-body-sm font-body-sm text-inverse-on-surface/90">
                        {dest.cities}
                      </p>
                    </div>
                  </div>

                  <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {dest.description}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-label-sm font-label-sm uppercase text-secondary font-semibold">
                        {dest.airlineTag}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDestination(dest);
                        }}
                        className="inline-flex items-center gap-1 text-primary-container hover:text-secondary font-title-md text-title-md transition-colors cursor-pointer"
                      >
                        <span>Ver opções</span>
                        <span className="material-symbols-outlined text-[18px]">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 4. SERVIÇOS */}
          <section id="servicos" className="w-full bg-surface-container-low py-space-2xl scroll-mt-20">
            <div className="max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop">
              <div className="text-center max-w-2xl mx-auto mb-space-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Serviços Especializados
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium mt-2">
                  Tudo para a sua viagem num só lugar
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3">
                  Da emissão de passagens ao regresso seguro, cuidamos de cada etapa do seu roteiro
                  com agilidade e total transparência.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
                {SERVICES.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(srv)}
                    className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[28px]">{srv.icon}</span>
                    </div>
                    <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                      {srv.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. PACOTES EM DESTAQUE */}
          <section
            id="pacotes"
            className="w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-2xl scroll-mt-20"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Pacotes Demonstrativos
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium">
                  Explore as nossas opções
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Roteiros combinados com voos, hospedagem e suporte dedicado com partidas regulares
                a partir de Luanda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg)}
                  className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                >
                  <div className="relative h-56 bg-surface-container">
                    <img className="w-full h-full object-cover" src={pkg.imageUrl} alt={pkg.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-transparent to-transparent"></div>
                    <span className="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                      {pkg.duration}
                    </span>
                    <div className="absolute bottom-3 left-4 text-on-primary">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase">
                        {pkg.departure}
                      </span>
                      <h3 className="font-title-lg text-title-lg text-on-primary font-bold">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="pt-4 bg-surface-container-low -mx-space-lg -mb-space-lg p-space-lg flex items-center justify-between">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Sob Consulta
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenBookingForPackage(pkg);
                        }}
                        className="inline-flex items-center gap-1.5 bg-secondary hover:bg-on-secondary-container text-on-secondary px-4 py-2.5 rounded-lg font-label-md text-label-md uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>Solicitar cotação</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. COMO FUNCIONA (3 PASSOS) */}
          <section className="w-full bg-surface-container-low py-space-2xl">
            <div className="max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop">
              <div className="text-center max-w-xl mx-auto mb-space-2xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Etapas Claras e Ágeis
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium mt-2">
                  Viajar pode ser simples
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop relative">
                {/* Step 1 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl relative shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-lg text-headline-lg font-bold text-secondary">
                      01
                    </span>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-[20px]">travel_explore</span>
                    </div>
                  </div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Escolha o seu destino
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Indique as datas pretendidas, o objetivo da viagem e as suas preferências de
                    voo e hospedagem.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl relative shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-lg text-headline-lg font-bold text-secondary">
                      02
                    </span>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-[20px]">forum</span>
                    </div>
                  </div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Fale com a nossa equipa
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Os nossos consultores avaliam as melhores rotas, esclarecem requisitos de vistos
                    e apresentam opções sob medida.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl relative shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-lg text-headline-lg font-bold text-secondary">
                      03
                    </span>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-[20px]">verified_user</span>
                    </div>
                  </div>
                  <h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                    Nós cuidamos dos detalhes
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Receba os seus bilhetes, confirmações de estadia e documentação pronta para
                    embarcar com total segurança.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. BLOCO DE CONFIANÇA & MÉTRICAS */}
          <section
            id="sobre-nos"
            className="w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-2xl scroll-mt-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-lg">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                    Compromisso &amp; Rigor
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium mt-2">
                    Mais do que uma viagem, acompanhamento em cada etapa.
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                    Trabalhamos para garantir que a sua experiência internacional ocorra com
                    comodidade, transparência e assistência direta do planeamento ao regresso.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[22px]">person_check</span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold">
                        Atendimento personalizado
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Consultores atentos às necessidades individuais de cada cliente e itinerário.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[22px]">
                        published_with_changes
                      </span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold">
                        Acompanhamento
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Suporte durante todo o trajeto para resolução de dúvidas e assistência em
                        viagem.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[22px]">hub</span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold">
                        Soluções completas
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Integração prática de passagens aéreas, alojamentos, seguros e documentação.
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => openWhatsApp()}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-surface-container group-hover:bg-secondary flex items-center justify-center text-secondary group-hover:text-on-secondary transition-colors shrink-0">
                      <span className="material-symbols-outlined text-[22px]">chat</span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface group-hover:text-secondary font-bold transition-colors">
                        Contacto rápido pelo WhatsApp
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Canal ágil para tirar dúvidas, receber orçamentos e obter apoio direto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-primary-container text-on-primary p-space-xl rounded-xl relative overflow-hidden shadow-xl">
                <div className="relative z-10 flex flex-col gap-space-lg">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                      Estrutura de Apoio
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-primary font-medium mt-1">
                      Segurança e rigor em cada itinerário
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-2">
                    <div className="bg-surface-container-lowest/10 p-space-md rounded-lg backdrop-blur-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-[28px] mb-1">
                        flight
                      </span>
                      <span className="font-title-md text-title-md font-bold text-on-primary block">
                        Emissões Ágeis
                      </span>
                      <span className="font-body-sm text-body-sm text-inverse-on-surface/80">
                        Rotas e tarifas internacionais
                      </span>
                    </div>

                    <div className="bg-surface-container-lowest/10 p-space-md rounded-lg backdrop-blur-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-[28px] mb-1">
                        task_alt
                      </span>
                      <span className="font-title-md text-title-md font-bold text-on-primary block">
                        Apoio Consular
                      </span>
                      <span className="font-body-sm text-body-sm text-inverse-on-surface/80">
                        Checklist e organização prévia
                      </span>
                    </div>

                    <div className="bg-surface-container-lowest/10 p-space-md rounded-lg backdrop-blur-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-[28px] mb-1">
                        hotel
                      </span>
                      <span className="font-title-md text-title-md font-bold text-on-primary block">
                        Rede Hoteleira
                      </span>
                      <span className="font-body-sm text-body-sm text-inverse-on-surface/80">
                        Estadias credenciadas
                      </span>
                    </div>

                    <div className="bg-surface-container-lowest/10 p-space-md rounded-lg backdrop-blur-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-[28px] mb-1">
                        headset_mic
                      </span>
                      <span className="font-title-md text-title-md font-bold text-on-primary block">
                        Suporte Directo
                      </span>
                      <span className="font-body-sm text-body-sm text-inverse-on-surface/80">
                        Atendimento ao passageiro
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3 text-body-sm font-body-sm text-inverse-on-surface/75">
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      verified
                    </span>
                    <span>Demonstração de apresentação comercial para clientes e parceiros.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. TESTEMUNHOS DE CLIENTES */}
          <section className="w-full bg-surface-container-low py-space-2xl">
            <div className="max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop">
              <div className="text-center max-w-xl mx-auto mb-space-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-secondary text-label-sm font-semibold uppercase tracking-wider mb-2">
                  <span className="material-symbols-outlined text-[16px]">info</span>
                  <span>Exemplo demonstrativo</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-medium mt-1">
                  O que dizem os nossos clientes
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
                {/* Depoimento 1 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-500">
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
                        Exemplo demonstrativo
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                      "A preparação do meu processo de visto e a emissão das passagens para Lisboa
                      foram tratadas com rigor e clareza. O suporte via WhatsApp antes do embarque
                      fez toda a diferença."
                    </p>
                  </div>
                  <div className="pt-space-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-label-md">
                      MB
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold leading-none">
                        Manuel B.
                      </h4>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Empresário • Luanda
                      </span>
                    </div>
                  </div>
                </div>

                {/* Depoimento 2 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-500">
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
                        Exemplo demonstrativo
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                      "Planeamos uma viagem em família ao Dubai com apoio completo em cada detalhe.
                      Desde o visto rápido às recomendações de passeios e hotel, correu tudo de
                      forma pontual."
                    </p>
                  </div>
                  <div className="pt-space-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-label-md">
                      TK
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold leading-none">
                        Teresa K.
                      </h4>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Luanda Sul
                      </span>
                    </div>
                  </div>
                </div>

                {/* Depoimento 3 */}
                <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-500">
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
                        Exemplo demonstrativo
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                      "Excelente acompanhamento corporativo para as nossas deslocações de negócios à
                      África do Sul e à Europa. Transparência na faturação e comunicação sempre
                      rápida."
                    </p>
                  </div>
                  <div className="pt-space-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-tint text-on-primary flex items-center justify-center font-bold text-label-md">
                      JN
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold leading-none">
                        João N.
                      </h4>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Gestor Comercial • Luanda
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. CTA FINAL */}
          <section
            id="contactos"
            className="w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-2xl scroll-mt-20"
          >
            <div className="relative bg-primary-container text-on-primary rounded-2xl overflow-hidden p-space-xl lg:p-space-2xl shadow-xl flex flex-col items-center text-center">
              <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary-fixed-dim/10 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl flex flex-col items-center gap-space-md">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed bg-surface-container-lowest/10 px-4 py-1.5 rounded-full">
                  Demonstração — Agência de Viagens Angola
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-primary font-medium tracking-tight">
                  Pronto para começar a sua próxima viagem?
                </h2>
                <p className="font-body-lg text-body-lg text-inverse-on-surface/90 leading-relaxed">
                  Conte-nos para onde pretende ir e a nossa equipa ajudará a encontrar uma solução
                  adequada para a sua viagem.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
                  <button
                    onClick={() => openWhatsApp()}
                    className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-on-secondary-container text-on-secondary px-8 py-3.5 rounded-lg font-title-md text-title-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">person_pin</span>
                    <span>Falar com um consultor</span>
                  </button>
                  <button
                    onClick={() => setBookingModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary px-7 py-3.5 rounded-lg font-title-md text-title-md transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed-dim">
                      send
                    </span>
                    <span>Solicitar cotação</span>
                  </button>
                </div>
                <div className="pt-space-md flex flex-wrap items-center justify-center gap-space-md text-body-sm font-body-sm text-inverse-on-surface/75">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      pin_drop
                    </span>
                    <span>Avenida 4 de Fevereiro (Marginal), Luanda</span>
                  </div>
                  <span className="opacity-40">•</span>
                  <span>Atendimento presencial e digital</span>
                  <span className="opacity-40">•</span>
                  <a
                    href={`tel:${AGENCY_CONTACTS.phoneHref}`}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      call
                    </span>
                    <span>{AGENCY_CONTACTS.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low text-on-surface mt-space-2xl shadow-[0_-1px_12px_rgba(11,30,61,0.03)]">
        <div className="max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-secondary-fixed">
                  <span className="material-symbols-outlined text-[18px]">travel_explore</span>
                </div>
                <span className="font-title-md text-[14px] font-bold tracking-tight text-primary leading-tight uppercase">
                  DEMONSTRAÇÃO — AGÊNCIA DE VIAGENS ANGOLA
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Plataforma demonstrativa de mobilidade internacional, consultoria de vistos e turismo
                executivo em Luanda, Angola.
              </p>
              <div className="inline-flex items-center gap-space-xs p-space-sm bg-surface-container-lowest rounded-lg shadow-[0_1px_3px_0_rgba(11,30,61,0.04)]">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  verified
                </span>
                <span className="text-label-sm font-label-sm text-on-surface">
                  Demonstração Comercial para Apresentação Institucional
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-space-sm">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Links Rápidos
              </h4>
              <ul className="flex flex-col gap-space-xs text-body-sm font-body-sm text-on-surface-variant">
                <li>
                  <a
                    className="hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => scrollTo('inicio')}
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => scrollTo('destinos')}
                  >
                    Destinos
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => scrollTo('servicos')}
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => scrollTo('pacotes')}
                  >
                    Pacotes
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => scrollTo('contactos')}
                  >
                    Contactos
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-space-sm">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Serviços Principais
              </h4>
              <ul className="flex flex-col gap-space-xs text-body-sm font-body-sm text-on-surface-variant">
                <li>
                  <a
                    className="hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => setBookingModalOpen(true)}
                  >
                    Passagens aéreas
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => setBookingModalOpen(true)}
                  >
                    Vistos e documentação
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => scrollTo('pacotes')}
                  >
                    Pacotes turísticos
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => setBookingModalOpen(true)}
                  >
                    Reservas de hotéis
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors cursor-pointer"
                    onClick={() => setBookingModalOpen(true)}
                  >
                    Consultoria de viagem
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-space-sm">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Contactos &amp; Atendimento
              </h4>
              <div className="flex flex-col gap-space-xs text-body-sm font-body-sm text-on-surface-variant">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">
                    pin_drop
                  </span>
                  <span>Avenida 4 de Fevereiro / Marginal de Luanda, Angola</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                    chat
                  </span>
                  <a
                    onClick={() => openWhatsApp()}
                    className="cursor-pointer hover:text-secondary"
                  >
                    WhatsApp: {AGENCY_CONTACTS.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                    call
                  </span>
                  <a href={`tel:${AGENCY_CONTACTS.phoneHref}`}>
                    Telefone: {AGENCY_CONTACTS.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                    mail
                  </span>
                  <a href={`mailto:${AGENCY_CONTACTS.email}`}>{AGENCY_CONTACTS.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container py-space-md text-on-surface-variant text-label-md font-label-md">
          <div className="max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-sm text-center md:text-left">
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-on-surface">
                © 2026 Demonstração — Agência de Viagens Angola
              </span>
              <span className="text-[11px] text-on-surface-variant/80">
                Projeto demonstrativo desenvolvido pela Elevora
              </span>
            </div>
            <div className="flex items-center gap-space-md text-body-sm">
              <span
                onClick={() => setLegalModalType('terms')}
                className="hover:text-secondary cursor-pointer"
              >
                Termos de Uso
              </span>
              <span>•</span>
              <span
                onClick={() => setLegalModalType('privacy')}
                className="hover:text-secondary cursor-pointer"
              >
                Política de Privacidade
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={initialBookingData}
      />

      <DestinationModal
        destination={selectedDestination}
        isOpen={!!selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onBook={(destName) => handleOpenBookingForDestination(destName)}
      />

      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onRequestService={(title) => {
          setInitialBookingData({
            notes: `Solicitação para o serviço: ${title}.`,
          });
          setBookingModalOpen(true);
        }}
      />

      <PackageModal
        pkg={selectedPackage}
        isOpen={!!selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookPackage={handleOpenBookingForPackage}
      />

      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
