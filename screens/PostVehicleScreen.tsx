
import React, { useState } from 'react';
import Logo from '../components/Logo';

interface PostVehicleScreenProps {
  onBack: () => void;
}

const PostVehicleScreen: React.FC<PostVehicleScreenProps> = ({ onBack }) => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    model: '',
    year: '',
    price: '',
    mileage: '',
    conditions: 'Excelente',
    features: ''
  });

  const handleSubmit = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onBack();
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-brand-beige animate-in slide-in-from-right duration-300 relative">
      {showToast && (
        <div className="toast-notification w-72 bg-brand-slate text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-brand-gold/30">
          <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-brand-slate text-xs font-black">!</div>
          <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Gestión Iniciada</p>
            <p className="text-[9px] text-slate-300 uppercase leading-tight mt-1">Nuestro equipo de Business Paraguaná ha recibido los detalles del vehículo para su revisión.</p>
          </div>
        </div>
      )}

      <header className="p-6 pt-10 border-b border-white/50 flex items-center gap-4 bg-white/20 backdrop-blur-md">
        <button onClick={onBack} className="p-2 bg-white rounded-xl text-slate-600 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="font-display font-black text-brand-slate uppercase tracking-tight">Publicar Vehículo / Maquinaria</h2>
      </header>

      <div className="p-6 space-y-8 pb-32">
        {/* Sección de Fotos */}
        <section>
          <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] block mb-4 px-1">Galería de Activo (4-8 fotos)</label>
          <div className="grid grid-cols-3 gap-3">
            <button className="aspect-square bg-white border-2 border-dashed border-brand-gold/30 rounded-3xl flex flex-col items-center justify-center text-brand-red active:scale-95 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-[9px] font-black mt-1 uppercase">Cargar</span>
            </button>
            <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-sm border border-white">
               <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-sm border border-white">
               <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Formulario Detallado */}
        <div className="space-y-6">
          <InputGroup label="Modelo / Marca" placeholder="Ej. Toyota Fortuner TRD" />
          
          <div className="grid grid-cols-2 gap-4">
             <InputGroup label="Año" type="number" placeholder="2024" />
             <InputGroup label="Precio (USD)" type="number" placeholder="65,000" />
          </div>

          <div className="grid grid-cols-2 gap-4">
             <InputGroup label="Kilometraje" type="number" placeholder="12,500" />
             <div className="group">
                <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] block mb-2 px-1">Condiciones</label>
                <select className="w-full p-4 bg-white border border-white rounded-[24px] font-black text-xs text-brand-slate outline-none focus:ring-2 focus:ring-brand-gold shadow-premium appearance-none">
                  <option>Excelente (Como nuevo)</option>
                  <option>Muy Bueno</option>
                  <option>Regular (Requiere ajustes)</option>
                  <option>Para Repuesto</option>
                </select>
             </div>
          </div>

          <div>
            <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] block mb-2 px-1">Características y Equipamiento</label>
            <textarea 
              rows={4} 
              className="w-full p-5 bg-white border border-white rounded-[32px] outline-none focus:ring-2 focus:ring-brand-gold shadow-premium text-xs font-medium"
              placeholder="Detalla accesorios, servicios de agencia, extras..."
            ></textarea>
          </div>
        </div>

        <button 
          onClick={handleSubmit}
          className="w-full red-gradient text-white py-6 rounded-[32px] font-black text-sm shadow-2xl active:scale-95 transition-all uppercase tracking-widest border-b-4 border-brand-redDark mt-4"
        >
          Enviar para Revisión BP
        </button>

        <div className="flex flex-col items-center gap-3 py-6">
           <div className="w-12 h-12 opacity-20">
              <Logo showText={false} />
           </div>
           <p className="text-[9px] text-center text-slate-400 font-black uppercase tracking-widest max-w-[200px]">
             Tu publicación será auditada por un especialista antes de ser listada.
           </p>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, placeholder, type = 'text' }: any) => (
  <div className="group">
    <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] block mb-2 px-1">{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      className="w-full p-5 bg-white border border-white rounded-[24px] font-black text-xs text-brand-slate outline-none focus:ring-2 focus:ring-brand-gold transition-all shadow-premium"
    />
  </div>
);

export default PostVehicleScreen;
