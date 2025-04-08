import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from('usuarios_autorizados')
        .select()
        .eq('email', session.user.email);

      setAllowed(data.length > 0);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (!allowed) return <Navigate to="/" />;
  return children;
}
