import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
  title: string;
}

export default function StatsCounter({ value, suffix = "", duration = 2, title }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalSteps = 60;
    const increment = end / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, (duration * 1000) / totalSteps);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-black text-brand-navy mb-2 flex justify-center items-baseline group-hover:text-brand-gold transition-colors">
        <span>{count}</span>
        {suffix && <span className="text-xl ml-1 text-brand-gold">{suffix}</span>}
      </div>
      <p className="text-brand-navy/50 uppercase text-[10px] tracking-widest font-bold">{title}</p>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={isInView ? { width: "40px" } : { width: 0 }}
        className="h-1 bg-brand-gold mx-auto mt-4 rounded-full"
      />
    </div>
  );
}
