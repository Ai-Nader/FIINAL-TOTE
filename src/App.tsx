import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ThemeProvider } from './context/ThemeContext';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={
                <div className="flex items-center justify-center min-h-[60vh]">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-600 dark:text-gray-300">The page you're looking for doesn't exist.</p>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}