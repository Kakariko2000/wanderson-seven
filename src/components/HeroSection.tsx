import React from 'react';
import GradientText from './GradientText';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
        <GradientText>Wanderson Seven</GradientText>
        <br />
        <GradientText>Fotógrafo Esportivo</GradientText>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
        Retratando a cidade através da luz, do movimento e das pessoas.
      </p>
      <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
        Com um olhar apurado para a autenticidade e a energia do esporte, Wanderson Seven captura momentos que transcendem a fotografia, transformando cada clique em uma narrativa visual única. Seu estilo dinâmico e sua paixão por contar histórias através da lente garantem imagens que vibram com a emoção de cada instante.
      </p>
    </section>
  );
};

export default HeroSection;