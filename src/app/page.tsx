import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Dumbbell, Video, Users, TrendingUp, Heart, Zap, Award, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-violet-400/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md mb-6">
                <Zap className="w-4 h-4 text-violet-500 mr-2" />
                <span className="text-sm font-semibold text-gray-700">Transforme sua vida hoje</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Seu Caminho Para Uma
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"> Vida Mais Saudável</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Plataforma completa de fitness com atividades personalizadas, aulas ao vivo e suporte especializado para usuários de Ozempic e Mounjaro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quiz"
                  className="bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition duration-300 inline-flex items-center justify-center"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Começar Agora
                </Link>
                <Link
                  href="/dashboard"
                  className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:shadow-xl transition duration-300 inline-flex items-center justify-center border-2 border-gray-200"
                >
                  Ver Dashboard
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">10k+</p>
                  <p className="text-gray-600">Usuários Ativos</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600">Aulas Disponíveis</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">4.9⭐</p>
                  <p className="text-gray-600">Avaliação</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop" 
                  alt="Fitness"
                  className="rounded-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-violet-500 text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-sm font-semibold mb-1">Progresso Médio</p>
                  <p className="text-3xl font-bold">-8kg em 30 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo Que Você Precisa em Um Só Lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ferramentas profissionais e suporte especializado para acelerar seus resultados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/activities" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Dumbbell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Atividades</h3>
                <p className="text-gray-600 leading-relaxed">
                  Catálogo completo com vídeos e descrições detalhadas de exercícios
                </p>
              </div>
            </Link>

            <Link href="/classes" className="group">
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-violet-500 to-violet-600 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Aulas ao Vivo</h3>
                <p className="text-gray-600 leading-relaxed">
                  Treinos interativos com instrutores profissionais certificados
                </p>
              </div>
            </Link>

            <Link href="/community" className="group">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Comunidade</h3>
                <p className="text-gray-600 leading-relaxed">
                  Conecte-se, compartilhe e inspire-se com outros membros
                </p>
              </div>
            </Link>

            <Link href="/dashboard" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Progresso</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gráficos detalhados e análise completa da sua evolução
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Ozempic/Mounjaro Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Suporte Especializado</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Programa Especial para Usuários de Ozempic e Mounjaro
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Orientações personalizadas, dicas de nutrição e exercícios adaptados para maximizar seus resultados com segurança.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Exercícios adaptados para cada fase do tratamento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Dicas de hidratação e nutrição específicas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Acompanhamento profissional especializado</span>
                </li>
              </ul>
              <Link
                href="/blog"
                className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition duration-300 inline-flex items-center"
              >
                Saiba Mais
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=600&fit=crop" 
                alt="Suporte Médico"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos membros estão dizendo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Maria Silva</h4>
                  <p className="text-sm text-gray-600">Perdeu 12kg em 2 meses</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 leading-relaxed">
                "O FitLife Pro mudou minha vida! Com o suporte para Ozempic e as aulas personalizadas, consegui resultados incríveis."
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Carlos Oliveira</h4>
                  <p className="text-sm text-gray-600">Perdeu 15kg em 3 meses</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 leading-relaxed">
                "A comunidade é incrível! Me sinto motivado todos os dias. Os treinos são desafiadores mas eficazes."
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Ana Paula</h4>
                  <p className="text-sm text-gray-600">Perdeu 10kg em 6 semanas</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 leading-relaxed">
                "Melhor investimento que já fiz! O dashboard de progresso me mantém focada e os resultados falam por si."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-violet-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto Para Transformar Sua Vida?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Junte-se a milhares de pessoas que já estão alcançando seus objetivos com o FitLife Pro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-xl hover:shadow-2xl transition duration-300 inline-flex items-center justify-center"
            >
              Começar Agora Grátis
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-white hover:text-blue-600 transition duration-300 inline-flex items-center justify-center"
            >
              Ver Planos
            </Link>
          </div>
          <p className="text-white mt-6 opacity-75">
            ✓ Sem compromisso • ✓ Cancele quando quiser • ✓ Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FitLife Pro</h3>
              <p className="text-gray-400">
                Sua jornada para uma vida mais saudável começa aqui.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/activities" className="hover:text-white transition">Atividades</Link></li>
                <li><Link href="/classes" className="hover:text-white transition">Aulas</Link></li>
                <li><Link href="/community" className="hover:text-white transition">Comunidade</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Central de Ajuda</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contato</Link></li>
                <li><Link href="#" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Termos de Uso</Link></li>
                <li><Link href="#" className="hover:text-white transition">Privacidade</Link></li>
                <li><Link href="#" className="hover:text-white transition">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FitLife Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
