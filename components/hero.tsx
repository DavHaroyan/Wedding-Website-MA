'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-wedding-ivory text-wedding-dark flex items-center justify-center pt-16">
      <div className="absolute top-10 left-10 opacity-10 hidden md:block">
        <svg width="400" height="400" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="none" stroke="#C5A059" strokeWidth="0.5" /></svg>
      </div>

      <div className="z-20 text-center flex flex-col items-center px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="uppercase tracking-[0.4em] text-sm mb-4 text-wedding-champagne font-sans font-bold"
        >
          ՄԵՆՔ ԱՄՈՒՍՆԱՆՈՒՄ ԵՆՔ
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-playfair text-6xl md:text-8xl lg:text-[90px] leading-[0.85] mb-8 text-wedding-dark"
        >
          Մովսես <span className="text-wedding-champagne italic mx-2">&</span> Անահիտ
        </motion.h1>

        <div className="flex items-center gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-16 h-px bg-wedding-champagne origin-right"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-cormorant text-2xl md:text-3xl font-light italic text-wedding-dark"
          >
            Օգոստոսի 10, 2026
          </motion.p>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 text-sm tracking-widest text-wedding-dark/50 uppercase font-sans font-bold"
        >
          Vahagn Hall Ararat, Armenia
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-wedding-champagne/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
