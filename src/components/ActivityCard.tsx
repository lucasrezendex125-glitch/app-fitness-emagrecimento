import { Play, Clock, Flame } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  duration: string;
  calories: string;
  videoUrl: string;
  onPlay: () => void;
}

export default function ActivityCard({ title, description, duration, calories, videoUrl, onPlay }: ActivityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-200 relative">
        <iframe
          src={videoUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition-opacity"
        >
          <Play className="h-12 w-12 text-white" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Flame className="h-4 w-4" />
            <span>{calories}</span>
          </div>
        </div>
      </div>
    </div>
  );
}