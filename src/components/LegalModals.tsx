import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isTerms = type === 'terms';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e5eeff] my-8">
        <div className="bg-[#0b1e3d] text-white p-5 flex items-center justify-between">
          <h3 className="font-title-lg text-white font-bold leading-tight">
            {isTerms ? 'Termos de Uso' : 'Política de Privacidade'}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-6 text-xs text-[#44474e] leading-relaxed space-y-4 max-h-[70vh] overflow-y-auto">
          {isTerms ? (
            <>
              <p>
                <strong>1. Natureza do Serviço:</strong> A presente plataforma digital destina-se à
                apresentação institucional, consulta de itinerários, pacotes turísticos e
                intermediação de emissão de passagens aéreas e consultoria de vistos pela
                Demonstração — Agência de Viagens Angola.
              </p>
              <p>
                <strong>2. Emissão de Bilhetes e Cotações:</strong> Os valores de tarifas e taxas
                aeroportuárias são cotados com base na disponibilidade em tempo real das companhias
                aéreas (TAAG, TAP, Emirates, entre outras) e estão sujeitos a flutuações cambiais
                conforme as diretrizes cambiais em vigor em Angola.
              </p>
              <p>
                <strong>3. Vistos e Documentação:</strong> O papel da agência é de assessoria técnica,
                conferência documental e orientação consular. A concessão final de vistos é de
                competência exclusiva e soberana das autoridades consulares e migratórias dos países
                de destino.
              </p>
              <p>
                <strong>4. Cancelamentos e Alterações:</strong> As regras de alteração de datas,
                reembolsos e penalidades seguem estritamente as políticas tarifárias de cada companhia
                aérea e prestador de serviços hoteleiros.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Tratamento de Dados:</strong> Recolhemos apenas os dados pessoais
                estritamente necessários para a pesquisa, cotação e emissão de bilhetes aéreos, vistos
                e reservas de alojamento (nome completo, contacto telefónico, e-mail e dados de
                passaporte quando fornecidos).
              </p>
              <p>
                <strong>2. Finalidade e Segurança:</strong> As informações são tratadas com sigilo e
                destinam-se exclusivamente à formalização dos processos de viagem e comunicação
                direta com o cliente via WhatsApp ou e-mail.
              </p>
              <p>
                <strong>3. Partilha com Terceiros:</strong> Os dados de passageiros são partilhados
                exclusivamente com as companhias aéreas, consulados, seguradoras e sistemas globais de
                distribuição (GDS) estritamente necessários para a emissão dos serviços contratados.
              </p>
              <p>
                <strong>4. Direitos do Titular:</strong> O utilizador pode solicitar a atualização,
                retificação ou eliminação dos seus dados de contacto a qualquer momento através dos
                nossos canais de atendimento em Luanda.
              </p>
            </>
          )}

          <div className="pt-3 border-t border-[#e5eeff] flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#0b1e3d] text-white px-5 py-2 rounded-lg text-xs font-semibold cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
