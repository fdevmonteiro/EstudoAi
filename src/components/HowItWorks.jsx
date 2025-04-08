import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  User,
  Calendar,
  BookOpen,
  MessageSquare,
  CheckCircle
} from 'lucide-react';
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const steps = [
  {
    icon: <User className="w-12 h-12 text-purple-500" />,
    title: "Crie sua conta",
    description: "Registre-se gratuitamente e configure seu perfil de estudante para uma experiência personalizada.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    bgColor: "bg-pastel-purple",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-pink-500" />,
    title: "Adicione seus objetivos",
    description: "Informe suas metas de estudo, matérias e tempo disponível para dedicar aos estudos.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    bgColor: "bg-pastel-pink",
  },
  {
    icon: <Calendar className="w-12 h-12 text-blue-500" />,
    title: "Receba sua rotina",
    description: "A IA criará um plano de estudos personalizado baseado nas suas necessidades e objetivos.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    bgColor: "bg-pastel-blue",
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-green-500" />,
    title: "Interaja com o assistente",
    description: "Use o ChatGPT integrado para esclarecer dúvidas e aprofundar seu aprendizado em qualquer assunto.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    bgColor: "bg-pastel-green",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
    title: "Acompanhe seu progresso",
    description: "Visualize estatísticas detalhadas sobre seu desempenho e adapte sua rotina conforme necessário.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    bgColor: "bg-pastel-orange",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-pastel-blue/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona o <span className="gradient-text">StudyFlow</span>
          </h2>
          <p className="text-lg text-gray-600">
            Em apenas alguns passos, você terá uma rotina de estudos personalizada e otimizada para seus objetivos.
          </p>
        </div>
        
        <div className="mt-12">
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className={`h-full p-1`}>
                    <div className={`h-full pastel-card ${step.bgColor} p-6 flex flex-col`}>
                      <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-sm mb-4">
                        {step.icon}
                      </div>
                      <div className="rounded-lg overflow-hidden mb-4 aspect-video">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                              {index + 1}
                            </div>
                            <h3 className="font-semibold">{step.title}</h3>
                          </div>
                          <p className="text-gray-700 text-sm">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <Button className="pastel-button bg-pastel-purple text-purple-700 hover:bg-purple-100 px-8 py-6 text-lg">
            Começar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
