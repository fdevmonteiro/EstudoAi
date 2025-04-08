import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

export default function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setEmail(session.user.email);
      }
      setLoading(false);
    };

    getUserInfo();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center text-xl">
        <span className="animate-pulse">🔄 Carregando Dashboard...</span>
      </div>
    );
  }

  return (
    <div className="p-8 text-green-700 text-xl">
      <h1 className="text-2xl mb-4">✅ Acesso liberado!</h1>
      <p className="mb-4">Bem-vindo(a), <strong>{email}</strong>!</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Sair
      </button>
    </div>
  );
}
