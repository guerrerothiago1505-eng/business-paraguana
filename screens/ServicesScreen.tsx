
import React, { useState } from 'react';

interface ServicesScreenProps {
  onBack: () => void;
  onSelectService: (title: string, category: string) => void;
}

const ServicesScreen: React.FC<ServicesScreenProps> = ({ onBack, onSelectService }) => {
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
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Gestión Iniciada</p>
            <p className="text-[9px] text-slate-300 uppercase leading-tight mt-1">El equipo de Business Paraguaná ha sido notificado de tu requerimiento.</p>
          </div>
        </div>
      )}

      <div className="gold-gradient text-brand-slate p-8 pt-12 rounded-b-[50px] shadow-2xl mb-8 relative overflow-hidden">
        <button onClick={onBack} className="mb-6 bg-brand-slate/10 p-3 rounded-2xl text-brand-slate flex items-center gap-2 text-xs font-black uppercase tracking-widest border border-brand-slate/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          PRINCIPAL
        </button>
        <h1 className="text-4xl font-display font-black mb-2 tracking-tighter uppercase">Servicios</h1>
        <p className="text-brand-slate/60 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Gestión & Acompañamiento</p>
      </div>

      <div className="px-6 space-y-4">
        <h3 className="text-[11px] font-black text-brand-gold uppercase tracking-[0.3em] mb-6 px-4">Gestión Documental</h3>
        
        <ServiceItem icon="🖋️" title="Notaría" subtitle="Poderes, Contratos, Permisos" onClick={() => onSelectService('Notaría', 'Notaría')} />
        <ServiceItem icon="🏛️" title="Registro Inmobiliario" subtitle="Protocolización & Catastro" onClick={() => onSelectService('Registro Inmobiliario', 'Registros')} />
        <ServiceItem icon="🏢" title="Registro Mercantil" subtitle="Constitución de Empresas" onClick={() => onSelectService('Registro Mercantil', 'Registros')} />
        <ServiceItem icon="⚖️" title="Acompañamiento Legal" subtitle="Asistencia en sitio" onClick={() => onSelectService('Acompañamiento Legal', 'Legal')} />

        <h3 className="text-[11px] font-black text-brand-gold uppercase tracking-[0.3em] mb-6 mt-12 px-4">Pagos de Servicios</h3>
        
        <div className="grid grid-cols-1 gap-3">
           <PaymentItem title="Alcaldía de Carirubana" logo="🏛️" onClick={notifyTeam} />
           <PaymentItem title="IMASEO / Aseo Urbano" logo="♻️" onClick={notifyTeam} />
           <PaymentItem title="Corpoelec / Energía" logo="⚡" onClick={notifyTeam} />
           <PaymentItem title="Hidrofalcón / Agua" logo="💧" onClick={notifyTeam} />
        </div>
      </div>
      
      <div className="m-6 p-8 bg-slate-900 rounded-[44px] text-white shadow-2xl relative overflow-hidden">
         <h4 className="font-display font-black text-xl mb-2 uppercase tracking-tight">Trámite Especial</h4>
         <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-6 leading-relaxed">¿Necesitas algo fuera de lista?</p>
         <button onClick={notifyTeam} className="bg-brand-gold text-brand-slate w-full py-5 rounded-[24px] font-black text-[10px] uppercase tracking-widest shadow-xl">Contactar Concierge</button>
      </div>
    </div>
  );
};

const ServiceItem = ({ icon, title, subtitle, onClick }: any) => (
  <button onClick={onClick} className="w-full flex items-center gap-5 bg-white p-6 rounded-[36px] border border-slate-50 shadow-premium active:scale-95 transition-all text-left">
    <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-white/50">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-display font-black text-brand-slate text-md uppercase tracking-tight mb-1">{title}</h4>
      <p className="text-[9px] text-brand-gold font-black uppercase tracking-widest">{subtitle}</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PaymentItem = ({ title, logo, onClick }: any) => (
  <button onClick={onClick} className="w-full flex items-center justify-between bg-white p-5 rounded-3xl border border-slate-100 hover:border-brand-gold/30 transition-all active:scale-[0.98]">
     <div className="flex items-center gap-4">
        <span className="text-2xl">{logo}</span>
        <span className="text-xs font-black text-brand-slate uppercase tracking-tight">{title}</span>
     </div>
     <div className="bg-brand-beige p-2 rounded-xl text-brand-gold">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
        </svg>
     </div>
  </button>
);

export default ServicesScreen;
