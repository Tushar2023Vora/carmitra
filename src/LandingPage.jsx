import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

import Footer from './components/Footer';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Custom Landing Page Header */}
      <header className="w-full py-8 bg-gradient-to-r from-teal-500 to-blue-500 flex flex-col items-center justify-center shadow-lg">
        <span className="text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">CarMitra</span>
        <span className="mt-2 text-lg md:text-xl text-white/80">Find your dream car, effortlessly</span>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-700 mb-6 text-center">Welcome to CarMitra</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl text-center">
          India's trusted marketplace for buying and selling cars. Discover thousands of verified listings, connect with sellers, and find your dream car with confidence.
        </p>
        <div className="flex gap-6">
          <Button className="text-lg px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg" onClick={() => navigate('/auth')}>Get Started</Button>
          <Button className="text-lg px-8 py-3 bg-white border border-teal-600 text-teal-700 rounded-full shadow-lg" onClick={() => navigate('/search')}>Browse Cars</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
