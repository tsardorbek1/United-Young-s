
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Team from './components/Team';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import JoinFormModal from './components/JoinFormModal';

const App: React.FC = () => {
  const [isOwner, setIsOwner] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('owner') === '1') {
      try { localStorage.setItem('uyOwner', '1'); } catch {}
    }
    try { setIsOwner(localStorage.getItem('uyOwner') === '1'); } catch { setIsOwner(false); }
  }, []);

  useEffect(() => {
    const handler = () => {
      if (isOwner) setShowJoinModal(true);
    };
    window.addEventListener('open-join-modal', handler as EventListener);
    return () => window.removeEventListener('open-join-modal', handler as EventListener);
  }, [isOwner]);

  return (
    <div className="bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Team />
        <JoinUs />
      </main>
      <Footer />
      {isOwner && showJoinModal && (
        <JoinFormModal onClose={() => setShowJoinModal(false)} />
      )}
    </div>
  );
};

export default App;
