import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';


const LoginPage =() => {

  console.log("Renderizando login page");

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErro('');
    console.log('tentando logar com: ', email,senha);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: senha.trim()
    });
    

      console.log('Resultado da consulta', data,error);

    if (error) {
      console.error('Erro ao verificar login:', error);
      setErro('Erro ao tentar logar. Tente novamente.');
      return;
    }

    if (error) {
      console.error('Erro ao logar:', error);
      setErro('Credenciais inválidas ou erro na autenticação.');
      return;
    }
    
    console.log('Login autorizado pelo Supabase:', data);
    navigate('/dashboard');
    
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Senha"
        onChange={e => setSenha(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Entrar</button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );

  
}

export default LoginPage;
