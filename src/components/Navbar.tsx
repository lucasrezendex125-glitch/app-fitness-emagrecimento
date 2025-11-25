"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User, Bell, Home, Dumbbell, Video, Users, BookOpen, TrendingUp } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState(3);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg p-2">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              FitLife Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition">
              <Home className="w-4 h-4" />
              <span>Início</span>
            </Link>
            <Link href="/activities" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition">
              <Dumbbell className="w-4 h-4" />
              <span>Atividades</span>
            </Link>
            <Link href="/classes" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition">
              <Video className="w-4 h-4" />
              <span>Aulas</span>
            </Link>
            <Link href="/quiz" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition">
              <TrendingUp className="w-4 h-4" />
              <span>Quiz</span>
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative text-gray-700">
              <Bell className="w-6 h-6" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <User className="w-6 h-6" />
            </div>
            <Link
              href="/payment"
              className="bg-gradient-to-r from-blue-500 to-violet-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition duration-300"
            >
              Assinar Premium
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              Início
            </Link>
            <Link
              href="/activities"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              Atividades
            </Link>
            <Link
              href="/classes"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              Aulas
            </Link>
            <Link
              href="/quiz"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
            >
              Quiz
            </Link>
            <Link
              href="/payment"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-lg text-center hover:shadow-lg transition"
            >
              Assinar Premium
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
