"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { TrendingDown, Target, Flame, Award, Calendar, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {
  const [userData, setUserData] = useState({
    name: 'João Silva',
    currentWeight: 85,
    goalWeight: 75,
    startWeight: 95,
    weeklyGoal: 0.5,
    caloriesBurned: 2450,
    workoutsCompleted: 12,
    streak: 7,
  });

  const [weightData, setWeightData] = useState([
    { week: 'Sem 1', peso: 95 },
    { week: 'Sem 2', peso: 93 },
    { week: 'Sem 3', peso: 91 },
    { week: 'Sem 4', peso: 89 },
    { week: 'Sem 5', peso: 87 },
    { week: 'Sem 6', peso: 85 },
  ]);

  const [activityData, setActivityData] = useState([
    { day: 'Seg', calorias: 350 },
    { day: 'Ter', calorias: 420 },
    { day: 'Qua', calorias: 380 },
    { day: 'Qui', calorias: 450 },
    { day: 'Sex', calorias: 390 },
    { day: 'Sáb', calorias: 520 },
    { day: 'Dom', calorias: 340 },
  ]);

  const workoutDistribution = [
    { name: 'Cardio', value: 40 },
    { name: 'Força', value: 30 },
    { name: 'Yoga', value: 20 },
    { name: 'HIIT', value: 10 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#6366f1', '#a855f7'];

  const progressPercentage = ((userData.startWeight - userData.currentWeight) / (userData.startWeight - userData.goalWeight)) * 100;

  useEffect(() => {
    // Carregar dados do localStorage
    const savedData = localStorage.getItem('fitlife_user_data');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Olá, {userData.name}! 👋</h1>
          <p className="text-gray-600">Aqui está seu progresso de hoje</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Peso Atual</p>
                <p className="text-3xl font-bold text-gray-900">{userData.currentWeight}kg</p>
                <p className="text-blue-600 text-sm mt-1">-{userData.startWeight - userData.currentWeight}kg perdidos</p>
              </div>
              <TrendingDown className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-violet-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Meta</p>
                <p className="text-3xl font-bold text-gray-900">{userData.goalWeight}kg</p>
                <p className="text-violet-600 text-sm mt-1">{userData.currentWeight - userData.goalWeight}kg restantes</p>
              </div>
              <Target className="w-12 h-12 text-violet-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Calorias Queimadas</p>
                <p className="text-3xl font-bold text-gray-900">{userData.caloriesBurned}</p>
                <p className="text-indigo-600 text-sm mt-1">Esta semana</p>
              </div>
              <Flame className="w-12 h-12 text-indigo-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Sequência</p>
                <p className="text-3xl font-bold text-gray-900">{userData.streak} dias</p>
                <p className="text-purple-600 text-sm mt-1">Continue assim! 🔥</p>
              </div>
              <Award className="w-12 h-12 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Progresso da Meta</h2>
            <span className="text-blue-600 font-semibold">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-violet-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-gray-600 text-sm">Você está {Math.round(progressPercentage)}% mais perto da sua meta!</p>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Weight Progress Chart */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Evolução do Peso</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="peso" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Activity Chart */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Calorias Queimadas (Semana)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calorias" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Workout Distribution & Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Workout Distribution */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Distribuição de Treinos</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={workoutDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {workoutDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Atividades Recentes</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                <Activity className="w-8 h-8 text-blue-600" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Corrida Matinal</p>
                  <p className="text-sm text-gray-600">5km • 350 calorias</p>
                </div>
                <span className="text-sm text-gray-500">Hoje</span>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-violet-50 rounded-lg">
                <Activity className="w-8 h-8 text-violet-600" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Treino de Força</p>
                  <p className="text-sm text-gray-600">45min • 280 calorias</p>
                </div>
                <span className="text-sm text-gray-500">Ontem</span>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-indigo-50 rounded-lg">
                <Activity className="w-8 h-8 text-indigo-600" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Yoga Flow</p>
                  <p className="text-sm text-gray-600">30min • 150 calorias</p>
                </div>
                <span className="text-sm text-gray-500">2 dias atrás</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
