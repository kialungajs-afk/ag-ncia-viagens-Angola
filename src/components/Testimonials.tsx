import React from 'react';
import { TESTIMONIALS } from '../data/travelData';

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#eff4ff] py-space-2xl border-y border-[#e5eeff]">
      <div className="max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-space-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e5eeff] text-[#904d00] text-[11px] font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[16px]">info</span>
            <span>Exemplo demonstrativo</span>
          </div>
          <h2 className="font-headline-lg text-[#0b1c30] font-medium mt-1">
            O que dizem os nossos clientes
          </h2>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {TESTIMONIALS.map((t, idx) => {
            const avatarBg =
              idx === 0
                ? 'bg-[#0b1e3d] text-white'
                : idx === 1
                ? 'bg-[#904d00] text-white'
                : 'bg-[#4e5e81] text-white';

            return (
              <div
                key={t.name}
                className="bg-white p-space-xl rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md border border-[#e5eeff]/70"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-[18px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#e5eeff] text-[#44474e] font-medium">
                      Exemplo demonstrativo
                    </span>
                  </div>

                  <p className="font-body-md text-[#44474e] italic leading-relaxed text-sm">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-space-sm flex items-center gap-3 border-t border-[#e5eeff]/60">
                  <div
                    className={`w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center font-bold text-xs shrink-0 shadow-xs`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-title-md text-[#0b1c30] font-bold leading-none text-sm">
                      {t.name}
                    </h4>
                    <span className="font-body-sm text-[#44474e] text-xs">
                      {t.role} • {t.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
