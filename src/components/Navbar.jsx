import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-xl font-bold gradient-text">StudyFlow</h1>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Recursos</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">Como Funciona</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Depoimentos</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Preços</a>
          <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">Dashboard</Link>
        </div>
        <div className="flex space-x-3">
          <Link to="/login">
            <button className="pastel-button bg-pastel-purple text-purple-700 hover:bg-purple-100 px-4 py-2 rounded-md">Entrar</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;