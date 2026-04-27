import React from 'react';
import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-brand-navy flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="relative">
        {/* Animated Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-2 border-brand-gold/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-32 h-32 border-t-2 border-brand-gold rounded-full"
        />
        
        {/* Logo Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center shadow-2xl p-2"
            >
               <span className="font-black text-brand-navy text-2xl">FU</span>
            </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <h1 className="text-white font-serif text-2xl italic tracking-wide">FUHSA</h1>
        <p className="text-brand-gold uppercase text-[10px] tracking-[0.4em] font-semibold mt-2">
            Federal University of Health Sciences, Azare
        </p>
      </motion.div>

      <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-brand-gold"
        />
      </div>
    </motion.div>
  );
}
