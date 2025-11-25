"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Qual é o seu objetivo principal?',
    options: ['Perder peso', 'Ganhar massa muscular', 'Melhorar condicionamento físico', 'Manter saúde geral']
  },
  {
    id: 2,
    question: 'Qual é o seu nível de atividade física atual?',
    options: ['Sedentário', 'Levemente ativo', 'Moderadamente ativo', 'Muito ativo']
  },
  {
    id: 3,
    question: 'Você usa medicações como Ozempic ou Mounjaro?',
    options: ['Sim, uso regularmente', 'Sim, mas recentemente', 'Não, nunca usei', 'Não, mas estou considerando']
  },
  {
    id: 4,
    question: 'Quantas refeições você faz por dia?',
    options: ['1-2', '3', '4-5', 'Mais de 5']
  },
  {
    id: 5,
    question: 'Quanto tempo você dedica a exercícios por semana?',
    options: ['Nenhum', '1-2 horas', '3-5 horas', 'Mais de 5 horas']
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedAnswers = localStorage.getItem('quizAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    localStorage.setItem('quizAnswers', JSON.stringify(newAnswers));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleComplete = () => {
    router.push('/payment');
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-orange-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Concluído!</h2>
          <p className="text-gray-600 mb-6">
            Baseado nas suas respostas, recomendamos nosso Plano Premium personalizado para alcançar seus objetivos de fitness.
          </p>
          <button
            onClick={handleComplete}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full"
          >
            Ver Plano Premium
          </button>
          <Link href="/" className="block mt-4 text-green-600 hover:text-green-800">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-orange-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Quiz de Fitness</h1>
            <span className="text-sm text-gray-500">
              {currentQuestion + 1} de {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 border border-gray-300 rounded-lg hover:bg-green-50 hover:border-green-300 transition duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <Link href="/" className="block text-center text-green-600 hover:text-green-800">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
