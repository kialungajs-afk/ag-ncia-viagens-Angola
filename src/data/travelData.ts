import { Destination, ServiceItem, TravelPackage, Testimonial } from '../types/travel';

export const DESTINATIONS: Destination[] = [
  {
    id: 'portugal',
    name: 'Portugal',
    cities: 'Lisboa & Porto',
    badge: 'Visto CPLP & Férias',
    airlineTag: 'Saídas Regulares',
    flightDuration: '7h30 de Voo Direto',
    description: 'Conexões diárias diretas a partir de Luanda (LAD). Assistência completa documental, agendamento consular e reserva de hotéis centrais.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3iLfmk17hFP3NK5xRMqWESEB0vgSxXaO8Wf4iArrqKb8ykttX2dDEAbwwn4WDk5JVIQWX6KMLVFrqYXLmOACx8DlF9uwuomW_s6kB66_Zb9dDnZ6eV50GfqCTrdBCfk38d4eoRJE7j3hwmC95XZaZ17dsB4oBaCVJ-Pl2MwgLF1wFGJwbBGvW9oDv9udwamjHQHp6HnRD6snmNvFMmk8PVrOM2MLY6kCWh8khP2TCEi40veTWunA',
    popularFor: ['Turismo cultural em Lisboa', 'Passeios pelas caves do Porto', 'Compras e gastronomia', 'Visitas familiares e negócios'],
    visaInfo: 'Apoiamos no enquadramento do Acordo de Mobilidade CPLP, vistos de estada temporária e de turismo Schengen.',
    recommendedAirlines: ['TAAG Linhas Aéreas de Angola', 'TAP Air Portugal']
  },
  {
    id: 'dubai',
    name: 'Dubai',
    cities: 'Emirados Árabes Unidos',
    badge: 'Compras & Negócios',
    airlineTag: 'Voos Emirates',
    flightDuration: '7h45 de Voo Direto',
    description: 'Emissão de visto eletrónico express, estadias 5 estrelas em Downtown e Marina, com experiências exclusivas no deserto e jantares de luxo.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEksxkJI_zy9UV1xZv3Isa7cOlvRSX99FuGoLvHt0UFJMsFzo45ywx_u-gDorMo8PAV6cCxnkrxS0sLkC6ToD3Zzjpl0QlxDPEG6t1dk1b1_1xgdPgrvDahf0ozguZn7-0lu0o582tGHhwv-kwal9eAsrTNCWAJ6qFaFw52mq9EdXb12XcoNrLqJedJAYqUzljq2J14QgJwMeU0hmC_NJ3ujfv32JbZrC8QKQHc65j5nPAPsGJx7c',
    popularFor: ['Compras em shopping centers de classe mundial', 'Safaris com jantar no deserto', 'Burj Khalifa e Marina', 'Feiras corporativas e negócios'],
    visaInfo: 'Visto eletrónico de turismo (eVisa) com emissão rápida em 48h a 72h úteis para cidadãos angolanos.',
    recommendedAirlines: ['Emirates Airline']
  },
  {
    id: 'brasil',
    name: 'Brasil',
    cities: 'São Paulo & Rio de Janeiro',
    badge: 'Turismo & Saúde',
    airlineTag: 'Voo Direto',
    flightDuration: '8h15 de Voo Direto',
    description: 'Roteiros sob medida para consultas médicas, lazer ou negócios. Voos diretos da TAAG para São Paulo (GRU) com excelentes conexões nacionais.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfXoxsMsB2JLJZru_4RZiqaV_w6XEkU2ZR1Ma70kAzKdOEW15epUbRxI2cfaBFQlW9EjPJ76-UsJTy3WMs8F8SMi7S3t2xeQGJ6D9mY78TvxmxqtIQuSVt7JYOw2c-1mdQ2MoH-fxjct9TxPshaoZ1vjsm7I2rQ-8M8m-fjPSvtBAEBOe1-y8_6JyBh03Ym5tUdSBh4UpF246bEMREIiE6507dEprEy4wfxzdclYo8RkC_9lm4ohY',
    popularFor: ['Check-ups e tratamentos médicos especializados', 'Praias de Copacabana e Ipanema', 'Pólo financeiro da Av. Paulista', 'Gastronomia e compras'],
    visaInfo: 'Assessoria para vistos consulares brasileiros (turismo, tratamento de saúde e negócios) com checklist completo.',
    recommendedAirlines: ['TAAG Linhas Aéreas de Angola', 'LATAM Airlines']
  },
  {
    id: 'africa-do-sul',
    name: 'África do Sul',
    cities: 'Cidade do Cabo & Joburg',
    badge: 'Lazer & Estudo',
    airlineTag: '3h30 de Voo',
    flightDuration: '3h30 a 4h00',
    description: 'O destino de proximidade favorito para escapadelas de fim de semana, compras, intercâmbios e safaris inesquecíveis em reservas privadas.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtSBlcknKg7Co-IJOejoTv7gAhY4xK-pT7bxH-e-vEV61yf2Y_QYACOc5QKkzug7tVZLuqy4oiO07jlwtfjHACBSDE2p5c2bYuHCqAYoSUpS0jR1JLfjNbGgyuDEshKLeILnehuwv_K-uPLW5rG00-cdjXjA_B0kCrNq22g8N5oUWkP3Wmv3XAjqeBdYMUN7H83yvQ7WJY-JsWyHzY8njrWHjO_ahiTk5CqkSaftF3Yy5wtxMM7-0',
    popularFor: ['Table Mountain e Waterfront na Cidade do Cabo', 'Safaris Big Five no Kruger Park', 'Sandton City e centros de compras em Joburg', 'Cursos de aperfeiçoamento de inglês'],
    visaInfo: 'Apoio no agendamento e formalização do processo de visto para a África do Sul (VFS Global Luanda).',
    recommendedAirlines: ['TAAG Linhas Aéreas de Angola', 'Airlink']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'passagens',
    title: 'Passagens aéreas',
    description: 'Pesquisa das melhores conexões e tarifas nas principais companhias internacionais com saídas de Luanda.',
    icon: 'airplane_ticket',
    detailedText: 'Encontramos as melhores rotas, horários convenientes e condições de bagagem flexíveis. Emitimos bilhetes em Kwanzas (AOA) com cotação do dia ou em divisas conforme preferência da sua empresa ou família.',
    inclusions: [
      'Emissão e reemissão de bilhetes nacionais e internacionais',
      'Marcação prévia de assentos e pedido de refeições especiais',
      'Gestão de bagagens adicionais e despacho prioritário',
      'Assistência 24/7 em caso de alteração ou cancelamento de voos'
    ],
    checklist: [
      'Passaporte com validade mínima de 6 meses',
      'Definição das datas de ida e volta pretendidas',
      'Nomes completos conforme documento oficial'
    ]
  },
  {
    id: 'vistos',
    title: 'Vistos e documentação',
    description: 'Orientação completa para montagem de processos consulares, checklist documental e agendamentos.',
    icon: 'badge',
    detailedText: 'Prestamos assessoria especializada na análise prévia de todos os documentos exigidos pelos consulados e embaixadas em Luanda, minimizando riscos de recusa e evitando atrasos desnecessários.',
    inclusions: [
      'Checklist personalizado para o tipo de visto requerido',
      'Preenchimento técnico de formulários oficiais',
      'Agendamento de entrevistas ou entrega biométrica',
      'Seguro de viagem em conformidade com as exigências consulares'
    ],
    checklist: [
      'Passaporte original válido',
      'Comprovativos de rendimentos e meios de subsistência',
      'Reserva confirmada de voos e alojamento',
      'Carta convite ou motivo comprovado da viagem'
    ]
  },
  {
    id: 'pacotes',
    title: 'Pacotes turísticos',
    description: 'Roteiros estruturados com voos, estadias e experiências planejadas para férias individuais ou em família.',
    icon: 'luggage',
    detailedText: 'Pacotes completos sob medida ou em grupos com partidas regulares a partir do Aeroporto Internacional 4 de Fevereiro. Cuidamos de transferes privativos, passeios guiados e suporte em português.',
    inclusions: [
      'Passagens aéreas de ida e volta incluídas',
      'Hospedagem em hotéis 4 e 5 estrelas selecionados',
      'Transferes aeroporto / hotel / aeroporto',
      'Passeios essenciais com guias credenciados'
    ],
    checklist: [
      'Escolha do destino e duração pretendida',
      'Número de passageiros (adultos e crianças)',
      'Preferências de categoria hoteleira'
    ]
  },
  {
    id: 'hoteis',
    title: 'Reservas de hotéis',
    description: 'Ampla seleção de hotéis bem avaliados nas capitais e destinos mais procurados do mundo.',
    icon: 'hotel',
    detailedText: 'Parcerias diretas com redes hoteleiras internacionais para assegurar confirmação imediata, opções com pequeno-almoço incluído, cancelamento flexível e localização estratégica próxima aos centros de negócios ou atrações turísticas.',
    inclusions: [
      'Hotéis 3, 4 e 5 estrelas com garantia de reserva',
      'Opções corporativas e familiares com quartos conjugados',
      'Vouchers oficiais válidos para apresentação em fronteiras e consulados',
      'Tarifas negociadas com impostos e taxas locais detalhados'
    ],
    checklist: [
      'Datas de check-in e check-out',
      'Tipo de quarto (Single, Double, Suite familiar)',
      'Exigências específicas (proximidade a clínicas, metrô, centros de convenções)'
    ]
  },
  {
    id: 'seguros',
    title: 'Seguro de viagem',
    description: 'Proteção médica e hospitalar com validade internacional, em conformidade com as exigências dos destinos.',
    icon: 'health_and_safety',
    detailedText: 'Apólices internacionais obrigatórias para entrada no Espaço Schengen (cobertura mínima de 30.000€) e recomendadas para todos os outros destinos, cobrindo emergências médicas, repatriação e perda de bagagens.',
    inclusions: [
      'Despesas médicas, cirúrgicas e hospitalares no exterior',
      'Repatriação sanitária e regresso de acompanhante',
      'Indenização por extravio ou atraso substancial de bagagem',
      'Assistência jurídica e adiantamento de fiança no estrangeiro'
    ],
    checklist: [
      'Datas exatas do início e término da viagem',
      'Idade dos viajantes',
      'Países de trânsito e destino final'
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoria de viagem',
    description: 'Atendimento dedicado para esclarecimento de dúvidas de itinerário, alterações e suporte contínuo.',
    icon: 'support_agent',
    detailedText: 'Um consultor exclusivo analisa o seu perfil de viajante, otimiza rotas complexas com múltiplas escalas, oferece orientações sobre vacinas, alfândega e bagagens, mantendo contacto direto via WhatsApp antes, durante e após a viagem.',
    inclusions: [
      'Planeamento personalizado de itinerários múltiplos',
      'Consultoria para viagens corporativas e frotas empresariais',
      'Monitorização em tempo real de conexões e horários',
      'Linha direta de emergência 24 horas por dia'
    ],
    checklist: [
      'Briefing sobre o objetivo principal da deslocação',
      'Restrições de datas ou orçamentos previstos',
      'Preferências de companhias e programas de milhagem'
    ]
  }
];

export const PACKAGES: TravelPackage[] = [
  {
    id: 'luanda-lisboa',
    title: 'LUANDA → LISBOA',
    destination: 'Lisboa, Portugal',
    departure: 'Partida de Luanda',
    duration: '7 Dias / 6 Noites',
    description: 'Passagem aérea ida e volta, hospedagem em hotel central com pequeno-almoço e assistência para seguro de viagem.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlNLFpZN2MLv1KYivjBDnFlvxjDntM5YBh7pw_yRQ-nNJ3LPXXq9oXBNk5vIK4Soe-MdEqGtIz0-_6XRfuYYsHqVwBg0YJpIcL-OmxJYfSF8bVKL4ZhBMi1dFffjq8syMfqp0Yj0e-FKN4m95lMT5r6i_z2Op1HLCBov_Sdt9Qg0bir3_dwRA6IU0e6ZCT8WW1tgLn4L3hino66bWifAVTNya8xa4L-HUVywN9E9Lyeagx6dG9N2A',
    priceNote: 'Sob Consulta',
    highlights: [
      'Voo direto diário com saídas noturnas',
      'Hotel 4 estrelas na Avenida da Liberdade / Saldanha',
      'Passeio panorâmico por Belém e Sintra',
      'Seguro de viagem Schengen de 30.000€ incluído'
    ],
    included: [
      'Bilhete aéreo ida e volta classe económica',
      '6 noites com buffet de pequeno-almoço',
      'Transfer privativo aeroporto - hotel - aeroporto',
      'Assistência consular e emissão de apólice de seguro'
    ]
  },
  {
    id: 'luanda-dubai',
    title: 'LUANDA → DUBAI',
    destination: 'Dubai, Emirados Árabes Unidos',
    departure: 'Partida de Luanda',
    duration: '6 Dias / 5 Noites',
    description: 'Voos internacionais, estadia em hotel selecionado, transfer do aeroporto e apoio na submissão de visto de turismo.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyY0eHjfUxdOl8ALQtnVIH4borHm6KTP8crIvE4tXwLQsTvq-Q9Wto07TtWVzZEd56d5jlV7CBZ48r7dnITRSFXRoXgub3O21_41P5-xes6uKJphaK0nWrA_lePifiAvF7dPwjCEKXI3BtXPFKkgb05UNs8y1bCGa5mIrKRDm4fOPd1MUTiy6FXIRhbrkgBJADneVgvNtvqV-Dx6Z5o4JeV2d2RoNX_utFc3mz8QP9djMSVXm5COQ',
    priceNote: 'Sob Consulta',
    highlights: [
      'Voos Emirates com entretenimento a bordo de referência',
      'Hotel 5 estrelas em Downtown Dubai com vista cidade',
      'Desert Safari em jipe 4x4 com jantar com espetáculo',
      'Subida ao Burj Khalifa (pisos 124 & 125) inclusa'
    ],
    included: [
      'Passagem aérea Luanda - Dubai - Luanda',
      'Taxa e emissão do visto eletrónico de turismo',
      '5 noites de hospedagem com pequeno-almoço',
      'Recepção no aeroporto com motorista privado'
    ]
  },
  {
    id: 'luanda-cape-town',
    title: 'LUANDA → CAPE TOWN',
    destination: 'Cidade do Cabo, África do Sul',
    departure: 'Partida de Luanda',
    duration: '5 Dias / 4 Noites',
    description: 'Voos diretos ou de conexão rápida, hotel em área nobre, seguro médico e opções personalizadas de passeios.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6XM5EhO80HfALnNQxBAu0TIMcLxg5MqN-2IiPxNoI_X0e06dPnkvDfyOlag6i0hyQCio5_KObs0fhfMSquInT-k7TDcazv_9NyjCkci8DbFg9o80Yhb4DYoqiSIL6Q8mW_l7jjX21JzLTLcWOFWyBLjS6FRRN7r0esnGhsCOHSlxAKECNuMfnWAj0TPn0I5WNOeBBD922M5x2Klz0WD6-Nmj1_G_LF76PsBbgb2BAldhVdgUwTZ8',
    priceNote: 'Sob Consulta',
    highlights: [
      'Voo com menos de 4 horas a partir de Luanda',
      'Hotel boutique no Victoria & Alfred Waterfront',
      'Bilhete para o teleférico da Table Mountain',
      'Visita guiada aos vinhedos de Stellenbosch'
    ],
    included: [
      'Bilhete aéreo ida e volta com bagagem de porão',
      '4 noites em hotel 4 estrelas superior',
      'Transfers de chegada e partida em viatura climatizada',
      'Seguro de assistência médica internacional'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Manuel B.',
    role: 'Empresário',
    location: 'Luanda',
    initials: 'MB',
    rating: 5,
    quote: '"A preparação do meu processo de visto e a emissão das passagens para Lisboa foram tratadas com rigor e clareza. O suporte via WhatsApp antes do embarque fez toda a diferença."'
  },
  {
    name: 'Teresa K.',
    role: 'Cliente Particular',
    location: 'Luanda Sul',
    initials: 'TK',
    rating: 5,
    quote: '"Planeamos uma viagem em família ao Dubai com apoio completo em cada detalhe. Desde o visto rápido às recomendações de passeios e hotel, correu tudo de forma pontual."'
  },
  {
    name: 'João N.',
    role: 'Gestor Comercial',
    location: 'Luanda',
    initials: 'JN',
    rating: 5,
    quote: '"Excelente acompanhamento corporativo para as nossas deslocações de negócios à África do Sul e à Europa. Transparência na faturação e comunicação sempre rápida."'
  }
];

export const AGENCY_CONTACTS = {
  name: 'DEMONSTRAÇÃO — AGÊNCIA DE VIAGENS ANGOLA',
  legalName: 'Atlântico Viagens & Turismo, Lda.',
  subtitle: 'Consultoria & Mobilidade Internacional',
  phoneDisplay: '+244 923 000 000',
  phoneHref: '+244923000000',
  whatsappNumber: '244923000000',
  whatsappDefaultMsg: 'Olá! Gostaria de falar com um consultor da Agência de Viagens Angola para obter informações sobre passagens, vistos e pacotes.',
  email: 'demonstracao@agenciadeviagens.ao',
  address: 'Avenida 4 de Fevereiro (Marginal), Luanda, Angola',
  hours: 'Segunda a Sábado, das 08h00 às 18h00 (Apoio ao viajante 24/7)'
};
