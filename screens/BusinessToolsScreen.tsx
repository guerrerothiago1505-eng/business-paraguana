
import React, { useState } from 'react';

const BusinessToolsScreen: React.FC<{onBack: () => void, onNavigate: (v: any) => void}> = ({ onBack, onNavigate }) => {
  const [showToast, setShowToast] = useState(false);

  const notifyTeam = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="pb-10 bg-brand-beige min-h-screen relative">
      {showToast && (
        <div className="toast-notification w-72 bg-brand-slate text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-brand-gold/30">
          <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-brand-slate text-xs font-black">!</div>
          <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Notificación enviada</p>
            <p className="text-[9px] text-slate-300 uppercase leading-tight mt-1">El equipo de Business Paraguaná ha recibido tu solicitud empresarial.</p>
          </div>
        </div>
      )}

      <div className="red-gradient text-white p-8 pt-12 rounded-b-[50px] shadow-2xl mb-8 relative overflow-hidden">
        <button onClick={onBack} className="mb-6 bg-white/10 backdrop-blur-md p-3 rounded-2xl text-white flex items-center gap-2 text-xs font-black uppercase tracking-widest border border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          PRINCIPAL
        </button>
        <h1 className="text-4xl font-display font-black mb-2 tracking-tighter uppercase">Negocios</h1>
        <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Consolidación Empresarial</p>
      </div>

      <div className="px-6 space-y-6">
        {/* Asesoría y Consultoría */}
        <section className="bg-white p-8 rounded-[44px] border border-slate-50 shadow-premium group active:scale-95 transition-all">
           <div className="flex items-center gap-5 mb-4">
              <div className="w-16 h-16 gold-gradient rounded-3xl flex items-center justify-center text-3xl shadow-lg">⚖️</div>
              <div>
                <h3 className="font-display font-black text-brand-slate text-lg uppercase tracking-tighter">Asesoría Legal</h3>
                <p className="text-[9px] text-brand-gold font-black uppercase tracking-widest">Consultoría Ejecutiva</p>
              </div>
           </div>
           <p className="text-xs text-slate-400 mb-6 leading-relaxed font-medium">Asesoramiento jurídico integral para la protección y crecimiento de tus activos en la región.</p>
           <button onClick={notifyTeam} className="w-full bg-brand-slate text-white py-5 rounded-[24px] font-black text-[10px] uppercase tracking-[0.2em] shadow-xl">Solicitar Consulta</button>
        </section>

        {/* Grid de Servicios Específicos */}
        <div className="grid grid-cols-1 gap-4">
           <BusinessItem icon="🏠" title="Publicar Inmueble" subtitle="Alquiler / Venta" onClick={() => onNavigate('post-property')} />
           <BusinessItem icon="🚗" title="Publicar Vehículo" subtitle="Venta de Particulares" onClick={() => onNavigate('post-vehicle')} />
           <BusinessItem icon="🚜" title="Publicar Maquinaria" subtitle="Vehículos Industriales" onClick={() => onNavigate('post-vehicle')} />
           <BusinessItem icon="📦" title="Suministro Empresarial" subtitle="Procuras y Logística" />
           <BusinessItem icon="🏢" title="Gestión Arrendataria" subtitle="Administración de Rentas" />
        </div>

        <div className="bg-white/50 border border-white p-8 rounded-[44px] flex flex-col items-center text-center">
           <div className="text-4xl mb-4">🚀</div>
           <h4 className="font-display font-black text-brand-slate text-lg uppercase tracking-tighter">Plan de Crecimiento</h4>
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2 mb-6 leading-relaxed">¿Listo para expandir tu PYME en Paraguaná?</p>
           <button onClick={notifyTeam} className="px-8 py-4 red-gradient text-white rounded-2xl font-black text-[9px] uppercase tracking-widest shadow-xl">Hablemos Hoy</button>
        </div>
      </div>
    </div>
  );
};

const BusinessItem = ({ icon, title, subtitle, onClick }: any) => (
  <button onClick={onClick} className="w-full bg-white p-6 rounded-[36px] border border-slate-50 shadow-premium flex items-center gap-5 active:scale-95 transition-all text-left">
     <div className="w-14 h-14 bg-brand-beige rounded-2xl flex items-center justify-center text-2xl shadow-inner">{icon}</div>
     <div className="flex-1">
        <h4 className="font-display font-black text-brand-slate text-md uppercase tracking-tight leading-none mb-1">{title}</h4>
        <p className="text-[9px] text-brand-gold font-black uppercase tracking-widest">{subtitle}</p>
     </div>
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
     </svg>
  </button>
);

export default BusinessToolsScreen;
