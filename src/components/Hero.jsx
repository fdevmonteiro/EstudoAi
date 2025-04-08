import React from 'react';
import { Button } from "./ui/button";
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

const handleEntrarClick = () => {
  navigate("/login");
}


  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-pastel-blue/30 to-white py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pastel-pink rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-pastel-yellow rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-pastel-green rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 space-y-6 text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Crie rotinas de estudo perfeitas com <span className="gradient-text">IA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
            Organize seus estudos de forma eficiente com ajuda da inteligência artificial. Planos personalizados, lembretes e assistência integrada com ChatGPT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button onClick={handleEntrarClick} className="pastel-button bg-pastel-purple text-purple-700 hover:bg-purple-100 px-8 py-6 text-lg">Entrar</Button>
            <Button variant="outline" className="pastel-button border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg">Adquirir acesso</Button>
          </div>
          <p className="text-sm text-gray-500">Não é necessário cartão de crédito</p>
        </div>
        
        <div className="flex-1 animate-bounce-slow">
          <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Estudante usando a plataforma StudyFlow" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-purple-600">10k+</h3>
            <p className="text-gray-600">Estudantes</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-purple-600">98%</h3>
            <p className="text-gray-600">Aprovação</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-purple-600">50k+</h3>
            <p className="text-gray-600">Rotinas criadas</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-purple-600">4.9/5</h3>
            <p className="text-gray-600">Avaliação média</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
