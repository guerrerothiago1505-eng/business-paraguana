
import React, { useState } from 'react';
import { User } from '../types';

interface RegistrationFlowProps {
  onComplete: (user: User) => void;
}

const RegistrationFlow: React.FC<RegistrationFlowProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: 'Punto Fijo'
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleFinish = () => {
    onComplete({
      id: Math.random().toString(36).substr(2, 9),
      ...formData,
      identityVerified: true,
      membership: 'Basic',
      documents: []
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6 animate-in slide-in-from-right duration-300">
      <div className="flex items-center mb-8 pt-4">
        {step > 1 && step < 4 && (
          <button onClick={prevStep} className="p-2 -ml-2 text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <div className="flex-1 text-center">
          <div className="h-1.5 bg-slate-100 rounded-full w-48 mx-auto relative overflow-hidden">
            <div 
              className="absolute h-full bg-blue-600 transition-all duration-500 ease-out" 
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {step === 1 && (
        <div className="flex-1 animate-in fade-in duration-500">
          <h2 className="text-3xl font-bold text-slate-800 mb-2 leading-tight">Crea tu cuenta segura</h2>
          <p className="text-slate-500 mb-8">Información básica para tu perfil aliado.</p>
          
          <div className="space-y-5">
            <InputGroup label="Nombre completo" value={formData.fullName} onChange={(v) => setFormData({...formData, fullName: v})} placeholder="Ej. Pedro Pérez" />
            <InputGroup label="Teléfono (+58)" type="tel" value={formData.phone} onChange={(v) => setFormData({...formData, phone: v})} placeholder="412-1234567" />
            <InputGroup label="Correo electrónico" type="email" value={formData.email} onChange={(v) => setFormData({...formData, email: v})} placeholder="pedro@ejemplo.com" />
            
            <div className="group">
              <label className="text-sm font-bold text-slate-700 block mb-2 px-1">Ubicación</label>
              <select 
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none appearance-none"
              >
                <option>Punto Fijo</option>
                <option>Adícora</option>
                <option>Coro</option>
                <option>Los Taques</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex-1 animate-in fade-in duration-500">
          <h2 className="text-3xl font-bold text-slate-800 mb-2 leading-tight">Documento de Identidad</h2>
          <p className="text-slate-500 mb-8">Sube fotos nítidas de tu cédula original.</p>
          
          <div className="grid grid-cols-1 gap-4">
            <UploadBox label="Frontal de Cédula" />
            <UploadBox label="Posterior de Cédula" />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex-1 flex flex-col items-center animate-in fade-in duration-500">
          <h2 className="text-3xl font-bold text-slate-800 mb-2 text-center leading-tight">Verificación Facial</h2>
          <p className="text-slate-500 mb-10 text-center px-4">Ubica tu rostro dentro del marco verde.</p>
          
          <div className="relative w-72 h-96 rounded-[100px] border-4 border-green-500 bg-slate-900 overflow-hidden shadow-2xl">
             <div className="absolute inset-0 flex items-center justify-center">
                {/* SVG representando el óvalo guía */}
                <svg className="w-64 h-80 text-green-500 opacity-40" viewBox="0 0 100 100">
                  <ellipse cx="50" cy="50" rx="35" ry="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                </svg>
             </div>
             <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] text-white font-bold uppercase tracking-widest border border-white/20">
                  Mirando al frente
                </div>
             </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="flex-1 flex flex-col justify-center items-center text-center animate-in zoom-in-95 duration-500">
           <div className="w-24 h-24 bg-blue-600 text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-blue-200 rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
           </div>
           <h2 className="text-3xl font-bold text-slate-800 mb-4">¡Listo para despegar!</h2>
           <p className="text-slate-500 mb-8 px-4">Hemos validado tus datos. Bienvenido a la red de negocios más exclusiva de la región.</p>
           
           <div className="w-full space-y-3 bg-slate-50 p-6 rounded-[32px] border border-slate-100 text-left">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase">Membresía Activa</span>
                <span className="text-xs font-bold text-blue-600">BASIC (FREE)</span>
              </div>
              <div className="h-px bg-slate-200 w-full my-1"></div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase">Estado Perfil</span>
                <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  VERIFICADO
                </span>
              </div>
           </div>
        </div>
      )}

      <button 
        onClick={step === 4 ? handleFinish : nextStep}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-[0.98] transition-all mt-8"
      >
        {step === 4 ? 'Acceder al Dashboard' : step === 3 ? 'Capturar Identidad' : 'Continuar'}
      </button>
    </div>
  );
};

const InputGroup = ({ label, value, onChange, placeholder, type = 'text' }: any) => (
  <div className="group">
    <label className="text-sm font-bold text-slate-700 block mb-2 px-1">{label}</label>
    <input 
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none"
    />
  </div>
);

const UploadBox = ({ label }: any) => (
  <div className="group border-2 border-dashed border-slate-200 rounded-3xl p-6 bg-slate-50 hover:bg-blue-50/50 hover:border-blue-300 transition-all cursor-pointer flex flex-col items-center gap-3">
    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      </svg>
    </div>
    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</span>
  </div>
);

export default RegistrationFlow;
