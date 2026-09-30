import React from 'react';
import { ServiceItem } from '../types/travel';
import { AGENCY_CONTACTS } from '../data/travelData';

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onRequestService,
}) => {
  if (!isOpen || !service) return null;

  const openWhatsApp = () => {
    const text = `Olá! Gostaria de obter assistência sobre o serviço de *${service.title}* oferecido pela Agência de Viagens Angola.`;
    const url = `https://wa.me/${AGENCY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e5eeff] my-8">
        {/* Header */}
        <div className="bg-[#0b1e3d] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-[#ffdcc3]">
              <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffdcc3]">
                Serviço Especializado
              </span>
              <h3 className="font-title-lg text-white font-bold leading-tight">
                {service.title}
              </h3>
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

        {/* Body */}
        <div className="p-6 flex flex-col gap-5">
          <p className="font-body-md text-[#44474e] leading-relaxed text-sm">
            {service.detailedText}
          </p>

          {/* Inclusions */}
          <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#e5eeff]">
            <h4 className="font-bold text-[#0b1c30] text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">verified</span>
              O Que Está Incluído
            </h4>
            <ul className="space-y-2">
              {service.inclusions.map((inc, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600 shrink-0 mt-0.5">
                    check
                  </span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Checklist */}
          <div>
            <h4 className="font-bold text-[#0b1c30] text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">
                assignment
              </span>
              Documentos & Requisitos Necessários
            </h4>
            <div className="space-y-1.5">
              {service.checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-[#44474e] bg-[#f8f9ff] p-2.5 rounded-lg border border-[#e5eeff]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#904d00] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-[#e5eeff]">
            <button
              onClick={() => {
                onClose();
                onRequestService(service.title);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0b1e3d] hover:bg-[#011e44] text-white py-3 px-5 rounded-lg font-semibold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#ffdcc3]">send</span>
              <span>Solicitar Este Serviço</span>
            </button>

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-[#904d00] hover:bg-[#783c00] text-white py-3 px-5 rounded-lg font-semibold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Tirar Dúvidas via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
