import React from 'react';
import GradientText from './GradientText';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const phoneNumber = "5513974237675"; // WhatsApp format: country code + DDD + number
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const instagramLink = "https://www.instagram.com/wandseven";

  return (
    <section className="py-16 bg-background text-foreground p-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
        <GradientText>Disponível para Trabalhos e Colaborações</GradientText>
      </h2>
      <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
        Se você busca capturar a essência do movimento e a paixão do esporte, entre em contato. Estou pronto para transformar suas ideias em imagens impactantes.
      </p>

      <div className="flex flex-col items-center space-y-4 mb-10">
        <p className="text-lg text-primary">Telefone: (13) 97423-7675</p>
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-primary hover:underline flex items-center space-x-2"
        >
          <Instagram size={20} />
          <span>@wandseven</span>
        </a>
      </div>

      <Button asChild className="px-8 py-6 text-lg bg-gradient-blue-aqua hover:bg-gradient-to-r hover:from-[#00CFFF]/90 hover:to-[#00FFAA]/90 text-white font-bold rounded-full transition-all duration-300">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Entrar em Contato
        </a>
      </Button>
    </section>
  );
};

export default ContactSection;