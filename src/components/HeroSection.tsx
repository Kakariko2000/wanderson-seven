import React from 'react';
import GradientText from './GradientText';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
        <GradientText>Wanderson Seven</GradientText>
        <br />
        <GradientText className="text-3xl md:text-5xl">Fotógrafo Esportivo</GradientText>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
        Retratando a cidade através da luz, do movimento e das pessoas.
      </p>
      <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
        Fotógrafo esportivo especializado em registrar a intensidade dos treinos, jogos e competições. Experiência em coberturas oficiais de campeonatos, liderança de equipes e produção de conteúdo para atletas e academias. Meu olhar busca eternizar momentos de superação, emoção e conquista no esporte.
      </p>
    </section>
  );
};

export default HeroSection;