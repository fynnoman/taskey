"use client";

import Link from "next/link";
import { useState } from "react";
import DemoBookingModal from "../DemoBookingModal";

export default function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  return (
    <>
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32 overflow-hidden">
      {/* Decorative Circles - Psychological focal points */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Die <span className="text-blue-900">Nr. 1</span> Dienstleistungssoftware für effiziente
              Betriebe
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Zeitersparnis von durchschnittlich <span className="font-bold text-blue-900">9 Stunden pro Woche</span>. Automatische Zeiterfassung, intelligente Auftragsplanung und digitale Rechnungsstellung für über 600 Branchen. Made in Germany, DSGVO-konform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="group px-8 py-4 bg-blue-900 text-white text-lg font-semibold rounded-full hover:bg-blue-800 transition-all hover:scale-105 hover:shadow-2xl text-center relative overflow-hidden"
                aria-label="Kostenlose Demo buchen"
              >
                <span className="relative z-10">Demo buchen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <Link
                href="https://signup.vars-development.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-blue-900 border-2 border-blue-900 text-lg font-semibold rounded-full hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-lg text-center"
                aria-label="4 Wochen kostenlos testen"
              >
                4 Wochen kostenlos testen
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {/* Circular background - dark grey */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[90%] bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-2xl"></div>
            </div>
            
            {/* Large image above circle */}
            <div className="relative z-10 scale-150">
              <img 
                src="/Unbenanntes_Projekt 2.png" 
                alt="Taskey Software" 
                className="w-full h-auto drop-shadow-2xl"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
