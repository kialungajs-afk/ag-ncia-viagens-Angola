import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: 'travel_explore',
      title: 'Escolha o seu destino',
      desc: 'Indique as datas pretendidas, o objetivo da viagem e as suas preferências de voo e hospedagem.',
    },
    {
      num: '02',
      icon: 'forum',
      title: 'Fale com a nossa equipa',
      desc: 'Os nossos consultores avaliam as melhores rotas, esclarecem requisitos de vistos e apresentam opções sob medida.',
    },
    {
      num: '03',
      icon: 'verified_user',
      title: 'Nós cuidamos dos detalhes',
      desc: 'Receba os seus bilhetes, confirmações de estadia e documentação pronta para embarcar com total segurança.',
    },
  ];

  return (
    <section className="w-full bg-[#eff4ff] py-space-2xl border-y border-[#e5eeff]">
      <div className="max-w-[1360px] mx-auto px-margin sm:px-margin-tablet lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-space-2xl">
          <span className="font-label-sm uppercase tracking-widest text-[#904d00] font-bold text-[11px]">
            Etapas Claras e Ágeis
          </span>
          <h2 className="font-headline-lg text-[#0b1c30] font-medium mt-2">
            Viajar pode ser simples
          </h2>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop relative">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white p-space-xl rounded-xl relative shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md border border-[#e5eeff]/70"
            >
              <div className="flex items-center justify-between">
                <span className="font-headline-lg font-bold text-[#904d00]">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#0b1e3d]">
                  <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                </div>
              </div>

              <h3 className="font-title-lg text-[#0b1c30] font-bold">
                {step.title}
              </h3>

              <p className="font-body-md text-[#44474e] leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
