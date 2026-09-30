# DOCUMENTAÇÃO TÉCNICA E ESTRUTURAL — AGÊNCIA DE VIAGENS ANGOLA

Este documento contém o mapeamento completo da página, arquitetura de design, paleta de cores, tipografia, regras de negócio e o inventário exato de **todas as imagens** (localização no layout, URL de origem, descrição visual detalhada a olho nu e função lógica no sistema).

---

## 1. Visão Geral da Marca & Propósito
- **Nome Comercial:** DEMONSTRAÇÃO — AGÊNCIA DE VIAGENS ANGOLA
- **Assinatura / Slogan:** Consultoria & Mobilidade Internacional
- **Setor:** Mobilidade internacional, emissão de passagens aéreas, assessoria consular de vistos e turismo executivo/familiar com partidas regulares de Luanda, Angola.
- **Moedas de Operação:** Kwanzas (AOA) e Moeda Externa (USD/EUR).
- **Contacto Oficial:** +244 923 000 000 | demonstracao@agenciadeviagens.ao
- **Endereço Físico:** Avenida 4 de Fevereiro (Marginal), Luanda, Angola.

---

## 2. Mapa Completo de Imagens (Localização, URLs & Detalhes Visuais)

| # | Localização no Layout | URL da Imagem | Descrição Visual a Olho Nu | Função Lógica / Contexto |
|---|---|---|---|---|
| **IMG-01** | **Hero Section (Fundo Panorâmico)** | `https://lh3.googleusercontent.com/aida/AEtjO1UyNeWmY9fM38TEi8JOgPapdwy_tBietV4GtF78frMY0OkHhwNRyRcH7mTYZjNu9Mc1P28bKkVfWO6lgN4omD_o-j1dZYzUc4Ab5U9WrtYv0_hz-kn_vWYOO30KG8C954vQfUTykPb22-gyAL35oiTAsfk_wsCsLp4xLFa1hVxKk6oXIBXwAplstZ3s9kgYbQa4Hbwxp7fxPXjj-9Oa3JT3PZl17awIMb5PRILfJATUpCAmuQmIYmsPIA` | Homem elegante de sobretudo escuro segurando uma mala trolley preta, observando a pista de aeronaves (Qatar Airways, Emirates) através da enorme vidraça de um lounge VIP de aeroporto ao pôr do sol. | Fundo emocional e aspiracional da Hero Section. Representa o viajante executivo angolano que viaja com tranquilidade e sofisticação. |
| **IMG-02** | **Destinos — Cartão 1 (Portugal)** | `https://lh3.googleusercontent.com/aida-public/AB6AXuD3iLfmk17hFP3NK5xRMqWESEB0vgSxXaO8Wf4iArrqKb8ykttX2dDEAbwwn4WDk5JVIQWX6KMLVFrqYXLmOACx8DlF9uwuomW_s6kB66_Zb9dDnZ6eV50GfqCTrdBCfk38d4eoRJE7j3hwmC95XZaZ17dsB4oBaCVJ-Pl2MwgLF1wFGJwbBGvW9oDv9udwamjHQHp6HnRD6snmNvFMmk8PVrOM2MLY6kCWh8khP2TCEi40veTWunA` | Vista panorâmica de Lisboa sobre o Rio Tejo, mostrando a Torre de Belém e a Ponte 25 de Abril sob céu alaranjado e suave de fim de tarde europeu. | Ilustra a rota Luanda → Lisboa/Porto. Conexão direta histórica e forte procura por visto de mobilidade CPLP, turismo e negócios. |
| **IMG-03** | **Destinos — Cartão 2 (Dubai)** | `https://lh3.googleusercontent.com/aida-public/AB6AXuBEksxkJI_zy9UV1xZv3Isa7cOlvRSX99FuGoLvHt0UFJMsFzo45ywx_u-gDorMo8PAV6cCxnkrxS0sLkC6ToD3Zzjpl0QlxDPEG6t1dk1b1_1xgdPgrvDahf0ozguZn7-0lu0o582tGHhwv-kwal9eAsrTNCWAJ6qFaFw52mq9EdXb12XcoNrLqJedJAYqUzljq2J14QgJwMeU0hmC_NJ3ujfv32JbZrC8QKQHc65j5nPAPsGJx7c` | Skyline moderno de Dubai ao crepúsculo, com a torre Burj Khalifa iluminada em destaque sobre fontes luminosas e edifícios futuristas. | Ilustra a rota Luanda → Dubai (Emirates). Focada em comércio, luxo, compras internacionais e feiras de negócios. |
| **IMG-04** | **Destinos — Cartão 3 (Brasil)** | `https://lh3.googleusercontent.com/aida-public/AB6AXuBfXoxsMsB2JLJZru_4RZiqaV_w6XEkU2ZR1Ma70kAzKdOEW15epUbRxI2cfaBFQlW9EjPJ76-UsJTy3WMs8F8SMi7S3t2xeQGJ6D9mY78TvxmxqtIQuSVt7JYOw2c-1mdQ2MoH-fxjct9TxPshaoZ1vjsm7I2rQ-8M8m-fjPSvtBAEBOe1-y8_6JyBh03Ym5tUdSBh4UpF246bEMREIiE6507dEprEy4wfxzdclYo8RkC_9lm4ohY` | Vista aérea da Baía de Guanabara no Rio de Janeiro, com o relevo do Pão de Açúcar, águas costeiras e vegetação tropical sob luz diurna límpida. | Ilustra a rota direta da TAAG para o Brasil (São Paulo GRU e Rio de Janeiro), destino comum para tratamentos médicos, estudos e férias. |
| **IMG-05** | **Destinos — Cartão 4 (África do Sul)** | `https://lh3.googleusercontent.com/aida-public/AB6AXuAtSBlcknKg7Co-IJOejoTv7gAhY4xK-pT7bxH-e-vEV61yf2Y_QYACOc5QKkzug7tVZLuqy4oiO07jlwtfjHACBSDE2p5c2bYuHCqAYoSUpS0jR1JLfjNbGgyuDEshKLeILnehuwv_K-uPLW5rG00-cdjXjA_B0kCrNq22g8N5oUWkP3Wmv3XAjqeBdYMUN7H83yvQ7WJY-JsWyHzY8njrWHjO_ahiTk5CqkSaftF3Yy5wtxMM7-0` | Perspetiva marítima do Victoria & Alfred Waterfront na Cidade do Cabo com iates na marina e a majestosa Table Mountain ao fundo. | Ilustra a rota de proximidade de 3h30 de voo de Luanda. Muito procurada para férias de curta duração, intercâmbios de inglês e compras. |
| **IMG-06** | **Pacotes — Pacote 1 (Luanda → Lisboa)** | `https://lh3.googleusercontent.com/aida-public/AB6AXuDlNLFpZN2MLv1KYivjBDnFlvxjDntM5YBh7pw_yRQ-nNJ3LPXXq9oXBNk5vIK4Soe-MdEqGtIz0-_6XRfuYYsHqVwBg0YJpIcL-OmxJYfSF8bVKL4ZhBMi1dFffjq8syMfqp0Yj0e-FKN4m95lMT5r6i_z2Op1HLCBov_Sdt9Qg0bir3_dwRA6IU0e6ZCT8WW1tgLn4L3hino66bWifAVTNya8xa4L-HUVywN9E9Lyeagx6dG9N2A` | Elétrico amarelo tradicional (Eléctrico 28) subindo as colinas históricas de Lisboa, com calçada portuguesa e casario antigo ao redor. | Pacote promocional "7 Dias / 6 Noites" com passagem de ida e volta, hotel central, pequeno-almoço e assistência para seguro de viagem. |
| **IMG-07** | **Pacotes — Pacote 2 (Luanda → Dubai)** | `https://lh3.googleusercontent.com/aida-public/AB6AXuCyY0eHjfUxdOl8ALQtnVIH4borHm6KTP8crIvE4tXwLQsTvq-Q9Wto07TtWVzZEd56d5jlV7CBZ48r7dnITRSFXRoXgub3O21_41P5-xes6uKJphaK0nWrA_lePifiAvF7dPwjCEKXI3BtXPFKkgb05UNs8y1bCGa5mIrKRDm4fOPd1MUTiy6FXIRhbrkgBJADneVgvNtvqV-Dx6Z5o4JeV2d2RoNX_utFc3mz8QP9djMSVXm5COQ` | Safari em dunas douradas do deserto dos Emirados Árabes ao pôr do sol, complementado pela vista do centro metropolitano de Dubai. | Pacote "6 Dias / 5 Noites" com voos internacionais, hotel selecionado, transfer do aeroporto e apoio consular de visto eletrónico. |
| **IMG-08** | **Pacotes — Pacote 3 (Luanda → Cape Town)** | `https://lh3.googleusercontent.com/aida-public/AB6AXuC6XM5EhO80HfALnNQxBAu0TIMcLxg5MqN-2IiPxNoI_X0e06dPnkvDfyOlag6i0hyQCio5_KObs0fhfMSquInT-k7TDcazv_9NyjCkci8DbFg9o80Yhb4DYoqiSIL6Q8mW_l7jjX21JzLTLcWOFWyBLjS6FRRN7r0esnGhsCOHSlxAKECNuMfnWAj0TPn0I5WNOeBBD922M5x2Klz0WD6-Nmj1_G_LF76PsBbgb2BAldhVdgUwTZ8` | Orla de Camps Bay / Cidade do Cabo com praias de areia branca, ondas azuis do Atlântico e a cordilheira dos Doze Apóstolos. | Pacote "5 Dias / 4 Noites" com voos diretos rápidos, estadia em zona nobre, assistência médica internacional e opções de passeio. |

