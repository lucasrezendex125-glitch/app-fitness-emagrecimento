import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Play, Calendar, Users } from 'lucide-react';

interface Class {
  id: string;
  title: string;
  instructor: string;
  type: 'live' | 'recorded';
  date?: string;
  time?: string;
  duration: string;
  participants: number;
  videoUrl: string;
}

const classes: Class[] = [
  {
    id: '1',
    title: 'Aula de HIIT ao Vivo',
    instructor: 'Maria Silva',
    type: 'live',
    date: 'Hoje',
    time: '19:00',
    duration: '45 min',
    participants: 25,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Pilates para Emagrecimento',
    instructor: 'João Santos',
    type: 'recorded',
    duration: '60 min',
    participants: 150,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Treino Funcional',
    instructor: 'Ana Costa',
    type: 'live',
    date: 'Amanhã',
    time: '08:00',
    duration: '50 min',
    participants: 18,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '4',
    title: 'Yoga Restaurativo',
    instructor: 'Pedro Lima',
    type: 'recorded',
    duration: '40 min',
    participants: 89,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export default function ClassesPage() {
  const [filter, setFilter] = useState<'all' | 'live' | 'recorded'>('all');

  const filteredClasses = classes.filter(cls => 
    filter === 'all' || cls.type === filter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Aulas e Treinos</h1>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter('live')}
              className={`px-4 py-2 rounded-full ${filter === 'live' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'}`}
            >
              Ao Vivo
            </button>
            <button
              onClick={() => setFilter('recorded')}
              className={`px-4 py-2 rounded-full ${filter === 'recorded' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
            >
              Gravadas
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredClasses.map((cls) => (
            <div key={cls.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <iframe
                  src={cls.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    cls.type === 'live' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    {cls.type === 'live' ? 'AO VIVO' : 'GRAVADO'}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{cls.title}</h3>
                <p className="text-gray-600 mb-2">Instrutor: {cls.instructor}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{cls.date || 'Disponível'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{cls.participants} participantes</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Duração: {cls.duration}</p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>{cls.type === 'live' ? 'Participar' : 'Assistir'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}</content>
<path>src/app/classes/page.tsx