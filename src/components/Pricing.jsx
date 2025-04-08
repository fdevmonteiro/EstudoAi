import React from 'react';
import { Button } from "./ui/button";
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Gratuito",
    price: "R$0",
    period: "para sempre",
    description: "Perfeito para começar",
    features: [
      "Rotina básica de estudos",
      "Método pomodoro padrão",
      "10 perguntas ao ChatGPT por mês",
      "Lembretes por email",
      "Acesso a modelos básicos",
    ],
    bgColor: "bg-pastel-blue",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "R$29",
    period: "por mês",
    description: "Recursos avançados para maximizar seu estudo",
    features: [
      "Rotinas personalizadas ilimitadas",
      "Pomodoro inteligente adaptável",
      "Perguntas ilimitadas ao ChatGPT",
      "Análise avançada de desempenho",
      "Lembretes inteligentes",
      "Grupos de estudo",
      "Acesso a todos os modelos",
      "Suporte prioritário",
    ],
    bgColor: "bg-pastel-purple",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    highlighted: true,
  },
  {
    name: "Equipe",
    price: "R$99",
    period: "por mês",
    description: "Ideal para professores e grupos",
    features: [
      "Todas as funcionalidades Premium",
      "Até 10 membros por equipe",
      "Painel de administrador",
      "Estatísticas da equipe",
      "Acompanhamento de progresso",
      "API integrada",
      "Suporte 24/7",
    ],
    bgColor: "bg-pastel-green",
    buttonColor: "bg-green-500 hover:bg-green-600",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-pastel-pink/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos para todos os <span className="gradient-text">objetivos</span>
          </h2>
          <p className="text-lg text-gray-600">
            Escolha o plano que melhor se adapta às suas necessidades de estudo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative pastel-card ${plan.bgColor} p-8 flex flex-col ${
                plan.highlighted ? 'md:-mt-8 md:mb-8 ring-4 ring-purple-300 shadow-xl z-10' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-600 text-sm"> {plan.period}</span>
              </div>
              <p className="text-gray-700 mb-6">{plan.description}</p>
              <div className="flex-1 mb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className={`pastel-button w-full text-white ${plan.buttonColor}`}>
                {plan.name === "Gratuito" ? "Começar Grátis" : "Assinar Agora"}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-600">
          <p>Todos os planos incluem 7 dias de garantia de devolução do dinheiro</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
