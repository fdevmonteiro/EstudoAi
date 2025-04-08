import React from 'react';
import { 
  Calendar, 
  MessageSquare, 
  Clock, 
  BarChart, 
  Bell, 
  Share2 
} from 'lucide-react';

const featureList = [
  {
    icon: <Calendar className="w-8 h-8 text-purple-500" />,
    title: "Rotinas Personalizadas",
    description: "Crie planos de estudo adaptados ao seu tempo disponível e objetivos de aprendizado.",
    bgColor: "bg-pastel-yellow",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
    title: "Assistente com ChatGPT",
    description: "Obtenha ajuda e esclarecimentos instantâneos com nossa integração com ChatGPT.",
    bgColor: "bg-pastel-pink",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "Pomodoro Inteligente",
    description: "Técnica de estudo pomodoro integrada e personalizada para sua rotina.",
    bgColor: "bg-pastel-blue",
  },
  {
    icon: <BarChart className="w-8 h-8 text-green-500" />,
    title: "Análise de Desempenho",
    description: "Acompanhe seu progresso e descubra seus padrões de produtividade.",
    bgColor: "bg-pastel-green",
  },
  {
    icon: <Bell className="w-8 h-8 text-orange-500" />,
    title: "Lembretes Inteligentes",
    description: "Receba notificações adaptadas ao seu calendário e rotina de estudos.",
    bgColor: "bg-pastel-orange",
  },
  {
    icon: <Share2 className="w-8 h-8 text-purple-500" />,
    title: "Compartilhe Rotinas",
    description: "Crie grupos de estudo e compartilhe suas rotinas com amigos.",
    bgColor: "bg-pastel-purple",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-pastel-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos que transformam seu <span className="gradient-text">aprendizado</span>
          </h2>
          <p className="text-lg text-gray-600">
            Nossa plataforma combina tecnologia avançada em IA com métodos comprovados de estudo para maximizar sua produtividade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div 
              key={index} 
              className={`pastel-card ${feature.bgColor} p-8`}
            >
              <div className="mb-4 bg-white rounded-2xl w-16 h-16 flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
