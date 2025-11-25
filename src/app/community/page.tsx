"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Calendar, Clock, Users, Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Maria Santos',
      avatar: '👩',
      time: '2 horas atrás',
      content: 'Acabei de completar minha primeira semana no FitLife Pro! Perdi 2kg e estou me sentindo incrível! 💪',
      likes: 24,
      comments: 8,
      image: null,
    },
    {
      id: 2,
      author: 'Carlos Oliveira',
      avatar: '👨',
      time: '5 horas atrás',
      content: 'Dica para quem usa Ozempic: mantenham-se hidratados e façam exercícios leves. Faz toda diferença!',
      likes: 45,
      comments: 12,
      image: null,
    },
    {
      id: 3,
      author: 'Ana Paula',
      avatar: '👩‍🦰',
      time: '1 dia atrás',
      content: 'Quem mais está animado para a aula de HIIT ao vivo amanhã? Vamos juntos! 🔥',
      likes: 67,
      comments: 23,
      image: null,
    },
  ]);

  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: 'Desafio 30 Dias',
      description: '30 dias de atividades consecutivas',
      participants: 234,
      daysLeft: 12,
      progress: 60,
    },
    {
      id: 2,
      title: 'Queime 10.000 Calorias',
      description: 'Meta coletiva da comunidade',
      participants: 567,
      daysLeft: 20,
      progress: 75,
    },
  ]);

  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: 'Pedro Silva', points: 2450, badge: '🥇' },
    { rank: 2, name: 'Julia Costa', points: 2380, badge: '🥈' },
    { rank: 3, name: 'Roberto Lima', points: 2210, badge: '🥉' },
    { rank: 4, name: 'Fernanda Souza', points: 2100, badge: '⭐' },
    { rank: 5, name: 'Você', points: 1950, badge: '⭐' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Comunidade FitLife</h1>
          <p className="text-gray-600">Conecte-se, compartilhe e inspire-se com outros membros</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                  👤
                </div>
                <input
                  type="text"
                  placeholder="Compartilhe sua jornada..."
                  className="flex-1 bg-gray-100 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <button className="text-gray-600 hover:text-green-600 transition">
                  📷 Foto
                </button>
                <button className="text-gray-600 hover:text-green-600 transition">
                  🎯 Meta
                </button>
                <button className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
                  Publicar
                </button>
              </div>
            </div>

            {/* Posts Feed */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{post.author}</h3>
                        <p className="text-sm text-gray-500">{post.time}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{post.content}</p>
                    
                    <div className="flex items-center space-x-6 pt-4 border-t">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition">
                        <Share2 className="w-5 h-5" />
                        <span>Compartilhar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Challenges */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Desafios Ativos</h2>
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{challenge.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">
                        <Users className="w-4 h-4 inline mr-1" />
                        {challenge.participants} participantes
                      </span>
                      <span className="text-orange-600 font-semibold">
                        {challenge.daysLeft} dias restantes
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-orange-500 h-2 rounded-full"
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                <button className="w-full bg-gradient-to-r from-green-500 to-orange-500 text-white py-3 rounded-lg hover:shadow-lg transition">
                  Ver Todos os Desafios
                </button>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Ranking Semanal
              </h2>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div 
                    key={user.rank} 
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      user.name === 'Você' ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{user.badge}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.points} pontos</p>
                      </div>
                    </div>
                    <span className="text-gray-500 font-semibold">#{user.rank}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gradient-to-br from-green-500 to-orange-500 rounded-xl shadow-md p-6 text-white">
              <h2 className="text-xl font-bold mb-4">Próximos Eventos</h2>
              <div className="space-y-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">Amanhã, 18:00</span>
                  </div>
                  <p className="font-semibold">Aula de HIIT ao Vivo</p>
                  <p className="text-sm opacity-90">Com instrutor Carlos</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">Sexta, 19:00</span>
                  </div>
                  <p className="font-semibold">Workshop Nutrição</p>
                  <p className="text-sm opacity-90">Dicas para Ozempic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
