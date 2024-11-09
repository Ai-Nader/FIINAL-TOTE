import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './Link';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Unlock the Future of Automation
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Discover AI-driven solutions for streamlined workflows
          </p>
          <Link 
            href="#services-section"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors text-lg"
          >
            Explore Our Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}