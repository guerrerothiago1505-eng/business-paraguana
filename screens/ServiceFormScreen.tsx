
import React, { useState } from 'react';
import Logo from '../components/Logo';

interface ServiceFormScreenProps {
  service: { title: string, category: string } | null;
  onBack: () => void;
}

const ServiceFormScreen: React.FC<ServiceFormScreenProps> = ({ service, onBack }) => {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        onBack();
      }, 3000);
    }, 1500);
  };

  const renderFields = () => {
    switch (service.category) {
      case 'Notaría':
        return (
          <>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest px-1">Tipo de Documento</label>
              <select className="w-full bg-white border border-slate-100 p-5 rounded-[24px] outline-none focus:ring-2 focus:ring-brand-gold appearance-none shadow-premium font-bold text-sm">
                <option>Poder Especial / General</option>
                <option>Contrato de Arrendamiento</option>
                <option>Permiso de Viaje (Menores)</option>
                <option>Declaración Jurada</option>
                <option>Otro documento notarial</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest px-1">Detalles de la Solicitud</label>
              <textarea 
                rows={4}
                placeholder="Describa brevemente el propósito del documento..."
                className="w-full bg-white border border-slate-100 p-5 rounded-[28px] outline-none focus:ring-2 focus:ring-brand-gold shadow-premium text-sm"
              />
            </div>
          </>
        );
      case 'Registros':
        return (
          <>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest px-1">Acción Requerida</label>
              <select className="w-full bg-white border border-slate-100 p-5 rounded-[24px] outline-none focus:ring-2 focus:ring-brand-gold appearance-none shadow-premium font-bold text-sm">
                <option>Protocolización de Compra-Venta</option>
                <option>Cédula Catastral / Ficha</option>
                <option>Constitución de Nueva Empresa</option>
                <option>Modificación de Acta Constitutiva</option>
                <option>Balance de Apertura / Comisario</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest px-1">Carga de Documentos (PDF/JPG)</label>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-slate-200 rounded-3xl p-6 bg-white/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white transition-all">
                  <span className="text-2xl">📄</span>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Documento 1</span>
                </div>
                <div className="border-2 border-dashed border-slate-200 rounded-3xl p-6 bg-white/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white transition-all">
                  <span className="text-2xl">📄</span>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Documento 2</span>
                </div>
              </div>
            </div>
          </>
        );
      case 'Legal':
        return (
          <>
             <div className="space-y-2">
              <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest px-1">Asunto de Acompañamiento</label>
              <input 
                type="text"
                placeholder="Ej. Revisión de contrato mercantil"
                className="w-full bg-white border border-slate-100 p-5 rounded-[24px] outline-none focus:ring-2 focus:ring-brand-gold shadow-premium font-bold text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-brand-gold uppercase tracking-widest px-1">Descripción de Necesidad</label>
              <textarea 
                rows={5}
                placeholder="Cuéntenos cómo podemos asistirle legalmente..."
                className="w-full bg-white border border-slate-100 p-5 rounded-[28px] outline-none focus:ring-2 focus:ring-brand-gold shadow-premium text-sm"
              />
            </div>
            <div className="flex items-center gap-4 bg-white/40 p-5 rounded-[24px] border border-white">
              <div className="w-12 h-12 gold-gradient rounded-2xl flex items-center justify-center text-xl shadow-lg">📞</div>
              <div className="flex-1">
                 <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest">Contacto Directo</p>
                 <p className="text-[9px] text-slate-500 font-bold">Un asesor legal le contactará en menos de 1 hora.</p>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-beige relative animate-in slide-in-from-right duration-300">
      {showToast && (
        <div className="toast-notification w-72 bg-brand-slate text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-brand-gold/30">
          <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-brand-slate text-xs font-black">!</div>
          <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Solicitud Recibida</p>
            <p className="text-[9px] text-slate-300 uppercase leading-tight mt-1">El equipo de Business Paraguaná ha sido notificado de su gestión.</p>
          </div>
        </div>
      )}

      <header className="p-6 pt-10 flex items-center gap-4 bg-white/30 backdrop-blur-md border-b border-white/50">
        <button onClick={onBack} className="p-2 bg-white rounded-xl text-brand-slate shadow-sm active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h2 className="text-xl font-display font-black text-brand-slate uppercase tracking-tight">{service.title}</h2>
          <p className="text-[9px] font-black text-brand-gold uppercase tracking-[0.3em]">Formulario de Solicitud</p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="p-6 space-y-8 pb-32">
        <div className="bg-white/40 p-6 rounded-[44px] border border-white space-y-8">
           {renderFields()}
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full red-gradient text-white py-6 rounded-[32px] font-black text-sm shadow-2xl active:scale-95 transition-all uppercase tracking-widest border-b-4 border-brand-redDark disabled:opacity-50"
        >
          {loading ? 'Procesando...' : 'Confirmar Solicitud'}
        </button>

        <div className="flex flex-col items-center gap-4 opacity-40 py-6">
           <div className="w-12 h-12">
             <Logo showText={false} />
           </div>
           <p className="text-[8px] font-black text-slate-500 text-center uppercase tracking-widest max-w-[200px]">
             Su información está protegida bajo estándares de confidencialidad legal BP.
           </p>
        </div>
      </form>
    </div>
  );
};

export default ServiceFormScreen;
