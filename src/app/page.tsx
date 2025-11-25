import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-orange-500">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-800">FitLife Pro</h1>
            <nav className="space-x-4">
              <Link href="/" className="text-gray-600 hover:text-green-600">Início</Link>
              <Link href="/quiz" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
                Fazer Quiz
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Transforme Seu Corpo com FitLife Pro
          </h2>
          <p className="text-xl text-white mb-8">
            Seu guia completo para emagrecer saudável com atividades físicas, aulas personalizadas
            e suporte especializado para usuários de Ozempic e Mounjaro.
          </p>
          <Link
            href="/quiz"
            className="bg-white text-green-600 font-bold py-4 px-8 rounded-full text-xl hover:bg-gray-100 transition duration-300 inline-block"
          >
            Comece Seu Quiz Gratuito
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Por que escolher FitLife Pro?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏃</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Atividades Diversas</h4>
              <p className="text-gray-600">Vídeos e descrições de exercícios para todos os níveis</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📹</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Aulas ao Vivo</h4>
              <p className="text-gray-600">Treinos interativos com profissionais qualificados</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Suporte Ozempic/Mounjaro</h4>
              <p className="text-gray-600">Dicas especializadas para usuários dessas medicações</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Rastreador de Progresso</h4>
              <p className="text-gray-600">Gráficos detalhados da sua jornada de perda de peso</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para começar sua transformação?
          </h3>
          <p className="text-xl text-white mb-8">
            Faça nosso quiz personalizado e descubra o plano perfeito para você!
          </p>
          <Link
            href="/quiz"
            className="bg-white text-green-600 font-bold py-4 px-8 rounded-full text-xl hover:bg-gray-100 transition duration-300 inline-block"
          >
            Fazer Quiz Agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 FitLife Pro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}