---

## 3. Estrutura e Sequência das Secções da Página

### 1. Barra Superior e Cabeçalho Fixo (`<header>`)
- **Micro-barra Superior:**
  - Localização: Luanda, Angola.
  - Telefone: `+244 923 000 000`.
  - Horário: Segunda a Sábado.
  - Indicador dinâmico: `APOIO AO VIAJANTE 24/7` com pulso de luz âmbar.
- **Barra de Navegação Principal:**
  - Logótipo com ícone `travel_explore`.
  - Título institucional: `DEMONSTRAÇÃO — AGÊNCIA DE VIAGENS ANGOLA`.
  - Subtítulo: `Consultoria & Mobilidade Internacional`.
  - Links de navegação: Início, Destinos, Serviços, Pacotes, Sobre nós, Contactos.
  - Botão de Ação: `Falar no WhatsApp` (abre contacto direto) e botão de utilizador (abre formulário).

### 2. Secção Hero (`<section id="inicio">`)
- **Fundo Cinematográfico:** Imagem do aeroporto ao entardecer (IMG-01) com duplo gradiente escuro (`#0b1e3d`).
- **Tag Superior:** "Demonstração — Agência de Viagens Angola".
- **Título Display:** *"Viaje com confiança. Nós cuidamos do resto."*
- **Chamadas de Ação:** Botão "Planejar minha viagem" (desce suavemente até ao formulário) e "Falar no WhatsApp".
- **Marcadores de Confiança:** Atendimento personalizado, Luanda (Angola) e emissão autorizada em Kwanzas.

