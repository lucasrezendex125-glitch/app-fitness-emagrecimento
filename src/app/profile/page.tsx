"use client";

import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import { User, Mail, Lock, Camera, Save, Bell, Shield, CreditCard, Award, TrendingUp } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 98765-4321',
    age: 32,
    height: 175,
    currentWeight: 85,
    goalWeight: 75,
    plan: 'Premium',
    memberSince: 'Janeiro 2024',
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReport: true,
    communityUpdates: false,
  });

  const achievements = [
    { id: 1, title: 'Primeira Semana', description: 'Complete 7 dias consecutivos', earned: true, icon: '🎯' },
    { id: 2, title: 'Perda de 5kg', description: 'Perca seus primeiros 5kg', earned: true, icon: '⚖️' },
    { id: 3, title: 'Maratonista', description: 'Complete 50 treinos', earned: false, icon: '🏃' },
    { id: 4, title: 'Mestre do HIIT', description: 'Complete 20 aulas de HIIT', earned: false, icon: '🔥' },
  ];

  const handleSave = () => {
    localStorage.setItem('fitlife_user_data', JSON.stringify(userData));
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl">
                👤
              </div>
              <button className="absolute bottom-0 right-0 bg-white text-green-600 rounded-full p-2 shadow-lg hover:shadow-xl transition">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
              <p className="opacity-90">Membro desde {userData.memberSince}</p>
              <div className="mt-3 inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">Plano {userData.plan}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="text-2xl font-bold">85kg</p>
                <p className="text-sm opacity-90">Peso Atual</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="text-2xl font-bold">-10kg</p>
                <p className="text-sm opacity-90">Perdidos</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="text-2xl font-bold">7</p>
                <p className="text-sm opacity-90">Sequência</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-4 space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center space-x-3 ${
                  activeTab === 'profile'
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <User className="w-5 h-5" />
                <span>Perfil</span>
              </button>
              <button
                onClick={() => setActiveTab('preferences')}
                className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center space-x-3 ${
                  activeTab === 'preferences'
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Bell className="w-5 h-5" />
                <span>Preferências</span>
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center space-x-3 ${
                  activeTab === 'security'
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Shield className="w-5 h-5" />
                <span>Segurança</span>
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center space-x-3 ${
                  activeTab === 'billing'
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span>Assinatura</span>
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center space-x-3 ${
                  activeTab === 'achievements'
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Award className="w-5 h-5" />
                <span>Conquistas</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações do Perfil</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Idade</label>
                    <input
                      type="number"
                      value={userData.age}
                      onChange={(e) => setUserData({ ...userData, age: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Altura (cm)</label>
                    <input
                      type="number"
                      value={userData.height}
                      onChange={(e) => setUserData({ ...userData, height: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Peso Atual (kg)</label>
                    <input
                      type="number"
                      value={userData.currentWeight}
                      onChange={(e) => setUserData({ ...userData, currentWeight: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Meta de Peso (kg)</label>
                    <input
                      type="number"
                      value={userData.goalWeight}
                      onChange={(e) => setUserData({ ...userData, goalWeight: parseInt(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <button
                  onClick={handleSave}
                  className="mt-6 bg-gradient-to-r from-green-500 to-orange-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Salvar Alterações</span>
                </button>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Preferências de Notificação</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">Notificações por Email</h3>
                      <p className="text-sm text-gray-600">Receba atualizações por email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.emailNotifications}
                        onChange={(e) => setPreferences({ ...preferences, emailNotifications: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">Notificações Push</h3>
                      <p className="text-sm text-gray-600">Receba lembretes de treino</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.pushNotifications}
                        onChange={(e) => setPreferences({ ...preferences, pushNotifications: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">Relatório Semanal</h3>
                      <p className="text-sm text-gray-600">Resumo do seu progresso</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.weeklyReport}
                        onChange={(e) => setPreferences({ ...preferences, weeklyReport: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">Atualizações da Comunidade</h3>
                      <p className="text-sm text-gray-600">Novos posts e comentários</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.communityUpdates}
                        onChange={(e) => setPreferences({ ...preferences, communityUpdates: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Suas Conquistas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-6 rounded-xl border-2 ${
                        achievement.earned
                          ? 'bg-gradient-to-br from-green-50 to-orange-50 border-green-500'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`text-4xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1">{achievement.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                          {achievement.earned ? (
                            <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                              ✓ Conquistado
                            </span>
                          ) : (
                            <span className="inline-flex items-center bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                              🔒 Bloqueado
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security & Billing tabs (simplified) */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Segurança</h2>
                <p className="text-gray-600">Configurações de segurança em desenvolvimento...</p>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Assinatura</h2>
                <div className="bg-gradient-to-r from-green-500 to-orange-500 rounded-xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-2">Plano {userData.plan}</h3>
                  <p className="opacity-90">Próxima cobrança: 15 de Fevereiro, 2024</p>
                  <p className="text-2xl font-bold mt-4">R$ 59,90/mês</p>
                </div>
                <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                  Gerenciar Assinatura
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
