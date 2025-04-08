import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Cronogramas() {
  const [cronogramas, setCronogramas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const fetchCronogramas = async () => {
    const { data, error } = await supabase.from('cronogramas').select('*').order('data_criacao', { ascending: false });
    if (error) console.error(error);
    else setCronogramas(data);
  };

  const criarCronograma = async (e) => {
    e.preventDefault();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from('cronogramas').insert({
      titulo,
      descricao,
      user_id: user.id,
    });

    if (error) alert(error.message);
    else {
      setTitulo('');
      setDescricao('');
      fetchCronogramas();
    }
  };

  useEffect(() => {
    fetchCronogramas();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Seus Cronogramas</h2>

      <form onSubmit={criarCronograma} className="space-y-3">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Criar Cronograma
        </button>
      </form>

      <div className="space-y-4">
        {cronogramas.map((c) => (
          <div key={c.id} className="border rounded p-4 shadow-sm">
            <h3 className="text-lg font-semibold">{c.titulo}</h3>
            <p>{c.descricao}</p>
            <p className="text-sm text-gray-500">Criado em: {new Date(c.data_criacao).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
