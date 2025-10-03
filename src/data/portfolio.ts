export interface Photo {
  id: string;
  src: string;
  alt: string;
  location: string;
  equipment: string;
  settings: string; // e.g., "1/1000s, ISO 400, f/2.8"
}

export const portfolioPhotos: Photo[] = [
  {
    id: "1",
    src: "/placeholder.svg", // Substitua por suas fotos reais
    alt: "Atleta correndo em pista",
    location: "Estádio Municipal",
    equipment: "Canon EOS R5",
    settings: "1/1000s, ISO 400, f/2.8",
  },
  {
    id: "2",
    src: "/placeholder.svg",
    alt: "Jogador de futebol em ação",
    location: "Campo de Futebol",
    equipment: "Sony Alpha A7 III",
    settings: "1/800s, ISO 800, f/4.0",
  },
  {
    id: "3",
    src: "/placeholder.svg",
    alt: "Ciclista em alta velocidade",
    location: "Estrada da Serra",
    equipment: "Nikon Z7 II",
    settings: "1/1250s, ISO 200, f/2.0",
  },
  {
    id: "4",
    src: "/placeholder.svg",
    alt: "Basquete em quadra",
    location: "Ginásio Poliesportivo",
    equipment: "Canon EOS 1D X Mark III",
    settings: "1/640s, ISO 1600, f/2.8",
  },
  {
    id: "5",
    src: "/placeholder.svg",
    alt: "Natação em piscina olímpica",
    location: "Clube Aquático",
    equipment: "Sony Alpha A9 II",
    settings: "1/500s, ISO 1000, f/3.5",
  },
  {
    id: "6",
    src: "/placeholder.svg",
    alt: "Corrida de rua ao amanhecer",
    location: "Orla da Praia",
    equipment: "Fujifilm X-T4",
    settings: "1/750s, ISO 320, f/1.8",
  },
];