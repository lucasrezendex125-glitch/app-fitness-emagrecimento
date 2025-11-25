"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, ArrowRight, TrendingUp, Heart, Pill } from 'lucide-react';

export default function Blog() {
  const featuredPost = {
    id: 1,
    title: 'Guia Completo: Exercícios Ideais para Usuários de Ozempic e Mounjaro',
    excerpt: 'Descubra como otimizar seus treinos enquanto utiliza medicações para perda de peso. Dicas práticas e seguras.',
    author: 'Dr. Ricardo Mendes',
    date: '15 de Janeiro, 2024',
    readTime: '8 min',
    category: 'Ozempic & Mounjaro',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop',
  };

  const posts = [
    {
      id: 2,
      title: '10 Exercícios de Baixo Impacto para Iniciantes',
      excerpt: 'Comece sua jornada fitness com segurança e eficácia.',
      author: 'Ana Paula Silva',
      date: '12 de Janeiro, 2024',
      readTime: '5 min',
      category: 'Treino',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Nutrição Inteligente: O Que Comer Antes e Depois do Treino',
      excerpt: 'Maximize seus resultados com a alimentação correta.',
      author: 'Nutricionista Carla Santos',
      date: '10 de Janeiro, 2024',
      readTime: '6 min',
      category: 'Nutrição',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Mounjaro e Exercícios: Como Combinar com Segurança',
      excerpt: 'Entenda a interação entre medicação e atividade física.',
      author: 'Dr. Ricardo Mendes',
      date: '8 de Janeiro, 2024',
      readTime: '7 min',
      category: 'Ozempic & Mounjaro',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Yoga para Perda de Peso: Mitos e Verdades',
      excerpt: 'Descubra como o yoga pode acelerar seus resultados.',
      author: 'Instrutora Marina Costa',
      date: '5 de Janeiro, 2024',
      readTime: '5 min',
      category: 'Bem-estar',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'HIIT vs Cardio Tradicional: Qual é Melhor?',
      excerpt: 'Compare os benefícios de cada modalidade.',
      author: 'Personal Trainer Lucas Oliveira',
      date: '3 de Janeiro, 2024',
      readTime: '6 min',
      category: 'Treino',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
    },
    {
      id: 7,
      title: 'Hidratação e Performance: A Conexão Essencial',
      excerpt: 'Por que beber água é crucial para seus resultados.',
      author: 'Dra. Juliana Ferreira',
      date: '1 de Janeiro, 2024',
      readTime: '4 min',
      category: 'Saúde',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    },
  ];

  const categories = [
    { name: 'Todos', count: 24, active: true },
    { name: 'Ozempic & Mounjaro', count: 8, active: false },
    { name: 'Treino', count: 12, active: false },
    { name: 'Nutrição', count: 10, active: false },
    { name: 'Bem-estar', count: 6, active: false },
    { name: 'Saúde', count: 5, active: false },
  ];

  const popularTopics = [
    { name: 'Perda de Peso', icon: TrendingUp },
    { name: 'Ozempic', icon: Pill },
    { name: 'HIIT', icon: Heart },
    { name: 'Nutrição', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog FitLife</h1>
          <p className="text-gray-600">Artigos, dicas e informações para sua jornada fitness</p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Destaque
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                      <p className="text-sm text-gray-500">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.id}`}
                    className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition duration-300 flex items-center space-x-2"
                  >
                    <span>Ler Artigo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categorias</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      category.active
                        ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <span className="text-sm">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-gradient-to-br from-green-500 to-orange-500 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Tópicos Populares</h3>
              <div className="space-y-3">
                {popularTopics.map((topic) => (
                  <button
                    key={topic.name}
                    className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition px-4 py-3 rounded-lg flex items-center space-x-3"
                  >
                    <topic.icon className="w-5 h-5" />
                    <span className="font-semibold">{topic.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Receba artigos exclusivos no seu email
              </p>
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="w-full bg-gradient-to-r from-green-500 to-orange-500 text-white py-2 rounded-lg hover:shadow-lg transition">
                Inscrever-se
              </button>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-green-600 hover:text-orange-600 font-semibold text-sm flex items-center space-x-1 transition"
                      >
                        <span>Ler mais</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="bg-white text-gray-700 px-8 py-3 rounded-full border-2 border-gray-300 hover:border-green-500 hover:text-green-600 transition duration-300 font-semibold">
                Carregar Mais Artigos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
