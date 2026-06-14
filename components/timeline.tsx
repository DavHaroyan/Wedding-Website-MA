'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Heart } from 'lucide-react';

const events = [
  { id: 1, time: '14:00', title: 'Welcome Drink', description: 'Gather and enjoy signature cocktails while mingling.' },
  { id: 2, time: '15:30', title: 'Ceremony', description: 'Witness the exchange of vows and rings.' },
  { id: 3, time: '17:00', title: 'Photoshoot', description: 'Let\'s capture beautiful memories.' },
  { id: 4, time: '19:00', title: 'Dinner Gala', description: 'A curated menu to celebrate the evening.' },
  { id: 5, time: '22:00', title: 'Party & Firework', description: 'Sweet treats and the bouquet toss to conclude the night.' },
];

export function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 bg-wedding-beige relative overflow-hidden border-b border-wedding-champagne/10" id="story">
      <div className="max-w-4xl mx-auto px-4 relative" ref={containerRef}>
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-widest text-[#C5A059] font-sans font-bold mb-8 text-center">Հարսաիքի օրակարգը</h3>
        </div>

        <div className="relative">
          <div className="absolute inset-0 w-full flex justify-center pointer-events-none hidden md:flex">
             <svg width="400" height="100%" viewBox="0 0 400 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
               <path d="M200 0 C 300 200, 100 300, 200 500 C 300 700, 100 800, 200 1000" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
               <motion.path 
                 d="M200 0 C 300 200, 100 300, 200 500 C 300 700, 100 800, 200 1000" 
                 stroke="#C5A059" 
                 strokeWidth="2" 
                 fill="none"
                 style={{ pathLength }}
               />
             </svg>
          </div>

          <div className="space-y-16 relative z-10 w-full max-w-lg mx-auto">
            {events.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={event.id}
                  className={`flex items-center w-full ${isEven ? 'justify-start md:pr-12' : 'justify-end md:pl-12'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-4 ${isEven ? 'text-right' : 'text-left flex-row-reverse'}`}>
                     <div className="md:hidden absolute left-4 w-3 h-3 bg-wedding-champagne rounded-full" />
                     <div className="flex-1">
                        <p className="font-sans font-bold text-xs uppercase tracking-widest text-wedding-dark">{event.time}</p>
                        <p className="font-cormorant italic text-sm text-[#8A8A8A] mt-1">{event.title}</p>
                     </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
