import React from 'react';
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-pastel-purple to-pastel-pink relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme seus estudos hoje mesmo
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Junte-se a milhares de estudantes que já estão aproveitando o poder da inteligência artificial para otimizar seus estudos e alcançar seus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="pastel-button bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg">
              Começar Gratuitamente
            </Button>
            <Button variant="outline" className="pastel-button border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Agendar Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
