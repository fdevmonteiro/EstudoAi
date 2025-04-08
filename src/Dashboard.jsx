import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Label } from '../src/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../src/components/ui/accordion';
import { Checkbox } from '../src/components/ui/checkbox';
import { Check, ChevronRight, Clock, Edit, Plus, Save, TrashIcon } from 'lucide-react';
//import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';

const Dashboard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [studyGoal, setStudyGoal] = useState('');
  const [studySubjects, setStudySubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [studyDays, setStudyDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const [studySchedule, setStudySchedule] = useState([]);
  
  const handleAddSubject = () => {
    if (newSubject.trim() !== '') {
      setStudySubjects([...studySubjects, { name: newSubject.trim(), priority: 'medium' }]);
      setNewSubject('');
    }
  };
  
  const handleRemoveSubject = (index) => {
    const updatedSubjects = [...studySubjects];
    updatedSubjects.splice(index, 1);
    setStudySubjects(updatedSubjects);
  };
  
  const handleChangePriority = (index, priority) => {
    const updatedSubjects = [...studySubjects];
    updatedSubjects[index].priority = priority;
    setStudySubjects(updatedSubjects);
  };
  
  const handleToggleDay = (day) => {
    setStudyDays({
      ...studyDays,
      [day]: !studyDays[day],
    });
  };
  
  const generateSchedule = () => {
    const selectedDays = Object.keys(studyDays).filter(day => studyDays[day]);
    let newSchedule = [];
    
    selectedDays.forEach(day => {
      // Distribute subjects based on priority
      const highPrioritySubjects = studySubjects.filter(subject => subject.priority === 'high');
      const mediumPrioritySubjects = studySubjects.filter(subject => subject.priority === 'medium');
      const lowPrioritySubjects = studySubjects.filter(subject => subject.priority === 'low');
      
      // Create time blocks based on subjects
      let daySchedule = {
        day: day,
        blocks: []
      };
      
      // Add high priority subjects (longer blocks)
      highPrioritySubjects.forEach(subject => {
        daySchedule.blocks.push({
          subject: subject.name,
          duration: '1.5 hours',
          priority: 'high'
        });
      });
      
      // Add medium priority subjects
      mediumPrioritySubjects.forEach(subject => {
        daySchedule.blocks.push({
          subject: subject.name,
          duration: '1 hour',
          priority: 'medium'
        });
      });
      
      // Add low priority subjects (shorter blocks)
      lowPrioritySubjects.forEach(subject => {
        daySchedule.blocks.push({
          subject: subject.name,
          duration: '30 minutes',
          priority: 'low'
        });
      });
      
      newSchedule.push(daySchedule);
    });
    
    setStudySchedule(newSchedule);
    setCurrentStep(4);
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Painel de Estudos</h1>
        <div className="mb-8">
          <p className="text-lg text-gray-700">
            Bem-vindo ao seu painel de estudos personalizado! Aqui você pode criar uma rotina de estudos 
            eficiente e adaptada às suas necessidades. Siga os passos abaixo para começar a 
            organizar seu tempo e maximizar seu aprendizado.
          </p>
        </div>
        
        {/* Step 1 - Study Goals */}
        <Card className={`mb-6 border-pastel-purple ${currentStep === 1 ? 'ring-2 ring-purple-300' : ''}`}>
          <CardHeader className="bg-pastel-purple/20 rounded-t-lg">
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center mr-3">
                1
              </div>
              Defina seu objetivo de estudos
            </CardTitle>
            <CardDescription>
              Estabeleça claramente o que você deseja alcançar com seus estudos
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="studyGoal">Qual é o seu objetivo principal?</Label>
                <Input 
                  id="studyGoal" 
                  placeholder="Ex: Passar no vestibular, aprender programação, etc." 
                  value={studyGoal}
                  onChange={(e) => setStudyGoal(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end border-t pt-4">
            <Button 
              onClick={() => setCurrentStep(2)}
              disabled={!studyGoal.trim()}
              className="bg-purple-500 hover:bg-purple-600 text-white"
            >
              Próximo <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        {/* Step 2 - Study Subjects */}
        <Card className={`mb-6 ${currentStep === 2 ? 'ring-2 ring-purple-300' : ''}`}>
          <CardHeader className="bg-pastel-blue/20 rounded-t-lg">
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">
                2
              </div>
              Adicione suas matérias
            </CardTitle>
            <CardDescription>
              Liste todas as matérias ou tópicos que você precisa estudar
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Nova matéria ou tópico" 
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSubject()}
                />
                <Button 
                  onClick={handleAddSubject}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-4">
                {studySubjects.length > 0 ? (
                  <div className="space-y-2">
                    {studySubjects.map((subject, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <span className="font-medium">{subject.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Label htmlFor={`priority-${index}`} className="text-sm">Prioridade:</Label>
                            <select
                              id={`priority-${index}`}
                              value={subject.priority}
                              onChange={(e) => handleChangePriority(index, e.target.value)}
                              className="text-sm border rounded px-2 py-1"
                            >
                              <option value="high">Alta</option>
                              <option value="medium">Média</option>
                              <option value="low">Baixa</option>
                            </select>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleRemoveSubject(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    Adicione matérias para continuar
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(1)}
            >
              Voltar
            </Button>
            <Button 
              onClick={() => setCurrentStep(3)}
              disabled={studySubjects.length === 0}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Próximo <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        {/* Step 3 - Study Days */}
        <Card className={`mb-6 ${currentStep === 3 ? 'ring-2 ring-purple-300' : ''}`}>
          <CardHeader className="bg-pastel-green/20 rounded-t-lg">
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-3">
                3
              </div>
              Escolha seus dias de estudo
            </CardTitle>
            <CardDescription>
              Selecione os dias da semana que você pretende dedicar aos estudos
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(studyDays).map(([day, isSelected]) => {
                const dayNames = {
                  monday: 'Segunda-feira',
                  tuesday: 'Terça-feira',
                  wednesday: 'Quarta-feira',
                  thursday: 'Quinta-feira',
                  friday: 'Sexta-feira',
                  saturday: 'Sábado',
                  sunday: 'Domingo'
                };
                
                return (
                  <div 
                    key={day} 
                    className={`p-4 border rounded-md cursor-pointer transition-all ${
                      isSelected ? 'bg-pastel-green border-green-400' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleToggleDay(day)}
                  >
                    <div className="flex items-center">
                      <Checkbox 
                        id={`day-${day}`} 
                        checked={isSelected}
                        onCheckedChange={() => handleToggleDay(day)}
                        className="mr-2"
                      />
                      <Label htmlFor={`day-${day}`}>{dayNames[day]}</Label>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(2)}
            >
              Voltar
            </Button>
            <Button 
              onClick={generateSchedule}
              disabled={!Object.values(studyDays).some(Boolean)}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Gerar Cronograma <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        {/* Step 4 - Generated Schedule */}
        {currentStep === 4 && (
          <Card className="mb-6 ring-2 ring-purple-300">
            <CardHeader className="bg-pastel-purple/20 rounded-t-lg">
              <CardTitle className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center mr-3">
                  4
                </div>
                Seu Cronograma de Estudos
              </CardTitle>
              <CardDescription>
                Aqui está seu cronograma personalizado de estudos
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {studySchedule.map((daySchedule, index) => {
                  const dayNames = {
                    monday: 'Segunda-feira',
                    tuesday: 'Terça-feira',
                    wednesday: 'Quarta-feira',
                    thursday: 'Quinta-feira',
                    friday: 'Sexta-feira',
                    saturday: 'Sábado',
                    sunday: 'Domingo'
                  };
                  
                  return (
                    <Accordion type="single" collapsible key={index}>
                      <AccordionItem value={`day-${index}`} className="border rounded-md">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-5 w-5 text-purple-500" />
                            <span className="font-medium">{dayNames[daySchedule.day]}</span>
                            <span className="ml-3 text-sm text-gray-500">
                              ({daySchedule.blocks.length} atividades)
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pt-2 pb-4">
                          <div className="space-y-3">
                            {daySchedule.blocks.map((block, blockIndex) => {
                              const priorityColors = {
                                high: 'bg-red-100 border-red-300 text-red-800',
                                medium: 'bg-yellow-100 border-yellow-300 text-yellow-800',
                                low: 'bg-green-100 border-green-300 text-green-800'
                              };
                              
                              const priorityLabels = {
                                high: 'Alta',
                                medium: 'Média',
                                low: 'Baixa'
                              };
                              
                              return (
                                <div 
                                  key={blockIndex} 
                                  className="p-3 border rounded-md flex items-center justify-between"
                                >
                                  <div>
                                    <div className="font-medium">{block.subject}</div>
                                    <div className="text-sm text-gray-500">Duração: {block.duration}</div>
                                  </div>
                                  <div className={`text-xs px-2 py-1 rounded-full border ${priorityColors[block.priority]}`}>
                                    Prioridade: {priorityLabels[block.priority]}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                })}
                
                <div className="p-4 bg-pastel-blue/20 rounded-md">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Check className="mr-2 h-5 w-5 text-blue-500" />
                    Dicas para aproveitar seu cronograma
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Reserve 5-10 minutos entre cada sessão de estudo</li>
                    <li>Utilize a técnica Pomodoro: 25 minutos de estudo, 5 de descanso</li>
                    <li>Revise seu material regularmente para melhor retenção</li>
                    <li>Adapte o cronograma conforme necessário para seu ritmo</li>
                    <li>Celebre suas conquistas, mesmo as pequenas!</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(3)}
              >
                Voltar
              </Button>
              <Button 
                className="bg-purple-500 hover:bg-purple-600 text-white"
              >
                Salvar Cronograma <Save className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;