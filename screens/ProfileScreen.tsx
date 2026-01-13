
import React from 'react';
import { User } from '../types';

interface ProfileScreenProps {
  user: User | null;
  onLogout: () => void;
  onGoFavorites: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, onLogout, onGoFavorites }) => {
  return (
    <div className="p-6 pb-20 bg-white">
      <div className="flex flex-col items-center mb-12 pt-10">
        <div className="relative">
          <div className="w-32 h-32 bg-slate-50 text-brand-red rounded-[48px] flex items-center justify-center text-5xl font-display font-bold mb-6 shadow-inner border-2 border-slate-100">
            {user?.fullName.split(' ').map(n => n[0]).join('') || 'JD'}
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 gold-gradient rounded-2xl flex items-center justify-center border-4 border-white shadow-lg">
             <svg className="w-5 h-5 text-brand-slate" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
        </div>
        
        <h2 className="text-2xl font-display font-bold text-brand-slate">{user?.fullName || 'Juan Delgado'}</h2>
        <p className="text-slate-400 text-sm font-light mt-1">{user?.email || 'juan.d@gmail.com'}</p>
        
        <div className="mt-6">
           <span className="red-gradient text-white text-[9px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl shadow-brand-red/20 border-b-2 border-brand-gold">
             Membresía Premium
           </span>
        </div>
      </div>

      <section className="mb-10 space-y-3">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Mi Gestión</h3>
        <div className="grid grid-cols-1 gap-4">
           <button 
             onClick={onGoFavorites}
             className="w-full flex items-center justify-between p-6 bg-slate-50 rounded-[32px] border border-slate-100 active:scale-[0.98] transition-all"
           >
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white text-brand-red flex items-center justify-center text-2xl shadow-sm">❤️</div>
                 <div>
                    <span className="text-sm font-bold text-brand-slate block">Mis Favoritos</span>
                    <span className="text-[10px] text-slate-400">Propiedades guardadas</span>
                 </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
           </button>
           
           <button className="w-full flex items-center justify-between p-6 bg-slate-50 rounded-[32px] border border-slate-100">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white text-brand-gold flex items-center justify-center text-2xl shadow-sm">🪪</div>
                 <div>
                    <span className="text-sm font-bold text-brand-slate block">Mi Carpeta Digital</span>
                    <span className="text-[10px] text-slate-400">Documentos verificados</span>
                 </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
           </button>
        </div>
      </section>

      <div className="space-y-2 mb-10">
        <ProfileLink icon="🛡️" label="Seguridad y Privacidad" />
        <ProfileLink icon="⚙️" label="Configuración General" />
      </div>

      <button 
        onClick={onLogout}
        className="w-full text-brand-red font-black py-5 rounded-[24px] border-2 border-slate-100 active:bg-slate-50 transition-all uppercase text-[10px] tracking-widest mt-4"
      >
        Cerrar Sesión Segura
      </button>
      
      <div className="flex flex-col items-center mt-12 gap-2 opacity-30">
        <div className="w-8 h-8 border border-brand-slate rounded-full flex items-center justify-center text-[8px] font-black">BP</div>
        <p className="text-[8px] text-slate-500 uppercase tracking-[0.3em] font-black text-center">Business Paraguaná • v2.1.0</p>
      </div>
    </div>
  );
};

const ProfileLink = ({ icon, label }: any) => (
  <button className="w-full flex items-center justify-between p-5 hover:bg-slate-50 rounded-2xl transition-all">
     <div className="flex items-center gap-4">
        <div className="text-xl grayscale opacity-50">
           {icon}
        </div>
        <span className="text-sm font-medium text-slate-600">{label}</span>
     </div>
     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
     </svg>
  </button>
);

export default ProfileScreen;
