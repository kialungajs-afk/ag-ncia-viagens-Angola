import React, { useState } from 'react';

interface BookingFormProps {
  onSubmitTripRequest: (data: {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    passengers: string;
    isOneWay: boolean;
  }) => void;
  selectedDestination?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  onSubmitTripRequest,
  selectedDestination = '',
}) => {
  const [origin, setOrigin] = useState('Luanda - 4 de Fevereiro');
  const [destination, setDestination] = useState(selectedDestination || '');
  const [departureDate, setDepartureDate] = useState(() => {
    // Default to 14 days from now
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().split('T')[0];
  });
  const [returnDate, setReturnDate] = useState(() => {
    // Default to 24 days from now
    const d = new Date();
    d.setDate(d.getDate() + 24);
    return d.toISOString().split('T')[0];
  });
  const [passengers, setPassengers] = useState('1');
  const [isOneWay, setIsOneWay] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Update destination if external prop changes
  React.useEffect(() => {
    if (selectedDestination) {
      setDestination(selectedDestination);
    }
  }, [selectedDestination]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!destination.trim()) {
      setValidationError('Por favor, informe o seu destino pretendido.');
      return;
    }

    if (!departureDate) {
      setValidationError('Por favor, seleccione a data de partida.');
      return;
    }

    if (!isOneWay && returnDate && returnDate < departureDate) {
      setValidationError('A data de regresso deve ser posterior à data de partida.');
      return;
    }

    onSubmitTripRequest({
      origin,
      destination: destination.trim(),
      departureDate,
      returnDate: isOneWay ? '' : returnDate,
      passengers,
      isOneWay,
    });
  };

  const quickDestinations = ['Lisboa', 'Dubai', 'São Paulo', 'Cidade do Cabo', 'Porto', 'Paris'];

  return (
    <section
      id="solicitar"
      className="relative z-20 w-full max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop -mt-14 lg:-mt-20 scroll-mt-28"
    >
      <div className="bg-white rounded-xl shadow-xl border border-[#eff4ff] overflow-hidden p-space-md sm:p-space-lg lg:p-space-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-[#e5eeff]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#904d00] text-[24px]">flight_takeoff</span>
            <h3 className="font-title-lg text-[#0b1c30]">Comece a planejar a sua viagem</h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-lg bg-[#eff4ff] p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setIsOneWay(false)}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  !isOneWay ? 'bg-white text-[#0b1e3d] shadow-xs' : 'text-[#44474e] hover:text-[#0b1c30]'
                }`}
              >
                Ida e Volta
              </button>
              <button
                type="button"
                onClick={() => setIsOneWay(true)}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  isOneWay ? 'bg-white text-[#0b1e3d] shadow-xs' : 'text-[#44474e] hover:text-[#0b1c30]'
                }`}
              >
                Só Ida
              </button>
            </div>
            <span className="text-body-sm text-[#44474e] hidden sm:inline">
              Atendimento ágil para voos, estadias e documentação
            </span>
          </div>
        </div>

        {/* Validation Error Banner */}
        {validationError && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">error</span>
            <span>{validationError}</span>
          </div>
        )}

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-end">
          {/* Origem */}
          <div className="lg:col-span-3 flex flex-col gap-1.5">
            <label className="font-label-sm text-[#44474e] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">flight_takeoff</span>
              Origem
            </label>
            <div className="relative bg-[#eff4ff] rounded-lg p-3 hover:bg-[#e5eeff] transition-colors">
              <input
                className="w-full bg-transparent font-title-md text-[#0b1c30] font-semibold focus:outline-none"
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
              <span className="font-body-sm text-[#44474e] block text-xs">Angola (LAD)</span>
            </div>
          </div>

          {/* Destino */}
          <div className="lg:col-span-3 flex flex-col gap-1.5">
            <label className="font-label-sm text-[#44474e] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">flight_land</span>
              Destino
            </label>
            <div className="relative bg-[#eff4ff] rounded-lg p-3 focus-within:bg-[#e5eeff] transition-colors border border-transparent focus-within:border-[#fe932c]/50">
              <input
                className="w-full bg-transparent font-title-md text-[#0b1c30] placeholder:text-[#44474e]/60 focus:outline-none"
                placeholder="Lisboa, Dubai, São Paulo..."
                required
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <span className="font-body-sm text-[#44474e] block text-xs">Destino pretendido</span>
            </div>
          </div>

          {/* Data de Ida */}
          <div className="lg:col-span-2 flex flex-col gap-1.5">
            <label className="font-label-sm text-[#44474e] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">calendar_today</span>
              Data de Ida
            </label>
            <div className="relative bg-[#eff4ff] rounded-lg p-3 focus-within:bg-[#e5eeff] transition-colors">
              <input
                className="w-full bg-transparent font-title-md text-[#0b1c30] focus:outline-none text-xs sm:text-sm"
                required
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
              <span className="font-body-sm text-[#44474e] block text-xs">Data de partida</span>
            </div>
          </div>

          {/* Data de Volta */}
          <div className="lg:col-span-2 flex flex-col gap-1.5">
            <label className="font-label-sm text-[#44474e] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">event_repeat</span>
              Data de Volta
            </label>
            <div
              className={`relative rounded-lg p-3 transition-colors ${
                isOneWay ? 'bg-gray-100 opacity-60' : 'bg-[#eff4ff] focus-within:bg-[#e5eeff]'
              }`}
            >
              <input
                className="w-full bg-transparent font-title-md text-[#0b1c30] focus:outline-none text-xs sm:text-sm disabled:cursor-not-allowed"
                type="date"
                disabled={isOneWay}
                value={isOneWay ? '' : returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
              <span className="font-body-sm text-[#44474e] block text-xs">
                {isOneWay ? 'Viagem só de ida' : 'Opcional para só ida'}
              </span>
            </div>
          </div>

          {/* Passageiros */}
          <div className="lg:col-span-2 flex flex-col gap-1.5">
            <label className="font-label-sm text-[#44474e] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">group</span>
              Passageiros
            </label>
            <div className="relative bg-[#eff4ff] rounded-lg p-3 focus-within:bg-[#e5eeff] transition-colors">
              <select
                className="w-full bg-transparent font-title-md text-[#0b1c30] focus:outline-none cursor-pointer text-xs sm:text-sm font-semibold"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                <option value="1">1 Adulto</option>
                <option value="2">2 Adultos</option>
                <option value="fam">Família (3+ passageiros)</option>
                <option value="corp">Grupo Corporativo</option>
              </select>
              <span className="font-body-sm text-[#44474e] block text-xs">Classe flexível</span>
            </div>
          </div>

          {/* Quick Destination Pill Suggestions */}
          <div className="lg:col-span-12 -mt-1 flex items-center gap-1.5 flex-wrap text-xs text-[#44474e]">
            <span className="font-medium text-[#0b1c30]">Sugestões rápidas:</span>
            {quickDestinations.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setDestination(city)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  destination === city
                    ? 'bg-[#0b1e3d] text-white'
                    : 'bg-[#eff4ff] hover:bg-[#e5eeff] text-[#0b1c30]'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Botão de Ação & Nota Informativa */}
          <div className="lg:col-span-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2.5 text-body-sm text-[#44474e]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span>Consultoria especializada com emissão em Kwanzas (AOA) e moeda externa.</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0b1e3d] hover:bg-[#011e44] active:scale-95 text-white px-8 py-3.5 rounded-lg font-title-md shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[20px] text-[#ffdcc3]">send</span>
              <span>Solicitar viagem</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
