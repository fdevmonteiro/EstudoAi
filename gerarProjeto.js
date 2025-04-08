const fs = require("fs");
const path = require("path");

const arquivos = {
  "package.json": `{
  "name": "meu-site-login",
  "private": true,
  "dependencies": {
    "@supabase/supabase-js": "^2.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "5.0.1",
    "tailwindcss": "^3.0.0"
  },
  "scripts": {
    "start": "react-scripts start"
  }
}`,
  "tailwind.config.js": `module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};`,
  "postcss.config.js": `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`,
  ".gitignore": `node_modules
build
.env`
};

const arquivosSrc = {
  "index.js": `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
  "App.js": `import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [session, setSession] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) checkAuthorization(session.user.email);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) checkAuthorization(session.user.email);
    });
  }, []);

  async function checkAuthorization(email) {
    const { data } = await supabase.from('usuarios_autorizados').select().eq('email', email);
    setAuthorized(data.length > 0);
  }

  if (!session) return <Login />;
  if (!authorized) return <div className="p-8 text-red-600 text-lg">Acesso negado.</div>;
  return <Dashboard />;
}

export default App;`,
  "Login.js": `import React, { useState } from 'react';
import { supabase } from './supabaseClient';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setError(error?.message || null);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow w-80">
        <h2 className="text-xl mb-4">Login</h2>
        <input className="border p-2 w-full mb-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input className="border p-2 w-full mb-2" type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
        <button className="bg-blue-500 text-white px-4 py-2 w-full rounded">Entrar</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}

export default Login;`,
  "Dashboard.js": `import React from 'react';
export default function Dashboard() {
  return <div className="p-8 text-green-700 text-2xl">✅ Acesso liberado! Bem-vindo(a)!</div>;
}`,
  "supabaseClient.js": `import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);`,
  "index.css": `@tailwind base;
@tailwind components;
@tailwind utilities;`
};

Object.entries(arquivos).forEach(([nome, conteudo]) => {
  fs.writeFileSync(path.join(__dirname, nome), conteudo);
});

if (!fs.existsSync('src')) fs.mkdirSync('src');

Object.entries(arquivosSrc).forEach(([nome, conteudo]) => {
  fs.writeFileSync(path.join('src', nome), conteudo);
});

console.log("✅ Projeto montado com sucesso!");
