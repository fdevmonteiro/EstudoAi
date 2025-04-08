import React from 'react';
import { Button } from "./ui/button";
import { Check } from 'lucide-react';

const plans = [
 
  {
    name: "Acesso padrão",
    price: "R$29",
    period: "Pagamento único",
    description: "Recursos avançados para maximizar seu estudo",
    features: [
      "Rotinas personalizadas ilimitadas",
      "Pomodoro inteligente adaptável",
      "Perguntas ilimitadas ao ChatGPT",
      "Análise avançada de desempenho",
      "Lembretes inteligentes",
      "Acesso a todos os modelos",
      "Suporte prioritário",
    ],
    bgColor: "bg-pastel-purple",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    highlighted: true,
  },
  
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-pastel-pink/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
           Como fazemos a<span className="gradient-text"> mágica</span>?
          </h2>
          <p className="text-lg text-gray-600">
           Possuímos um plano de acesso único que te da acesso livre a plataforma e criação de plano de estudos
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
                 StudyFlow
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
        
        
      </div>
    </section>
  );
};

export default Pricing;