### 3. Módulo de Pesquisa & Solicitação (`<section id="solicitar">`)
- **Composição Visual:** Cartão branco elevado com sombra profunda, sobreposto 56px a 80px sobre a secção Hero.
- **Campos Interativos:**
  1. **Origem:** Fixado por defeito em *"Luanda - 4 de Fevereiro / Angola (LAD)"*.
  2. **Destino:** Campo de texto livre com placeholder inteligente (Lisboa, Dubai, São Paulo...).
  3. **Data de Ida:** Seletor de data de partida.
  4. **Data de Volta:** Seletor opcional para viagens de ida e volta.
  5. **Passageiros:** Dropdown com opções para 1 Adulto, 2 Adultos, Família (3+) ou Grupo Corporativo.
  6. **Ação:** Botão *"Solicitar viagem"* que abre o modal detalhado de formalização.
  7. **Garantia:** Tag de emissão em moeda nacional (AOA) e divisas internacionais.

### 4. Destinos em Destaque (`<section id="destinos">`)
- **Cabeçalho:** "Rotas Mais Procuradas de Luanda — Para onde você quer ir?".
- **Grelha de 4 Destinos:**
  1. Portugal (Lisboa & Porto) — Badge: *Visto CPLP & Férias* — Tag: *Saídas Regulares*.
  2. Dubai (Emirados Árabes Unidos) — Badge: *Compras & Negócios* — Tag: *Voos Emirates*.
  3. Brasil (São Paulo & Rio de Janeiro) — Badge: *Turismo & Saúde* — Tag: *Voo Direto*.
  4. África do Sul (Cidade do Cabo & Joburg) — Badge: *Lazer & Estudo* — Tag: *3h30 de Voo*.

