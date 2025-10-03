export interface Experience {
  id: string;
  company: string;
  description: string;
  period: string;
}

export const experiences: Experience[] = [
  {
    id: "exp1",
    company: "Esporte em Foco Magazine",
    description: "Fotógrafo principal para eventos esportivos de grande porte, cobrindo campeonatos nacionais de futebol, basquete e atletismo. Responsável pela direção de arte de ensaios fotográficos com atletas renomados.",
    period: "2020 - Presente",
  },
  {
    id: "exp2",
    company: "Agência de Marketing Esportivo 'Impulso'",
    description: "Desenvolvimento de campanhas visuais para marcas esportivas, incluindo fotografia de produtos, retratos de atletas e cobertura de lançamentos de coleções. Colaboração em projetos de branding e conteúdo digital.",
    period: "2018 - 2020",
  },
  {
    id: "exp3",
    company: "Freelancer Esportivo",
    description: "Cobertura fotográfica de eventos locais e regionais, como maratonas, jogos universitários e torneios amadores. Construção de um portfólio diversificado e estabelecimento de contatos na comunidade esportiva.",
    period: "2016 - 2018",
  },
];