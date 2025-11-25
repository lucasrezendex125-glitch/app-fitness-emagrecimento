import { useState } from 'react';
import ActivityCard from '../../components/ActivityCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { storage } from '../../lib/storage';

interface Activity {
  id: string;
  title: string;
  description: string;
  duration: string;
  calories: string;
  videoUrl: string;
}

const activities: Activity[] = [
  {
    id: '1',
    title: 'Treino de Cardio Intenso',
    description: 'Queime calorias rapidamente com este treino de alta intensidade.',
    duration: '30 min',
    calories: '300 kcal',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder, substitua por vídeo real
  },
  {
    id: '2',
    title: 'Yoga para Iniciantes',
    description: 'Relaxe e fortaleça seu corpo com poses suaves de yoga.',
    duration: '45 min',
    calories: '150 kcal',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Treino de Força',
    description: 'Construa músculos e aumente sua força geral.',
    duration: '40 min',
    calories: '250 kcal',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '4',
    title: 'Dança Fitness',
    description: 'Divirta-se enquanto emagrece com coreografias energéticas.',
    duration: '35 min',
    calories: '200 kcal',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export default function ActivitiesPage() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const handlePlayActivity = (activity: Activity) => {
    setSelectedActivity(activity);
    // Salvar no histórico
    storage.addActivityToHistory({
      id: activity.id,
      title: activity.title,
      date: new Date().toISOString(),
      duration: parseInt(activity.duration),
      calories: parseInt(activity.calories)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Catálogo de Atividades</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
              duration={activity.duration}
              calories={activity.calories}
              videoUrl={activity.videoUrl}
              onPlay={() => handlePlayActivity(activity)}
            />
          ))}
        </div>

        {selectedActivity && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Atividade Selecionada: {selectedActivity.title}</h2>
            <p className="text-gray-600 mb-4">{selectedActivity.description}</p>
            <p className="text-sm text-gray-500">Duração: {selectedActivity.duration} | Calorias: {selectedActivity.calories}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}</content>
<path>src/app/activities/page.tsx