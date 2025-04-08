import React from 'react';
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold gradient-text">StudyFlow</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Recursos</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">Como Funciona</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Depoimentos</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Preços</a>
        </div>
        <div>
          <Button className="pastel-button bg-pastel-purple text-purple-700 hover:bg-purple-100">Começar Agora</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
