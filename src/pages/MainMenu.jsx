import React from "react";
import {
  Calendar,
  BarChart,
  Clock,
  LogOut,
  User,
  PlusCircle,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const menuItems = [
  {
    icon: <Calendar className="w-6 h-6 text-purple-500" />,
    title: "Meus Cronogramas",
    description: "Acesse e gerencie suas rotinas de estudo.",
    route: "/cronogramas",
    bgColor: "bg-pastel-yellow",
  },
  {
    icon: <PlusCircle className="w-6 h-6 text-pink-500" />,
    title: "Nova Meta",
    description: "Crie um novo objetivo para sua rotina.",
    route: "/nova-meta",
    bgColor: "bg-pastel-pink",
  },
  {
    icon: <BarChart className="w-6 h-6 text-green-500" />,
    title: "Progresso",
    description: "Acompanhe seu desempenho ao longo do tempo.",
    route: "/progresso",
    bgColor: "bg-pastel-green",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    title: "Pomodoro",
    description: "Use a técnica Pomodoro para estudar com foco.",
    route: "/pomodoro",
    bgColor: "bg-pastel-blue",
  },
  {
    icon: <User className="w-6 h-6 text-orange-500" />,
    title: "Perfil",
    description: "Gerencie seus dados e preferências.",
    route: "/perfil",
    bgColor: "bg-pastel-orange",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-indigo-500" />,
    title: "Guia de Uso",
    description: "Veja como aproveitar melhor o StudyFlow.",
    route: "/guia",
    bgColor: "bg-pastel-purple",
  },
];

const MainMenu = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-2 text-blue-700">
            🎓 Bem-vindo ao StudyFlow
          </h1>
          <p className="text-gray-600 text-lg">
            O seu ambiente inteligente de estudos personalizados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition hover:shadow-md hover:scale-[1.02] ${item.bgColor}`}
              onClick={() => navigate(item.route)}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-white rounded-xl p-3 shadow">{item.icon}</div>
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}

          <Card
            className="cursor-pointer transition hover:shadow-md hover:scale-[1.02] bg-red-100"
            onClick={handleLogout}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-white rounded-xl p-3 shadow">
                <LogOut className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <CardTitle>Sair</CardTitle>
                <CardDescription>Encerrar sessão e voltar ao login.</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
