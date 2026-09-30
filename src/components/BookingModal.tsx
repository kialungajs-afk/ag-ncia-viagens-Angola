import React, { useState, useEffect } from 'react';
import { AGENCY_CONTACTS } from '../data/travelData';
import { BookingFormData } from '../types/travel';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<BookingFormData>;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    origin: 'Luanda - 4 de Fevereiro (LAD)',
    destination: '',
    departureDate: '',
    returnDate: '',
    isOneWay: false,
    passengers: '1 Adulto',
    cabinClass: 'economy',
    preferredCurrency: 'AOA',
    fullName: '',
    phone: '',
    email: '',
    needsVisaSupport: true,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
    if (isOpen) {
      setSubmitted(false);
      setErrors({});
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.destination.trim()) {
      newErrors.destination = 'Por favor indique o destino da sua viagem.';
    }
    if (!formData.departureDate) {
      newErrors.departureDate = 'Informe a data pretendida de partida.';
    }
    if (!formData.isOneWay && formData.returnDate && formData.returnDate < formData.departureDate) {
      newErrors.returnDate = 'A data de regresso deve ser posterior à data de ida.';
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'O seu nome é obrigatório para registo da solicitação.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Indique o seu número de WhatsApp / Telefone.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomRef = `AO-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceCode(randomRef);
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `*SOLICITAÇÃO DE VIAGEM — ${referenceCode}*
---------------------------------
*Passageiro:* ${formData.fullName}
*WhatsApp:* ${formData.phone}
*Email:* ${formData.email || 'Não informado'}
*Origem:* ${formData.origin}
*Destino:* ${formData.destination}
*Partida:* ${formData.departureDate}
*Regresso:* ${formData.isOneWay ? 'Apenas ida' : formData.returnDate || 'A definir'}
*Passageiros:* ${formData.passengers}
*Classe:* ${
      formData.cabinClass === 'economy'
        ? 'Económica'
        : formData.cabinClass === 'premium_economy'
        ? 'Premium Economy'
        : 'Executiva'
    }
*Moeda de preferência:* ${formData.preferredCurrency}
*Apoio de Vistos:* ${formData.needsVisaSupport ? 'Sim, necessito' : 'Não necessito'}
*Observações:* ${formData.notes || 'Sem observações'}
---------------------------------
Agradeço o envio da proposta e cotação com a maior brevidade.`;

    const url = `https://wa.me/${AGENCY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e5eeff] my-8">
        {/* Modal Top Bar */}
        <div className="bg-[#0b1e3d] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#ffdcc3]">
              <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
            </div>
            <div>
              <h3 className="font-title-lg text-white font-bold leading-tight">
                {submitted ? 'Solicitação Registada com Sucesso' : 'Solicitar Cotação de Viagem'}
              </h3>
              <p className="text-xs text-[#eaf1ff]/80">
                {submitted
                  ? 'A nossa equipa comercial entrará em contacto dentro de instantes.'
                  : 'Preencha os dados e receba uma proposta detalhada com voos e estadias.'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            /* Success confirmation */
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#904d00]">
                Referência da Solicitação
              </span>
              <div className="font-mono text-2xl font-extrabold text-[#0b1e3d] mt-1 mb-2 bg-[#eff4ff] px-4 py-1.5 rounded-lg border border-[#e5eeff]">
                {referenceCode}
              </div>

              <h4 className="text-lg font-bold text-[#0b1c30]">
                Obrigado, {formData.fullName}!
              </h4>
              <p className="text-sm text-[#44474e] max-w-md mt-1 leading-relaxed">
                A sua solicitação para{' '}
                <strong className="text-[#0b1c30]">{formData.destination}</strong> foi registada na
                Demonstração — Agência de Viagens Angola.
              </p>

              {/* Summary Card */}
              <div className="w-full bg-[#f8f9ff] border border-[#e5eeff] rounded-xl p-4 my-5 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-[#e5eeff] pb-2">
                  <span className="text-[#44474e]">Itinerário:</span>
                  <span className="font-semibold text-[#0b1c30]">
                    {formData.origin} → {formData.destination}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#e5eeff] pb-2">
                  <span className="text-[#44474e]">Datas:</span>
                  <span className="font-semibold text-[#0b1c30]">
                    {formData.departureDate} {formData.isOneWay ? '(Só ida)' : `até ${formData.returnDate || 'A definir'}`}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#e5eeff] pb-2">
                  <span className="text-[#44474e]">Passageiros & Classe:</span>
                  <span className="font-semibold text-[#0b1c30]">
                    {formData.passengers} •{' '}
                    {formData.cabinClass === 'economy'
                      ? 'Económica'
                      : formData.cabinClass === 'premium_economy'
                      ? 'Premium'
                      : 'Executiva'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#44474e]">Moeda preferencial:</span>
                  <span className="font-semibold text-[#0b1c30]">
                    {formData.preferredCurrency === 'AOA'
                      ? 'Kwanzas (AOA)'
                      : formData.preferredCurrency}
                  </span>
                </div>
              </div>

              {/* Quick WhatsApp Forwarding Button */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={handleSendToWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#904d00] hover:bg-[#783c00] text-white py-3 px-5 rounded-lg font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Avançar pelo WhatsApp agora</span>
                </button>

                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center bg-[#eff4ff] hover:bg-[#e5eeff] text-[#0b1c30] py-3 px-5 rounded-lg font-semibold text-sm transition-all cursor-pointer"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Trip Details Section */}
              <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#e5eeff]">
                <h4 className="font-bold text-[#0b1c30] text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#904d00]">flight</span>
                  Dados do Voo & Destino
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#44474e] mb-1">Origem</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-[#e5eeff] rounded-lg px-3 py-2 text-xs text-[#0b1c30] font-medium focus:outline-none focus:border-[#904d00]"
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#44474e] mb-1">
                      Destino Pretendido *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Lisboa, Dubai, São Paulo..."
                      className={`w-full bg-white border rounded-lg px-3 py-2 text-xs text-[#0b1c30] font-medium focus:outline-none focus:border-[#904d00] ${
                        errors.destination ? 'border-red-500' : 'border-[#e5eeff]'
                      }`}
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    />
                    {errors.destination && (
                      <span className="text-[11px] text-red-600 block mt-0.5">{errors.destination}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#44474e] mb-1">
                      Data de Partida *
                    </label>
                    <input
                      type="date"
                      className={`w-full bg-white border rounded-lg px-3 py-2 text-xs text-[#0b1c30] focus:outline-none focus:border-[#904d00] ${
                        errors.departureDate ? 'border-red-500' : 'border-[#e5eeff]'
                      }`}
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                    />
                    {errors.departureDate && (
                      <span className="text-[11px] text-red-600 block mt-0.5">{errors.departureDate}</span>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-semibold text-[#44474e]">Data de Regresso</label>
                      <label className="text-[11px] text-[#0b1e3d] flex items-center gap-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.isOneWay}
                          onChange={(e) => setFormData({ ...formData, isOneWay: e.target.checked })}
                          className="rounded text-[#904d00]"
                        />
                        <span>Só ida</span>
                      </label>
                    </div>
                    <input
                      type="date"
                      disabled={formData.isOneWay}
                      className={`w-full bg-white border rounded-lg px-3 py-2 text-xs text-[#0b1c30] focus:outline-none focus:border-[#904d00] disabled:bg-gray-100 disabled:opacity-50 ${
                        errors.returnDate ? 'border-red-500' : 'border-[#e5eeff]'
                      }`}
                      value={formData.isOneWay ? '' : formData.returnDate}
                      onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                    />
                    {errors.returnDate && (
                      <span className="text-[11px] text-red-600 block mt-0.5">{errors.returnDate}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#44474e] mb-1">
                      Passageiros
                    </label>
                    <select
                      className="w-full bg-white border border-[#e5eeff] rounded-lg px-3 py-2 text-xs text-[#0b1c30] font-medium focus:outline-none focus:border-[#904d00]"
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    >
                      <option value="1 Adulto">1 Adulto</option>
                      <option value="2 Adultos">2 Adultos</option>
                      <option value="1 Adulto + 1 Criança">1 Adulto + 1 Criança</option>
                      <option value="Família (3+ passageiros)">Família (3+ passageiros)</option>
                      <option value="Grupo Corporativo (5+ passageiros)">
                        Grupo Corporativo (5+ passageiros)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#44474e] mb-1">Classe</label>
                    <select
                      className="w-full bg-white border border-[#e5eeff] rounded-lg px-3 py-2 text-xs text-[#0b1c30] font-medium focus:outline-none focus:border-[#904d00]"
                      value={formData.cabinClass}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cabinClass: e.target.value as 'economy' | 'premium_economy' | 'business',
                        })
                      }
                    >
                      <option value="economy">Classe Económica</option>
                      <option value="premium_economy">Premium Economy</option>
                      <option value="business">Classe Executiva (Business)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Passenger Contact Information */}
              <div className="bg-[#f8f9ff] p-4 rounded-xl border border-[#e5eeff]">
                <h4 className="font-bold text-[#0b1c30] text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#904d00]">person</span>
                  Dados de Contacto & Emissão
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#44474e] mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      placeholder="Conforme consta no passaporte"
                      className={`w-full bg-white border rounded-lg px-3 py-2 text-xs text-[#0b1c30] focus:outline-none focus:border-[#904d00] ${
                        errors.fullName ? 'border-red-500' : 'border-[#e5eeff]'
                      }`}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 block mt-0.5">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#44474e] mb-1">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      placeholder="+244 9XX XXX XXX"
                      className={`w-full bg-white border rounded-lg px-3 py-2 text-xs text-[#0b1c30] focus:outline-none focus:border-[#904d00] ${
                        errors.phone ? 'border-red-500' : 'border-[#e5eeff]'
                      }`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 block mt-0.5">{errors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#44474e] mb-1">
                      E-mail para Envio da Cotação
                    </label>
                    <input
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      className="w-full bg-white border border-[#e5eeff] rounded-lg px-3 py-2 text-xs text-[#0b1c30] focus:outline-none focus:border-[#904d00]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#44474e] mb-1">
                      Moeda Preferencial para Faturação
                    </label>
                    <select
                      className="w-full bg-white border border-[#e5eeff] rounded-lg px-3 py-2 text-xs text-[#0b1c30] font-medium focus:outline-none focus:border-[#904d00]"
                      value={formData.preferredCurrency}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredCurrency: e.target.value as 'AOA' | 'USD' | 'EUR',
                        })
                      }
                    >
                      <option value="AOA">Kwanzas (AOA) - Cotação Oficial</option>
                      <option value="USD">Dólares Americanos (USD)</option>
                      <option value="EUR">Euros (EUR)</option>
                    </select>
                  </div>

                  <div className="flex items-center pt-4">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#0b1c30]">
                      <input
                        type="checkbox"
                        checked={formData.needsVisaSupport}
                        onChange={(e) =>
                          setFormData({ ...formData, needsVisaSupport: e.target.checked })
                        }
                        className="rounded text-[#904d00]"
                      />
                      <span>Necessito de assessoria para visto / documentação</span>
                    </label>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#44474e] mb-1">
                      Observações / Pedidos Especiais
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Preferência de companhia aérea (ex: TAAG, Emirates, TAP), hotéis com pequeno-almoço, bagagens extras..."
                      className="w-full bg-white border border-[#e5eeff] rounded-lg px-3 py-2 text-xs text-[#0b1c30] focus:outline-none focus:border-[#904d00]"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold text-[#44474e] hover:bg-[#eff4ff] transition-colors cursor-pointer"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#0b1e3d] hover:bg-[#011e44] active:scale-95 text-white px-6 py-2.5 rounded-lg text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#ffdcc3]">send</span>
                  <span>Confirmar & Receber Cotação</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
