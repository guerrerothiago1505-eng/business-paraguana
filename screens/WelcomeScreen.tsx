
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

interface WelcomeScreenProps {
  onStart: () => void;
  onLogin: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onLogin }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-between p-10 bg-brand-offwhite text-center overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full aspect-square relative"
        >
          <div className="absolute inset-0 bg-brand-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <Logo />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 space-y-6"
        >
          <p className="text-[12px] font-black text-brand-gold uppercase tracking-[0.8em]">
            Tu Aliado Estratégico
          </p>
          <div className="h-0.5 bg-brand-gold/20 w-24 mx-auto rounded-full"></div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-full mb-10 flex flex-col gap-5"
      >
        <button 
          onClick={onStart}
          className="w-full red-gradient text-white py-6 rounded-[28px] font-bold text-lg shadow-[0_20px_40px_rgba(161,27,32,0.25)] active:scale-95 transition-all uppercase tracking-[0.2em] border-b-4 border-brand-redDark overflow-hidden relative group"
        >
          <span className="relative z-10">Empezar Gestión</span>
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
        </button>
        
        <button 
          onClick={onLogin}
          className="w-full bg-white border border-brand-gold/10 text-brand-slate/60 py-5 rounded-[28px] font-bold active:scale-95 transition-all text-[11px] uppercase tracking-widest hover:border-brand-gold/30"
        >
          Ya soy cliente VIP
        </button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="h-px w-8 bg-brand-gold"></span>
        <p className="text-[8px] font-black uppercase tracking-widest text-brand-slate">Exclusividad Garantizada</p>
        <span className="h-px w-8 bg-brand-gold"></span>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
