import React from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Estudante de Medicina",
    content: "O StudyFlow revolucionou minha preparação para as provas de residência. A rotina personalizada e o assistente com ChatGPT me ajudaram a organizar meu tempo de forma eficiente.",
    rating: 5,
    bgColor: "bg-pastel-pink",
  },
  {
    name: "João Oliveira",
    role: "Vestibulando",
    content: "Consegui organizar meus estudos para o vestibular de forma incrível! O sistema de pomodoro inteligente me ajudou a manter o foco e aumentar minha produtividade.",
    rating: 5,
    bgColor: "bg-pastel-blue",
  },
  {
    name: "Ana Costa",
    role: "Professora",
    content: "Recomendo para todos os meus alunos! A plataforma oferece recursos excepcionais para organização e o ChatGPT integrado tira dúvidas instantaneamente.",
    rating: 4,
    bgColor: "bg-pastel-green",
  },
  {
    name: "Pedro Santos",
    role: "Concurseiro",
    content: "Estou me preparando para concursos há anos e nunca encontrei uma ferramenta tão completa. O acompanhamento de desempenho me mostrou onde precisava melhorar.",
    rating: 5,
    bgColor: "bg-pastel-yellow",
  },
  {
    name: "Camila Ferreira",
    role: "Estudante de Engenharia",
    content: "As rotinas personalizadas se adaptam perfeitamente à minha agenda complicada da faculdade. Consigo estudar de forma mais eficiente e ter tempo para outras atividades.",
    rating: 5,
    bgColor: "bg-pastel-purple",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-pastel-pink/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="gradient-text">usuários</span> dizem
          </h2>
          <p className="text-lg text-gray-600">
            Milhares de estudantes já transformaram sua rotina de estudos com nossa plataforma.
          </p>
        </div>
        
        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className={`h-full pastel-card ${testimonial.bgColor} p-6 flex flex-col`}>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 flex-1">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
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
    </section>
  );
};

export default Testimonials;
