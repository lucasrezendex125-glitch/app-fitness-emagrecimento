import Link from 'next/link';
import { Dumbbell, Activity, Play, Pill, TrendingUp } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-500 to-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8" />
            <span className="text-2xl font-bold">FitLife</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/activities" className="flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <Activity className="h-5 w-5" />
              <span>Atividades</span>
            </Link>
            <Link href="/classes" className="flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <Play className="h-5 w-5" />
              <span>Aulas</span>
            </Link>
            <Link href="/ozempic" className="flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <Pill className="h-5 w-5" />
              <span>Ozempic & Mounjaro</span>
            </Link>
            <Link href="/progress" className="flex items-center space-x-1 hover:text-orange-200 transition-colors">
              <TrendingUp className="h-5 w-5" />
              <span>Progresso</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}