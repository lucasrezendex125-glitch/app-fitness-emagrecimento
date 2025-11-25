"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Check, X, Zap, Crown, Star } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Básico',
      description: 'Perfeito para começar sua jornada',
      monthlyPrice: 29.90,
      yearlyPrice: 299.90,
      icon: Star,
      color: 'from-gray-400 to-gray-600',
      features: [
        { text: 'Acesso a atividades básicas', included: true },
        { text: '5 aulas gravadas por mês', included: true },
        { text: 'Rastreador de progresso', included: true },
        { text: 'Suporte por email', included: true },
        { text: 'Aulas ao vivo', included: false },
        { text: 'Plano personalizado', included: false },
        { text: 'Consultoria nutricional', included: false },
        { text: 'Acesso à comunidade premium', included: false },
      ],
    },
    {
      name: 'Premium',
      description: 'Mais popular entre nossos usuários',
      monthlyPrice: 59.90,
      yearlyPrice: 599.90,
      icon: Zap,
      color: 'from-green-500 to-orange-500',
      popular: true,
      features: [
        { text: 'Acesso ilimitado a todas atividades', included: true },
        { text: 'Aulas gravadas ilimitadas', included: true },
        { text: 'Rastreador avançado de progresso', included: true },
        { text: 'Suporte prioritário 24/7', included: true },
        { text: '4 aulas ao vivo por mês', included: true },
        { text: 'Plano de treino personalizado', included: true },
        { text: 'Acesso à comunidade premium', included: true },
        { text: 'Consultoria nutricional', included: false },
      ],
    },
    {
      name: 'Elite',
      description: 'Transformação completa e personalizada',
      monthlyPrice: 99.90,
      yearlyPrice: 999.90,
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      features: [
        { text: 'Tudo do plano Premium', included: true },
        { text: 'Aulas ao vivo ilimitadas', included: true },
        { text: 'Personal trainer dedicado', included: true },
        { text: 'Consultoria nutricional mensal', included: true },
        { text: 'Plano 100% personalizado', included: true },
        { text: 'Acompanhamento diário', included: true },
        { text: 'Suporte Ozempic/Mounjaro especializado', included: true },
        { text: 'Acesso antecipado a novos recursos', included: true },
      ],
    },
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha Seu Plano Ideal
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Invista na sua saúde e transformação com o plano perfeito para você
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                  : 'text-gray-600'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-full font-semibold transition relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                  : 'text-gray-600'
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                -17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-green-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-green-500 to-orange-500 text-white text-center py-2 font-semibold">
                    🔥 MAIS POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-gray-600 text-xl mr-1">R$</span>
                      <span className="text-5xl font-bold text-gray-900">
                        {getPrice(plan).toFixed(2).split('.')[0]}
                      </span>
                      <span className="text-gray-600 text-xl ml-1">
                        ,{getPrice(plan).toFixed(2).split('.')[1]}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      por {billingCycle === 'monthly' ? 'mês' : 'ano'}
                    </p>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-600 font-semibold mt-2">
                        Economize R$ {getSavings(plan).toFixed(2)}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/payment"
                    className={`block w-full text-center py-4 rounded-xl font-bold transition duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white hover:shadow-2xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Começar Agora
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Perguntas Frequentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-600">
                Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Há garantia de reembolso?</h3>
              <p className="text-gray-600">
                Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Posso mudar de plano depois?</h3>
              <p className="text-gray-600">
                Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Quais formas de pagamento aceitam?</h3>
              <p className="text-gray-600">
                Aceitamos cartão de crédito, débito, PIX e boleto bancário.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Pagamento 100% seguro e criptografado</p>
          <div className="flex items-center justify-center space-x-6 text-gray-400">
            <span className="text-2xl">🔒</span>
            <span className="text-2xl">💳</span>
            <span className="text-2xl">✅</span>
            <span className="text-2xl">🛡️</span>
          </div>
        </div>
      </div>
    </div>
  );
}
