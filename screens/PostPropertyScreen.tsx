
import React, { useState } from 'react';
import Logo from '../components/Logo';

interface PostPropertyScreenProps {
  onBack: () => void;
}

const PostPropertyScreen: React.FC<PostPropertyScreenProps> = ({ onBack }) => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    type: 'Venta',
    description: '',
    location: 'Puerta Maraven'
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
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Notificación enviada</p>
            <p className="text-[9px] text-slate-300 uppercase leading-tight mt-1">El equipo de Business Paraguaná ha recibido tu publicación de inmueble.</p>
          </div>
        </div>
      )}

      <header className="p-6 pt-10 border-b border-white/50 flex items-center gap-4 bg-white/20 backdrop-blur-md">
        <button onClick={onBack} className="p-2 bg-white rounded-xl text-slate-600 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="font-display font-black text-brand-slate uppercase tracking-tight">Publicar Inmueble</h2>
      </header>

      <div className="p-6 space-y-6 pb-24">
        <section>
          <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] block mb-4 px-1">Fotos del Inmueble (4-8 recomendadas)</label>
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square bg-white border-2 border-dashed border-brand-gold/30 rounded-3xl flex flex-col items-center justify-center text-brand-red active:scale-95 transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-[9px] font-black mt-1 uppercase tracking-widest">Añadir</span>
            </div>
            {[1, 2].map(i => (
              <div key={i} className="aspect-square bg-white rounded-3xl relative overflow-hidden group shadow-sm">
                 <img src={`https://picsum.photos/seed/prop${i}/200`} alt="preview" className="w-full h-full object-cover" />
                 <button className="absolute top-2 right-2 p-1.5 bg-brand-red text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   </svg>
                 </button>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-4">
          <InputGroup label="Título descriptivo" placeholder="Ej. Casa moderna con piscina" />
          <div className="grid grid-cols-2 gap-4">
             <InputGroup label="Precio (USD)" type="number" placeholder="45,000" />
             <div className="group">
                <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] block mb-2 px-1">Tipo</label>
                <select className="w-full p-4 bg-white border border-white rounded-[24px] font-black text-xs text-brand-slate outline-none focus:ring-2 focus:ring-brand-gold shadow-premium appearance-none">
                  <option>Venta</option>
                  <option>Alquiler</option>
                </select>
             </div>
          </div>
          <InputGroup label="Ubicación" placeholder="Puerta Maraven, Calle 5" />
          <div>
            <label className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] block mb-2 px-1">Descripción</label>
            <textarea 
              rows={4} 
              className="w-full p-5 bg-white border border-white rounded-[32px] outline-none focus:ring-2 focus:ring-brand-gold shadow-premium text-xs font-medium"
              placeholder="Detalla las características del inmueble..."
            ></textarea>
          </div>
        </div>

        <button 
          onClick={handleSubmit}
          className="w-full red-gradient text-white py-6 rounded-[32px] font-black text-sm shadow-2xl active:scale-95 transition-all uppercase tracking-widest border-b-4 border-brand-redDark"
        >
          Enviar para Revisión BP
        </button>
        <p className="text-[9px] text-center text-slate-400 font-black uppercase tracking-[0.2em] mt-4">
          Un asesor validará tu propiedad en menos de 24 horas.
        </p>
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

export default PostPropertyScreen;
