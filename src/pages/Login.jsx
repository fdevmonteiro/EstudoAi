import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Loader } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const { data, error } = await supabase
      .from('usuarios_autorizados')
      .select('*')
      .eq('email', email)
      .eq('senha', password)
      .single();
  
    if (error || !data) {
      alert('Credenciais inválidas ou erro: ');
      setIsLoading(false);
      return;
    }
  
   
    navigate('/dashboard');
    setIsLoading(false);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6 bg-gradient-to-r from-pastel-purple to-pastel-pink">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold gradient-text mb-1">Acesse sua conta</h2>
              <p className="text-gray-500 mb-6">
                Entre com seu email e senha para acessar sua área de estudos
              </p>
            </div>
            <div className="px-6 pb-6">
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="pl-10 w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      className="pl-10 w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div 
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">
                      Lembrar de mim
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-purple-600 hover:text-purple-800">
                      Esqueceu a senha?
                    </a>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full flex justify-center items-center h-10 bg-pastel-purple text-purple-700 hover:bg-purple-100 rounded-md transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader className="animate-spin h-5 w-5 mr-2" />
                      Entrando...
                    </>
                  ) : (
                    'Entrar'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
