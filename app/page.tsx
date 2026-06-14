'use client';
import { useState } from 'react';
import { Hero } from '@/components/hero';
import { Countdown } from '@/components/countdown';
import { Details } from '@/components/details';
import { Timeline } from '@/components/timeline';
import { Rsvp } from '@/components/rsvp';
import { SuccessModal } from '@/components/success-modal';
import { MusicPlayer } from '@/components/music-player';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [brideCodes, setBrideCodes] = useState<number[]>([]);
  const [groomCodes, setGroomCodes] = useState<number[]>([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleRsvpSuccess = (bCodes: number[], gCodes: number[]) => {
    setBrideCodes(bCodes);
    setGroomCodes(gCodes);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-wedding-ivory relative selection:bg-wedding-champagne selection:text-white flex flex-col font-serif overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-wedding-champagne z-50 origin-left"
        style={{ scaleX }}
      />
      
      <nav className="fixed top-0 w-full z-40 bg-wedding-ivory/80 backdrop-blur-md border-b border-wedding-champagne/20 hidden md:flex items-center justify-between px-12 h-16">
        <span className="text-sm tracking-[0.2em] uppercase font-sans font-semibold text-wedding-dark">Մ & Ա</span>
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.15em] font-sans font-medium">
          <a href="#story" className="hover:text-wedding-champagne transition-colors">Օրակարգը</a>
          <a href="#details" className="hover:text-wedding-champagne transition-colors">Մանրամասներ</a>
          <a href="#rsvp" className="text-wedding-champagne border-b border-wedding-champagne transition-colors">Գրանցում</a>
        </div>
        {/* <div className="w-8 h-8 rounded-full border border-wedding-champagne flex items-center justify-center">
          <div className="w-1 h-1 bg-wedding-champagne rounded-full"></div>
        </div> */}
      </nav>

      <Hero />
      <Countdown />
      <Timeline />
      <Details />
      <Rsvp onSuccess={handleRsvpSuccess} />
      
      <footer className="h-16 border-t border-wedding-champagne/10 flex flex-col md:flex-row items-center justify-center md:justify-between px-12 bg-wedding-ivory w-full">
        <p className="text-[9px] uppercase tracking-[0.2em] font-sans opacity-50 text-wedding-dark mb-2 md:mb-0">Օգոստոսի 10 2026</p>
        <p className="text-[9px] uppercase tracking-[0.2em] font-sans opacity-50 text-wedding-dark">Վահագն հոլլ Արարատ</p>
      </footer>

      <SuccessModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        brideCodes={brideCodes} 
        groomCodes={groomCodes} 
      />
      
      <MusicPlayer />
    </main>
  );
}
