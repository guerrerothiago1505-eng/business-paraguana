
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './screens/WelcomeScreen';
import RegistrationFlow from './screens/RegistrationFlow';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RequestsScreen from './screens/RequestsScreen';
import RequestDetailScreen from './screens/RequestDetailScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import RealEstateScreen from './screens/RealEstateScreen'; 
import ListingDetailScreen from './screens/ListingDetailScreen';
import PostPropertyScreen from './screens/PostPropertyScreen';
import PostVehicleScreen from './screens/PostVehicleScreen';
import ServicesScreen from './screens/ServicesScreen';
import ServiceFormScreen from './screens/ServiceFormScreen';
import BusinessToolsScreen from './screens/BusinessToolsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Logo from './components/Logo';
import { User, BusinessRequest, Listing } from './types';

type View = 'welcome' | 'register' | 'login' | 'home' | 'requests' | 'request-detail' | 'chat' | 'profile' | 'realestate' | 'listing-detail' | 'post-property' | 'post-vehicle' | 'services' | 'service-form' | 'business' | 'favorites';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('welcome');
  const [user, setUser] = useState<User | null>(null);
  const [selectedRequest, setSelectedRequest] = useState<BusinessRequest | null>(null);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [selectedService, setSelectedService] = useState<{title: string, category: string} | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('bp_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('bp_history');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('bp_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentView('home');
    }
  }, []);

  const handleFinishRegistration = (userData: User) => {
    setIsVerifying(true);
    setTimeout(() => {
      setUser(userData);
      localStorage.setItem('bp_user', JSON.stringify(userData));
      setIsVerifying(false);
      setCurrentView('home');
    }, 2500);
  };

  const handleLogin = (email: string) => {
    setIsVerifying(true);
    setTimeout(() => {
      const mockUser: User = {
        id: 'vip-1',
        fullName: 'Cliente VIP Business',
        email: email,
        phone: '+58 412-1234567',
        address: 'Punto Fijo',
        identityVerified: true,
        membership: 'Premium',
        documents: []
      };
      setUser(mockUser);
      localStorage.setItem('bp_user', JSON.stringify(mockUser));
      setIsVerifying(false);
      setCurrentView('home');
    }, 2000);
  };

  const handleViewListing = (listing: Listing) => {
    setSelectedListing(listing);
    setHistory(prev => [listing.id, ...prev.filter(id => id !== listing.id)].slice(0, 10));
    setCurrentView('listing-detail');
  };

  const handleSelectService = (title: string, category: string) => {
    setSelectedService({ title, category });
    setCurrentView('service-form');
  };

  const toggleFavorite = (id: string) => {
    const newFavs = favorites.includes(id) ? favorites.filter(fid => fid !== id) : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('bp_favorites', JSON.stringify(newFavs));
  };

  const renderView = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1 flex flex-col"
        >
          {(() => {
            switch (currentView) {
              case 'welcome': return <WelcomeScreen onStart={() => setCurrentView('register')} onLogin={() => setCurrentView('login')} />;
              case 'register': return <RegistrationFlow onComplete={handleFinishRegistration} />;
              case 'login': return <LoginScreen onBack={() => setCurrentView('welcome')} onLogin={handleLogin} />;
              case 'home': return <HomeScreen onNavigate={setCurrentView} onListingClick={handleViewListing} historyIds={history} />;
              case 'requests': return <RequestsScreen onViewDetail={(req) => { setSelectedRequest(req); setCurrentView('request-detail'); }} />;
              case 'request-detail': return <RequestDetailScreen request={selectedRequest} onBack={() => setCurrentView('requests')} />;
              case 'chat': return <ChatScreen />;
              case 'profile': return <ProfileScreen user={user} onLogout={() => { localStorage.removeItem('bp_user'); setUser(null); setCurrentView('welcome'); }} onGoFavorites={() => setCurrentView('favorites')} />;
              case 'realestate': return <RealEstateScreen onBack={() => setCurrentView('home')} onPost={() => setCurrentView('post-property')} onListingClick={handleViewListing} favorites={favorites} onToggleFavorite={toggleFavorite} />;
              case 'listing-detail': return <ListingDetailScreen listing={selectedListing} onBack={() => setCurrentView('realestate')} isFavorite={favorites.includes(selectedListing?.id || '')} onToggleFavorite={() => toggleFavorite(selectedListing?.id || '')} onContact={() => setCurrentView('chat')} />;
              case 'post-property': return <PostPropertyScreen onBack={() => setCurrentView('home')} />;
              case 'post-vehicle': return <PostVehicleScreen onBack={() => setCurrentView('home')} />;
              case 'services': return <ServicesScreen onBack={() => setCurrentView('home')} onSelectService={handleSelectService} />;
              case 'service-form': return <ServiceFormScreen service={selectedService} onBack={() => setCurrentView('services')} />;
              case 'business': return <BusinessToolsScreen onBack={() => setCurrentView('home')} onNavigate={setCurrentView} />;
              case 'favorites': return <FavoritesScreen onBack={() => setCurrentView('profile')} onListingClick={handleViewListing} favoriteIds={favorites} />;
              default: return <HomeScreen onNavigate={setCurrentView} onListingClick={handleViewListing} historyIds={history} />;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  const showNavbar = ['home', 'requests', 'chat', 'profile', 'realestate', 'services', 'business', 'request-detail', 'post-property', 'post-vehicle', 'listing-detail', 'favorites', 'service-form'].includes(currentView);

  return (
    <div className="w-full min-h-screen bg-brand-beige flex justify-center overflow-x-hidden font-sans">
      <div className={`w-full max-w-screen-xl relative bg-brand-beige shadow-2xl border-x border-slate-100 flex flex-col ${showNavbar ? 'pb-24' : ''}`}>
        <main className="flex-1">
          {renderView()}
        </main>

        {showNavbar && (
          <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
            <div className="w-full max-w-screen-xl bg-white/95 backdrop-blur-md border-t border-slate-100 flex justify-around items-center h-20 px-4 safe-area-bottom shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
              <NavItem active={['home', 'realestate', 'services', 'business', 'post-property', 'post-vehicle', 'listing-detail', 'service-form'].includes(currentView)} icon="home" label="PRINCIPAL" onClick={() => setCurrentView('home')} />
              <NavItem active={['requests', 'request-detail'].includes(currentView)} icon="list" label="Mi Gestión" onClick={() => setCurrentView('requests')} />
              <NavItem active={currentView === 'chat'} icon="chat" label="Asesor BP" onClick={() => setCurrentView('chat')} />
              <NavItem active={['profile', 'favorites'].includes(currentView)} icon="user" label="Perfil" onClick={() => setCurrentView('profile')} />
            </div>
          </nav>
        )}
      </div>

      {isVerifying && (
        <div className="fixed inset-0 z-[100] bg-brand-beige flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-500">
          <div className="w-40 h-40 mb-10 relative">
             <Logo className="animate-pulse" showText={false} />
             <div className="absolute inset-[-10px] border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-xl font-display font-bold text-brand-slate uppercase tracking-widest animate-bounce">Sincronizando</h2>
          <p className="text-slate-400 text-[10px] mt-4 font-black uppercase tracking-[0.2em]">Accediendo a la red exclusiva VIP...</p>
        </div>
      )}
    </div>
  );
};

const NavItem = ({ active, icon, label, onClick }: any) => {
  const getIcon = () => {
    switch (icon) {
      case 'home': return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
      case 'list': return <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>;
      case 'chat': return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>;
      case 'user': return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
      default: return null;
    }
  };

  return (
    <button onClick={onClick} className={`flex flex-col items-center transition-all duration-300 ${active ? 'text-brand-red scale-110' : 'text-slate-400'}`}>
      <div className={`p-1 rounded-xl ${active ? 'bg-brand-red/5' : ''}`}>
        {getIcon()}
      </div>
      <span className={`text-[8px] mt-1 font-black uppercase tracking-tighter ${active ? 'opacity-100' : 'opacity-60'}`}>{label}</span>
    </button>
  );
};

export default App;