### 5. Serviços Especializados (`<section id="servicos">`)
- **Fundo:** Tom suave `#eff4ff` com separadores elegantes.
- **6 Cartões Interativos:**
  1. **Passagens aéreas:** Pesquisa das melhores conexões em companhias internacionais a partir de Luanda.
  2. **Vistos e documentação:** Orientação prévia, checklists consulares e agendamentos.
  3. **Pacotes turísticos:** Férias familiares e individuais estruturadas chave-na-mão.
  4. **Reservas de hotéis:** Unidades hoteleiras 4 e 5 estrelas com pequeno-almoço e cancelamento seguro.
  5. **Seguro de viagem:** Cobertura médica internacional obrigatória para Schengen e outros destinos.
  6. **Consultoria de viagem:** Apoio contínuo e personalização de itinerários complexos.

### 6. Pacotes Demonstrativos (`<section id="pacotes">`)
- **Grelha de 3 Pacotes:**
  1. **LUANDA → LISBOA:** 7 Dias / 6 Noites | Voos, hotel central e apoio de visto.
  2. **LUANDA → DUBAI:** 6 Dias / 5 Noites | Voos Emirates, transfer e visto eletrónico.
  3. **LUANDA → CAPE TOWN:** 5 Dias / 4 Noites | Voo curto, hotel no Waterfront e passeios.
- Cada cartão inclui botão de cotação direta que pré-carrega o formulário.

### 7. Como Funciona — 3 Passos Simplificados
- **Passo 01:** *Escolha o seu destino* — Indicação de datas, objetivos e preferências.
- **Passo 02:** *Fale com a nossa equipa* — Análise de rotas, requisitos de vistos e orçamento sob medida.
- **Passo 03:** *Nós cuidamos dos detalhes* — Receção de bilhetes emitidos, vouchers e documentação pronta.

### 8. Rigor & Estrutura de Apoio
- **Coluna Esquerda:** Compromissos de atendimento personalizado, acompanhamento contínuo e soluções integradas.
- **Coluna Direita (Cartão Escuro `#0b1e3d`):** Estrutura de apoio com 4 quadrantes (Emissões Ágeis, Apoio Consular, Rede Hoteleira e Suporte Direto ao Passageiro).

### 9. Testemunhos de Clientes
- 3 Avaliações de clientes de Luanda (Manuel B., Teresa K. e João N.) com classificação de 5 estrelas e selo demonstrativo.

### 10. Bloco Final de Conversão (`<section id="contactos">`) & Rodapé
- Caixa com gradientes radiais em tom azul escuro e botões para WhatsApp e cotação.
- Rodapé completo de 4 colunas com morada na Avenida 4 de Fevereiro (Marginal de Luanda), canais de atendimento e links institucionais.

---

## 4. Sistema de Cores e Tokens Visuais

```css
/* Tons Principais */
--primary-container: #0b1e3d;       /* Azul marinho profundo institucional */
--primary: #000516;                 /* Preto profundo para textos de alto contraste */
--secondary: #904d00;               /* Castanho bronze nobre para botões e detalhes */
--secondary-container: #fe932c;     /* Laranja âmbar vibrante para alertas e pulsos */
--secondary-fixed: #ffdcc3;         /* Ouro suave para títulos sobre fundo escuro */
--secondary-fixed-dim: #ffb77d;     /* Ouro médio para destaques de ícones */

/* Superfícies & Fundos */
--background: #f8f9ff;              /* Fundo geral limpo e luminoso */
--surface-container-low: #eff4ff;   /* Fundo alternado de secções */
--surface-container: #e5eeff;       /* Bordas e linhas de separação subtis */
--surface-container-lowest: #ffffff;/* Fundo branco de cartões e modais */

/* Tipografia */
Display & Headings: 'Newsreader', Georgia, serif (Pesos: 400, 500, 600)
Corpo de Texto & UI: 'Plus Jakarta Sans', sans-serif (Pesos: 400, 500, 600, 700)
Ícones: 'Material Symbols Outlined'
```

---

## 5. Lógica de Interação & Conexões Externas

1. **WhatsApp Contacto Direto:**
   - Link: `https://wa.me/244923000000?text=<MENSAGEM_URL_ENCODED>`
   - O sistema pré-formata os dados do passageiro (Origem, Destino, Datas, Classe e Apoio Consular) ao enviar.
2. **Sistema de Solicitação de Cotação:**
   - Gera um código de rastreio no formato `AO-2026-XXXX`.
   - Permite envio direto do resumo da cotação para o operador comercial.
3. **Modais de Apoio ao Utilizador:**
   - Modal de Destinos (informações consulares e companhias aéreas).
   - Modal de Serviços (lista de inclusões e checklist de documentos).
   - Modal de Pacotes (itinerário detalhado e experiências).
   - Modais Legais (Termos de Uso e Política de Privacidade).
